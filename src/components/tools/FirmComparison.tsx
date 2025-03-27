import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Papa from 'papaparse';
import { FaTimes, FaPlus, FaExchangeAlt,FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';
import { logEvent } from '../../types/analytics';
import SEO from '../SEO';

interface Firm {
    FIRM: string;
    PRICE: string;
    'ACCOUNT SIZE': string;
    'PROFIT SPLIT': string;
    'PROFIT TARGET': string;
    'MAX. DAILY LOSS': string;
    'MAX. TOTAL DRAWDOWN': string;
    'TIME TO COMPLETE': string;
    RESET: string;
    'Trading Platforms': string;
    STEPS: string;
    Broker: string;
    Instrumentos?: string;
    logo?: string;
    // Otras propiedades que puedan existir
    [key: string]: any;
}

interface ComparisonCategory {
    title: string;
    icon: React.ReactNode;
    fields: Array<{
        label: string;
        field: string;
        type: string;
    }>;
}

// Interfaz para agrupar firmas por nombre
interface FirmGroup {
    name: string;
    configurations: Firm[];
}

const FirmComparison: React.FC = () => {
    const [allFirms, setAllFirms] = useState<Firm[]>([]);
    const [selectedFirms, setSelectedFirms] = useState<Firm[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [isCategoryCollapsed, setIsCategoryCollapsed] = useState<Record<string, boolean>>({});
    // Nuevo estado para manejo de selección de configuración
    const [showConfigSelector, setShowConfigSelector] = useState(false);
    const [selectedFirmConfigurations, setSelectedFirmConfigurations] = useState<FirmGroup | null>(null);
    // Añade un nuevo estado para las categorías dinámicas
    const [dynamicCategories, setDynamicCategories] = useState<ComparisonCategory[]>([]);

    // Envolvemos predefinedCategories con useMemo
    const predefinedCategories = useMemo<Record<string, ComparisonCategory>>(() => ({
        general: {
            title: "Información General",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            fields: []
        },
        trading: {
            title: "Condiciones de Trading",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17L3 11M3 11L9 5M3 11H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            fields: []
        },
        platforms: {
            title: "Plataformas y Mercados",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17H13M17 14V17M17 17H21M17 17V21M13 5V10C13 10.5523 12.5523 11 12 11H7C6.44772 11 6 10.5523 6 10V5C6 4.44772 6.44772 4 7 4H12C12.5523 4 13 4.44772 13 5ZM6 13V14C6 14.5523 6.44772 15 7 15H12C12.5523 15 13 14.5523 13 14V13C13 12.4477 12.5523 12 12 12H7C6.44772 12 6 12.4477 6 13ZM17 4V10C17 10.5523 17.4477 11 18 11H21M17 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            fields: []
        }
    }), []);

    // Envolvemos fieldClassification con useMemo
    const fieldClassification = useMemo(() => ({
        general: [
            { field: 'FIRM', label: 'Firma', type: 'text' },
            { field: 'STEPS', label: 'Desafío', type: 'text' },
            { field: 'ACCOUNT SIZE', label: 'Tamaño de cuenta', type: 'currency' },
            { field: 'PRICE', label: 'Precio', type: 'currency' },
            { field: 'PRICE_PER_DRAWDOWN', label: 'Precio por $ de Drawdown', type: 'currency' },
        ],
        trading: [
            { field: 'PROFIT TARGET', label: 'Objetivo de beneficio', type: 'percentage' },
            { field: 'MAX. DAILY LOSS', label: 'Pérdida diaria máxima', type: 'percentage' },
            { field: 'MAX. TOTAL DRAWDOWN', label: 'Drawdown total máximo', type: 'percentage' },
            { field: 'PROFIT SPLIT', label: 'División de beneficios', type: 'percentage' }
        ],
        platforms: [
            { field: 'Trading Platforms', label: 'Plataformas', type: 'list' },
            { field: 'Broker', label: 'Broker', type: 'text' },
            { field: 'Instrumentos', label: 'Instrumentos', type: 'list' },
        ],
    }), []);

    // Ahora useCallback tendrá referencias estables a estas dependencias
    const analyzeAvailableFields = useCallback((firms: Firm[]) => {
        if (!firms || firms.length === 0) return;

        // Crea un conjunto para rastrear qué campos tienen datos
        const fieldsWithData = new Set<string>();
        
        // Examina cada firma y cada propiedad para determinar si hay datos
        firms.forEach(firm => {
            Object.entries(firm).forEach(([key, value]) => {
                if (value && value !== '-' && value !== '') {
                    fieldsWithData.add(key);
                }
            });
        });

        // Crea las categorías dinámicas basadas en los campos disponibles
        const newCategories: ComparisonCategory[] = [];
        
        // Para cada categoría predefinida
        Object.entries(predefinedCategories).forEach(([key, category]) => {
            // Filtra los campos que realmente tienen datos
            const availableFields = fieldClassification[key as keyof typeof fieldClassification]
                .filter(field => fieldsWithData.has(field.field))
                .map(field => ({ label: field.label, field: field.field, type: field.type }));
            
            // Solo agrega la categoría si tiene campos disponibles
            if (availableFields.length > 0) {
                newCategories.push({
                    ...category,
                    fields: availableFields
                });
            }
        });
        
        setDynamicCategories(newCategories);
    }, [predefinedCategories, fieldClassification]);

    // Función para calcular campos adicionales
    const addCalculatedFields = (firm: Firm): Firm => {
        const priceValue = parseFloat(firm.PRICE || '0');
        const drawdownValue = parseFloat(firm['MAX. TOTAL DRAWDOWN'] || '0');
        
        // Calculamos el precio por unidad de drawdown si ambos valores son válidos
        const pricePerDrawdown = (priceValue && drawdownValue) 
            ? (priceValue / drawdownValue).toFixed(2)
            : '';

        // Asignamos valores para las nuevas propiedades
        return {
            ...firm,
            PRICE_PER_DRAWDOWN: pricePerDrawdown,
            MONTHLY_FEE: firm.MONTHLY_FEE || '-',
        };
    };

    useEffect(() => {
        try {
            Papa.parse('/pro_firm_details_v2-profirm_gps_v1_separado.csv', {
                download: true,
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    if (Array.isArray(result.data) && result.data.length > 0) {
                        // Añadimos instrumentos y campos calculados
                        const processedFirms = (result.data as Firm[]).map(firm => {
                            // Valores predeterminados basados en información común
                            let instruments = 'Forex, Índices, Materias Primas';
                            
                            // Personalizar según la firma
                            if (firm.FIRM?.includes('FTMO')) {
                                instruments = 'Forex, Índices, Materias Primas, Criptomonedas, Futuros';
                            } else if (firm.FIRM?.includes('MyForexFunds') || firm.FIRM?.includes('MFF')) {
                                instruments = 'Forex, Índices, Materias Primas, Metales';
                            } else if (firm.FIRM?.includes('E8')) {
                                instruments = 'Forex, Índices, Materias Primas, Metales';
                                firm.MONTHLY_FEE = '9.99';
                            }
                            
                            // Asignar logo basado en el nombre (ajusta las rutas según tu proyecto)
                            let logo = '';
                            try {
                                if (firm.logo && firm.logo.trim() !== '') {
                                    logo = firm.logo;
                                } else {
                                    // Si no hay logo en el CSV, intentamos asignarlo basado en el nombre
                                    const firmName = firm.FIRM?.toLowerCase().replace(/\s+/g, '');
                                    if (firmName) {
                                        logo = `${firmName}.png`;
                                    }
                                }
                            } catch (e) {
                                console.error('Error al asignar logo:', e);
                            }
                            
                            return addCalculatedFields({
                                ...firm,
                                Instrumentos: instruments,
                                logo: logo
                            });
                        });
                        
                        setAllFirms(processedFirms);
                        
                        // Analiza los campos disponibles después de procesar las firmas
                        analyzeAvailableFields(processedFirms);
                    }
                },
                error: (error) => {
                    console.error('Error parsing CSV:', error);
                },
            });
        } catch (error) {
            console.error('Error in CSV loading effect:', error);
        }
    }, [analyzeAvailableFields]);

    // Función para agrupar las firmas por nombre
    const groupFirmsByName = (firms: Firm[]): FirmGroup[] => {
        const groups: Record<string, Firm[]> = {};
        
        firms.forEach(firm => {
            if (!firm.FIRM) return;
            
            if (!groups[firm.FIRM]) {
                groups[firm.FIRM] = [];
            }
            groups[firm.FIRM].push(firm);
        });
        
        return Object.keys(groups).map(name => ({
            name,
            configurations: groups[name]
        }));
    };

    // Función para mostrar las configuraciones de una firma
    const handleFirmGroupSelect = (firmGroup: FirmGroup) => {
        setSelectedFirmConfigurations(firmGroup);
        setShowConfigSelector(true);
    };

    const handleConfigurationSelect = (firm: Firm) => {
        if (selectedFirms.length < 5 && !selectedFirms.some(f => 
            f.FIRM === firm.FIRM && 
            f['ACCOUNT SIZE'] === firm['ACCOUNT SIZE'] && 
            f.PRICE === firm.PRICE
        )) {
            setSelectedFirms([...selectedFirms, firm]);
            logEvent('Comparación', 'Añadir Firma', `${firm.FIRM} - ${firm['ACCOUNT SIZE']} - $${firm.PRICE}`);
        }
        setShowConfigSelector(false);
        setShowDropdown(false);
        setSearchTerm('');
    };

    const handleRemoveFirm = (firm: Firm) => {
        setSelectedFirms(selectedFirms.filter(f => 
            !(f.FIRM === firm.FIRM && 
            f['ACCOUNT SIZE'] === firm['ACCOUNT SIZE'] && 
            f.PRICE === firm.PRICE)
        ));
        logEvent('Comparación', 'Eliminar Firma', `${firm.FIRM} - ${firm['ACCOUNT SIZE']} - $${firm.PRICE}`);
    };

    const handleClearAll = () => {
        setSelectedFirms([]);
        logEvent('Comparación', 'Limpiar Todo', '');
    };

    const formatValue = (value: string | undefined, type: string, firm?: Firm): React.ReactNode => {
        if (!value || value === '-') return <span className="text-[#4d515d]">-</span>;

        switch (type) {
            case 'currency':
                if (isNaN(parseFloat(value))) {
                    // Mostrar el nombre de la firma si está disponible o "N/D" si no lo está
                    return <span className="font-medium text-emerald-400">{firm?.FIRM || 'N/D'}</span>;
                }
                return <span className="font-medium text-emerald-400">${value}</span>;
            case 'percentage':
                if (isNaN(parseFloat(value))) {
                    return <span className="font-medium text-amber-400">{firm?.FIRM || 'N/D'}</span>;
                }
                return <span className="font-medium text-amber-400">{value}</span>;
            case 'list':
                return (
                    <div className="flex flex-wrap justify-center gap-1">
                        {value.split(',').map((item, i) => (
                            <span key={i} className="bg-gradient-to-r from-[#2a2e39] to-[#343945] px-2 py-0.5 rounded-md text-xs inline-block shadow-sm">
                                {item.trim()}
                            </span>
                        ))}
                    </div>
                );
            case 'number':
                return <span className="font-medium text-blue-400">{value}</span>;
            default:
                return <span className="text-white">{value}</span>;
        }
    };

    const toggleCategory = (category: string) => {
        setIsCategoryCollapsed({
            ...isCategoryCollapsed,
            [category]: !isCategoryCollapsed[category]
        });
    };

    // Agrupar firmas por nombre para el listado
    const firmGroups = groupFirmsByName(
        allFirms.filter(firm => 
            firm.FIRM?.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Filtrar grupos que ya tienen todas sus configuraciones seleccionadas
    const filteredFirmGroups = firmGroups.filter(group => {
        return group.configurations.some(config => 
            !selectedFirms.some(f => 
                f.FIRM === config.FIRM && 
                f['ACCOUNT SIZE'] === config['ACCOUNT SIZE'] && 
                f.PRICE === config.PRICE
            )
        );
    });

    const placeholderCells = Array(5 - selectedFirms.length).fill(null);

    return (
        <>
            <SEO 
                title="Comparación de Prop Firms | Prop Firm GPS"
                description="Compara hasta cinco prop firms lado a lado para encontrar la que mejor se adapta a tus necesidades de trading."
            />
            <div className="bg-gradient-to-r from-[#0f1118] via-[#1a1f2d] to-[#0f1118]">
                {/* Header con efecto de onda */}
                <div className="relative bg-gradient-to-r from-[#0c122e] via-[#1a237e] to-[#0c122e] py-16 overflow-hidden">
                    {/* Formas geométricas decorativas */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute w-64 h-64 rounded-full bg-blue-400 -top-20 -left-20"></div>
                        <div className="absolute w-96 h-96 rounded-full bg-indigo-500 -bottom-40 -right-20"></div>
                    </div>
                    
                    <div className="max-w-7xl mx-auto px-4 relative flex justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center md:text-left">
                            Compare Firms
                        </h1>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-8">
                    {/* Selector de firmas */}
                    <div className="bg-gradient-to-br from-[#1a2035] to-[#131722] rounded-2xl shadow-xl p-6 mb-8 border border-indigo-500/20 relative">
                        {/* Efecto de brillo en las esquinas */}
                        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-tl-2xl -z-10"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-indigo-500/20 to-transparent rounded-br-2xl -z-10"></div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {selectedFirms.map((firm, index) => (
                                <div 
                                    key={`${firm.FIRM}-${firm['ACCOUNT SIZE']}-${firm.PRICE}-${index}`}
                                    className="relative flex flex-col items-center bg-gradient-to-br from-[#111827] to-[#1a1f2d] 
                                               rounded-lg p-4 border border-indigo-500/20 shadow-lg transform hover:translate-y-[-2px] 
                                               transition-all duration-200"
                                >
                                    <button 
                                        onClick={() => handleRemoveFirm(firm)}
                                        className="absolute top-2 right-2 text-[#6c7293] hover:text-red-400 
                                                   bg-[#11131d] rounded-full p-1 transition-colors duration-200"
                                        aria-label="Eliminar firma"
                                    >
                                        <FaTimes size={14} />
                                    </button>
                                    <div className="relative h-20 w-20 mb-3 p-2 flex items-center justify-center 
                                                    bg-gradient-to-br from-[#1e2235] to-[#141824] rounded-full 
                                                    shadow-inner border border-indigo-500/10">
                                        {firm.logo ? (
                                            <img 
                                                src={firm.logo && firm.logo.trim() !== '' ?
                                                    require(`../../logos/${firm.logo}`) :
                                                    'https://via.placeholder.com/80?text=Logo'}
                                                alt={firm.FIRM}
                                                className="max-h-full max-w-full object-contain"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80?text=Logo';
                                                }}
                                            />
                                        ) : (
                                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500/30 to-blue-500/30 
                                                          flex items-center justify-center shadow-lg">
                                                <span className="text-xl font-medium text-white">{firm.FIRM.substring(0, 2)}</span>
                                            </div>
                                        )}
                                    </div>
                                    <span className="font-medium text-center text-white">{firm.FIRM}</span>
                                    <span className="text-xs text-indigo-300 mt-1">
                                        {isNaN(parseFloat(firm.PRICE)) ? `${firm.FIRM}` : `$${firm.PRICE}`} - {firm['ACCOUNT SIZE']}
                                    </span>
                                </div>
                            ))}
                            
                            {selectedFirms.length < 5 && (
                                <div 
                                    className="flex flex-col items-center justify-center bg-gradient-to-br from-[#111827]/70 to-[#1a1f2d]/70
                                               rounded-lg p-4 border border-dashed border-indigo-500/30 hover:border-indigo-500/70 
                                               transition-all duration-300 cursor-pointer min-h-[140px] backdrop-blur-sm
                                               shadow-inner"
                                    onClick={() => setShowDropdown(!showDropdown)}
                                >
                                    <button className="flex flex-col items-center">
                                        <div className="h-20 w-20 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 
                                                       rounded-full flex items-center justify-center shadow-inner mb-3">
                                            <FaPlus className="text-indigo-400" size={24} />
                                        </div>
                                        <span className="text-indigo-300 text-sm font-medium">Añadir Firma</span>
                                    </button>
                                </div>
                            )}
                            
                            {placeholderCells.slice(selectedFirms.length < 5 ? 1 : 0).map((_, i) => (
                                <div 
                                    key={`placeholder-${i}`} 
                                    className="bg-gradient-to-br from-[#111827]/30 to-[#1a1f2d]/30 rounded-lg p-4 
                                               border border-dashed border-indigo-500/10 opacity-40 min-h-[140px] 
                                               flex items-center justify-center shadow-inner"
                                >
                                    <span className="text-indigo-400/40 text-sm">Select Program</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Botón para limpiar todas las firmas */}
                        {selectedFirms.length > 0 && (
                            <div className="mt-4 flex justify-center">
                                <button 
                                    onClick={handleClearAll}
                                    className="group flex items-center px-4 py-2 bg-gradient-to-r from-[#111827]/80 to-[#1a1f2d]/80 
                                              rounded-lg border border-indigo-500/20 hover:border-red-500/30 
                                              shadow-md transition-all duration-300"
                                >
                                    <span className="mr-2 bg-red-500/10 p-1 rounded-full group-hover:bg-red-500/20 transition-all duration-300">
                                        <FaTimes className="text-red-400 group-hover:text-red-500" size={12} />
                                    </span>
                                    <span className="text-indigo-300 group-hover:text-red-400 text-sm transition-all duration-300">
                                        Limpiar todas las firmas
                                    </span>
                                </button>
                            </div>
                        )}
                        
                        {/* Selector de firmas - Lista inicial de firmas */}
                        {showDropdown && !showConfigSelector && (
                            <div className="mt-6 p-6 bg-gradient-to-br from-[#1a2035] to-[#131722] rounded-xl 
                                           border border-indigo-500/20 shadow-xl z-20 relative backdrop-blur-sm">
                                <div className="mb-4 relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaSearch className="text-indigo-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Buscar firma..."
                                        className="w-full pl-10 p-3 bg-[#0f1118] border border-indigo-500/30 rounded-lg 
                                                  text-white focus:border-indigo-500 focus:outline-none focus:ring-1 
                                                  focus:ring-indigo-500 transition-all duration-200"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="max-h-60 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 
                                               pr-1 scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-[#0f1118]">
                                    {filteredFirmGroups.length > 0 ? (
                                        filteredFirmGroups.map((group, index) => (
                                            <div 
                                                key={`${group.name}-${index}`}
                                                className="flex items-center px-4 py-3 hover:bg-indigo-600/10 cursor-pointer 
                                                           rounded-lg transition-colors duration-200 border border-transparent 
                                                           hover:border-indigo-500/30"
                                                onClick={() => handleFirmGroupSelect(group)}
                                            >
                                                <div className="h-10 w-10 mr-3 flex items-center justify-center bg-gradient-to-br 
                                                              from-[#1e2235] to-[#141824] rounded-full shadow-md border border-indigo-500/10">
                                                    {group.configurations[0]?.logo ? (
                                                        <img 
                                                            src={group.configurations[0].logo && group.configurations[0].logo.trim() !== '' ?
                                                                require(`../../logos/${group.configurations[0].logo}`) :
                                                                'https://via.placeholder.com/40?text=Logo'}
                                                            alt={group.name}
                                                            className="max-h-8 max-w-8 object-contain"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=Logo';
                                                            }}
                                                        />
                                                    ) : (
                                                    <span className="text-xs font-medium text-white">{group.name.substring(0, 2)}</span>
                                                    )}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-white">{group.name}</span>
                                                    <span className="text-xs text-indigo-300">{group.configurations.length} configuraciones</span>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-span-full px-4 py-6 text-center text-indigo-300">
                                            No se encontraron resultados
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        
                        {/* Selector de configuración de la firma seleccionada */}
                        {showConfigSelector && selectedFirmConfigurations && (
                            <div className="mt-6 p-6 bg-gradient-to-br from-[#1a2035] to-[#131722] rounded-xl 
                                           border border-indigo-500/20 shadow-xl z-20 relative backdrop-blur-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-medium text-white flex items-center">
                                        <button 
                                            onClick={() => {
                                                setShowConfigSelector(false);
                                                setSelectedFirmConfigurations(null);
                                            }}
                                            className="mr-2 p-1 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 transition-colors duration-200"
                                        >
                                            <FaChevronDown className="transform rotate-90 text-indigo-400" size={14} />
                                        </button>
                                        <div className="flex items-center">
                                            {selectedFirmConfigurations.configurations[0]?.logo ? (
                                                <div className="h-8 w-8 mr-3 flex items-center justify-center bg-gradient-to-br 
                                                              from-[#1e2235] to-[#141824] rounded-full shadow-md border border-indigo-500/10">
                                                    <img 
                                                        src={selectedFirmConfigurations.configurations[0].logo && selectedFirmConfigurations.configurations[0].logo.trim() !== '' ?
                                                            require(`../../logos/${selectedFirmConfigurations.configurations[0].logo}`) :
                                                            'https://via.placeholder.com/32?text=Logo'}
                                                        alt={selectedFirmConfigurations.name}
                                                        className="max-h-6 max-w-6 object-contain"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32?text=Logo';
                                                        }}
                                                    />
                                                </div>
                                            ) : null}
                                            Configuraciones de {selectedFirmConfigurations.name}
                                        </div>
                                    </h3>
                                </div>
                                
                                <div className="grid grid-cols-1 gap-3">
                                    {selectedFirmConfigurations.configurations
                                        .filter(config => !selectedFirms.some(f => 
                                            f.FIRM === config.FIRM && 
                                            f['ACCOUNT SIZE'] === config['ACCOUNT SIZE'] && 
                                            f.PRICE === config.PRICE
                                        ))
                                        .map((config, index) => (
                                        <div 
                                            key={`config-${config.FIRM}-${config['ACCOUNT SIZE']}-${config.PRICE}-${index}`}
                                            className="flex justify-between items-center px-4 py-3 bg-[#111827] hover:bg-indigo-600/10 
                                                      cursor-pointer rounded-lg border border-indigo-500/10 hover:border-indigo-500/30
                                                      transition-all duration-200"
                                            onClick={() => handleConfigurationSelect(config)}
                                        >
                                            <div className="flex items-center">
                                                <div className="h-12 w-12 mr-3 flex items-center justify-center p-1
                                                              bg-gradient-to-br from-[#1e2235] to-[#141824] rounded-full 
                                                              shadow-inner border border-indigo-500/10">
                                                    {config.logo ? (
                                                        <img 
                                                            src={config.logo && config.logo.trim() !== '' ?
                                                                require(`../../logos/${config.logo}`) :
                                                                'https://via.placeholder.com/48?text=Logo'}
                                                            alt={config.FIRM}
                                                            className="max-h-full max-w-full object-contain"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/48?text=Logo';
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500/30 to-blue-500/30 
                                                                      flex items-center justify-center shadow-lg">
                                                            <span className="text-sm font-medium text-white">{config.FIRM.substring(0, 2)}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col">
                                                    <div className="flex items-center">
                                                        {isNaN(parseFloat(config.PRICE)) ? 
                                                            <span className="text-emerald-400 font-medium mr-2">{config.FIRM}</span> : 
                                                            <span className="text-emerald-400 font-medium mr-2">
                                                                ${parseFloat(config.PRICE).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                                                            </span>
                                                        }
                                                        <span className="text-white">- {config['ACCOUNT SIZE']}</span>
                                                    </div>
                                                    <div className="flex flex-wrap items-center text-xs text-indigo-300 mt-1">
                                                        <span className="bg-indigo-500/20 px-2 py-0.5 rounded-md mr-2">{config.STEPS}</span>
                                                        <span>Profit Split: {config['PROFIT SPLIT']}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="p-2 rounded-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors duration-200">
                                                <FaPlus className="text-indigo-400" size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    
                                    {selectedFirmConfigurations.configurations.filter(config => !selectedFirms.some(f => 
                                        f.FIRM === config.FIRM && 
                                        f['ACCOUNT SIZE'] === config['ACCOUNT SIZE'] && 
                                        f.PRICE === config.PRICE
                                    )).length === 0 && (
                                        <div className="text-center py-4 text-indigo-300">
                                            Todas las configuraciones de esta firma ya han sido seleccionadas.
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {selectedFirms.length === 0 ? (
                        <div className="bg-gradient-to-br from-[#1a2035] to-[#131722] rounded-2xl p-12 text-center mb-8 
                                       border border-indigo-500/20 shadow-lg">
                            <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 w-20 h-20 
                                          rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaExchangeAlt className="text-indigo-300" size={32} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Selecciona firmas para comparar</h3>
                            <p className="text-indigo-200/70 max-w-md mx-auto leading-relaxed">
                                Añade hasta 5 prop firms para ver sus características lado a lado y encontrar
                                la mejor opción para tu estilo de trading.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Tabla de comparación por categorías */}
                            {dynamicCategories.map((category) => (
                                <div key={category.title} className="mb-8">
                                    <div 
                                        className="flex justify-between items-center bg-gradient-to-r from-[#1a2035] to-[#131722] 
                                                  p-4 rounded-t-xl cursor-pointer border-t border-l border-r 
                                                  border-indigo-500/20 shadow-md"
                                        onClick={() => toggleCategory(category.title)}
                                    >
                                        <h2 className="text-lg font-semibold flex items-center text-white">
                                            <span className="mr-3 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 
                                                           p-2 rounded-lg text-indigo-300">
                                                {category.icon}
                                            </span>
                                            <span>{category.title}</span>
                                        </h2>
                                        <button className="text-indigo-400 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 
                                                         p-2 rounded-full transition-colors duration-200
                                                         hover:text-white">
                                            {isCategoryCollapsed[category.title] ? 
                                                <FaChevronDown size={16} /> : 
                                                <FaChevronUp size={16} />}
                                        </button>
                                    </div>
                                    
                                    {!isCategoryCollapsed[category.title] && (
                                        <div className="overflow-x-auto bg-gradient-to-br from-[#111827] to-[#131722] 
                                                        rounded-b-xl border-b border-l border-r border-indigo-500/20 
                                                        shadow-lg">
                                            <table className="w-full border-collapse">
                                                <tbody>
                                                    {category.fields.map((field, fieldIndex) => (
                                                        <tr 
                                                            key={field.field} 
                                                            className={`
                                                                border-b border-indigo-500/10 
                                                                ${fieldIndex === category.fields.length - 1 ? 'border-b-0' : ''}
                                                                ${fieldIndex % 2 === 0 ? 'bg-[#111827]/40' : 'bg-[#131722]/40'}
                                                            `}
                                                        >
                                                            <td className="px-6 py-4 text-indigo-300 min-w-[180px]">
                                                                {field.label}
                                                            </td>
                                                            {selectedFirms.map((firm, index) => (
                                                                <td 
                                                                    key={`${firm.FIRM}-${firm['ACCOUNT SIZE']}-${firm.PRICE}-${field.field}-${index}`}
                                                                    className="px-4 py-4 text-center border-l border-indigo-500/10
                                                                              bg-gradient-to-r from-transparent via-indigo-500/3 to-transparent"
                                                                >
                                                                    {formatValue(firm[field.field], field.type, firm)}
                                                                </td>
                                                            ))}
                                                            {placeholderCells.slice(selectedFirms.length < 5 ? 1 : 0).map((_, i) => (
                                                                <td 
                                                                    key={`placeholder-${field.field}-${i}-${Math.random().toString(36).substring(2, 9)}`}
                                                                    className="px-4 py-4 text-center border-l border-indigo-500/10"
                                                                >
                                                                    <span className="text-[#4d515d]">-</span>
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default FirmComparison; 