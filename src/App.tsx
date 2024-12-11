import React, { useEffect, useState, useMemo, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FilterPanel from './components/FilterPanel';
import FirmTable from './components/FirmTable';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import InfoCards from './components/InfoCards';
import Reviews from './components/Reviews';
import ArticlesPage from './components/ArticlesPage';
import TopFirmStrip from './components/TopFirmStrip';
import FirmDetail from './components/FirmDetail';
import FirmDetailExtended from './components/FirmDetailExtended';
import TradingTools from './components/TradingTools';
import PositionSizeCalculator from './components/tools/PositionSizeCalculator';
import TradingViewWidget from './components/tools/TradingViewWidget';
import RiskManagement from './components/tools/RiskManagement';
import ProfitCalculator from './components/tools/ProfitCalculator';
import TermsAndPrivacy from './components/TermsAndPrivacy';
import PrivacyPolicy from './components/PrivacyPolicy';
import Papa from 'papaparse';
import { Firm, Filters } from './backend/types';
import './index.css';
import FAQ from './components/FAQ';
import ResourceCenter from './components/ResourceCenter';
import Blog from './components/Blog';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [allFirms, setAllFirms] = useState<Firm[]>([]);
  const [displayedFirms, setDisplayedFirms] = useState<Firm[]>([]);
  const [filters, setFilters] = useState<Filters>({
    accountSizes: [],
    steps: [],
    platforms: [],
    instruments: [],
    brokers: [],
    maxDrawdown: [],
  });
  const [selectedCurrency, setSelectedCurrency] = useState<string>('EURUSD');
  const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para el término de búsqueda
  const tableRef = useRef<HTMLDivElement | null>(null); // Crear referencia para la tabla

  // Cargar datos iniciales
  useEffect(() => {
    Papa.parse('/pro_firm_details_v2-profirm_gps_v1_separado.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        if (Array.isArray(result.data) && result.data.length > 0) {
          console.log('Datos CSV cargados:', result.data); // Debug
          setAllFirms(result.data as Firm[]);
          setDisplayedFirms(result.data as Firm[]); // Inicializa displayedFirms
        }
      },
      error: (error) => {
        console.error('Error al leer el CSV:', error);
      },
    });
  }, []);

  // Función mejorada de filtrado
  const displayedFirmsFiltered = useMemo(() => {
    return allFirms.filter(firm => {
      // Filtro de tamaño de cuenta
      const matchesAccountSize = filters.accountSizes.length === 0 || 
        filters.accountSizes.some(size => {
          const firmSize = String(firm['ACCOUNT SIZE'] || '').trim();
          // Extraer solo el número y K del tamaño de la cuenta
          const firmSizeBase = firmSize.split(' ')[0];
          return firmSizeBase === size;
        });

      // Filtro de pasos
      const matchesSteps = filters.steps.length === 0 || 
        filters.steps.some(step => {
          const firmSteps = String(firm.STEPS || '').trim();
          return firmSteps === step;
        });

      // Filtro de plataformas
      const matchesPlatform = filters.platforms.length === 0 || 
        filters.platforms.some(platform => 
          String(firm['Trading Platforms'] || '').toLowerCase().includes(platform.toLowerCase())
        );

      // Filtro de instrumentos
      const matchesInstruments = filters.instruments.length === 0 || 
        filters.instruments.some(instrument => 
          String(firm.INSTRUMENTS || '').toLowerCase().includes(instrument.toLowerCase())
        );

      // Filtro de brokers
      const matchesBroker = filters.brokers.length === 0 || 
        filters.brokers.some(broker => 
          String(firm['Broker'] || '').trim() === broker.trim()
        );

      // Filtro de drawdown
      const matchesDrawdown = filters.maxDrawdown.length === 0 || 
        filters.maxDrawdown.some(drawdown => {
          const firmDrawdown = String(firm['MAX. TOTAL DRAWDOWN'] || '').replace('%', '');
          return firmDrawdown === drawdown.replace('%', '');
        });

      return matchesAccountSize && matchesSteps && matchesPlatform && 
             matchesInstruments && matchesBroker && matchesDrawdown;
    });
  }, [allFirms, filters]);

  const handleSearch = (term: string) => {
    setSearchTerm(term); // Actualiza el término de búsqueda

    if (term.trim() === '') {
      // Si el término de búsqueda está vacío, restablecer a todas las firmas
      setDisplayedFirms(displayedFirmsFiltered);
      return;
    }

    const filteredFirms = displayedFirmsFiltered.filter(firm => {
      const firmName = firm['FIRM'] || '';
      return firmName.toString().toLowerCase().includes(term.toLowerCase());
    });

    // Ordenar las firmas filtradas por la primera letra del término de búsqueda
    const sortedFirms = filteredFirms.sort((a, b) => {
      const aName = a['FIRM'] || '';
      const bName = b['FIRM'] || '';
      const firstLetter = term.charAt(0).toLowerCase();

      // Comparar si la primera letra coincide
      const aStartsWith = aName.toString().toLowerCase().startsWith(firstLetter);
      const bStartsWith = bName.toString().toLowerCase().startsWith(firstLetter);

      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      return aName.toString().localeCompare(bName.toString()); // Ordenar alfabéticamente si ambos coinciden
    });

    setDisplayedFirms(sortedFirms);
  };

  // Agregar console.log para debugging
  useEffect(() => {
    console.log('Filtros actuales:', filters);
    console.log('Firms filtradas:', displayedFirmsFiltered);
  }, [filters, displayedFirmsFiltered]); 

  const handleFilterChange = (newFilters: Filters) => {
    console.log('Aplicando nuevos filtros:', newFilters); // Debug
    setFilters(newFilters);
    // Actualizar displayedFirms solo si el buscador está vacío
    if (searchTerm.trim() === '') {
      setDisplayedFirms(displayedFirmsFiltered);
    } else {
      // Si hay un término de búsqueda, filtrar según el término de búsqueda
      handleSearch(searchTerm);
    }
  };

  useEffect(() => {
    const newDisplayedFirms = displayedFirmsFiltered;
    if (JSON.stringify(newDisplayedFirms) !== JSON.stringify(displayedFirms)) {
      setDisplayedFirms(newDisplayedFirms);
    }
  }, [filters]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#131722] text-[#d1d4dc] font-inter">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <Home 
                firms={allFirms}
                displayedFirms={displayedFirms}
                onFilterChange={handleFilterChange}
                currentFilters={filters}
                onSearch={handleSearch}
                tableRef={tableRef} // Pasar la referencia a la tabla
              />
            } />
            <Route path="/articulos/*" element={<ArticlesPage />} />
            <Route path="/top-firms" element={<TopFirmStrip />} />
            <Route path="/firma/:slug" element={<FirmDetail />} />
            <Route path="/firm/:slug/details" element={<FirmDetailExtended />} />
            <Route path="/herramientas" element={<TradingTools setSelectedCurrency={setSelectedCurrency} />}>
              <Route index element={<Navigate to="/herramientas/calculadoras" replace />} />
              <Route path="calculadoras" element={<PositionSizeCalculator />} />
              <Route path="analisis" element={<TradingViewWidget currency1={selectedCurrency} currency2="USD" />} />
              <Route path="riesgo" element={<RiskManagement />} />
              <Route path="beneficios" element={<ProfitCalculator />} />
            </Route>
            <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/centro-recursos" element={<ResourceCenter />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

// Componente Home separado
const Home: React.FC<{
  firms: Firm[];
  displayedFirms: Firm[];
  onFilterChange: (filters: Filters) => void;
  currentFilters: Filters;
  onSearch: (term: string) => void;
  tableRef: React.RefObject<HTMLDivElement>; // Añadir la referencia aquí
}> = ({ firms, displayedFirms, onFilterChange, currentFilters, onSearch, tableRef }) => (
  <>
    <HeroSection tableRef={tableRef} /> {/* Pasar la referencia al HeroSection */}
    <div className="w-full px-2 sm:px-4 py-8">
      <div className="mb-8">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/4">
          <FilterPanel 
            onFilterChange={onFilterChange}
            firms={firms}
            currentFilters={currentFilters}
          />
        </div>
        <div className="lg:w-3/4 overflow-x-auto" ref={tableRef}> {/* Asignar la referencia a la tabla */}
          <FirmTable firms={displayedFirms} />
        </div>
      </div>
      <div className="mt-12">
        <InfoCards />
      </div>
      <div className="mt-10">
        <Reviews />
      </div>
    </div>
  </>
);

export default App;