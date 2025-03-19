import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
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
import { logPageView, logError } from './types/analytics';
import { useAnalytics } from './hooks/useAnalytics';
import ErrorBoundary from './components/ErrorBoundary';


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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const tableRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useAnalytics();

  // Mejorar el manejo de errores en la carga de datos
  useEffect(() => {
    try {
      Papa.parse('/pro_firm_details_v2-profirm_gps_v1_separado.csv', {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          if (Array.isArray(result.data) && result.data.length > 0) {
            setAllFirms(result.data as Firm[]);
            setDisplayedFirms(result.data as Firm[]);
          }
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
          logError(new Error('Error parsing CSV file'), 'CSV Parser');
        },
      });
    } catch (error) {
      console.error('Error in CSV loading effect:', error);
      logError(error instanceof Error ? error : new Error('Unknown error in CSV loading'), 'CSV Loading');
    }
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  // Memoizar la función de filtrado
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  // Mejorar el manejo de errores en el efecto de filtrado
  useEffect(() => {
    try {
      const filteredFirms = allFirms.filter(firm => {
        try {
          // Verificar si coincide con el término de búsqueda
          const matchesSearch = searchTerm === '' || 
            firm['FIRM']?.toString().toLowerCase().includes(searchTerm.toLowerCase());

          // Verificar si coincide con los filtros seleccionados
          const matchesFilters = Object.entries(filters).every(([category, selectedValues]) => {
            if (!selectedValues || selectedValues.length === 0) return true;

            const firmValue = firm[category] || '';
            
            switch (category) {
              case 'accountSizes':
                return selectedValues.includes(String(firm['ACCOUNT SIZE'] || ''));
              case 'steps':
                return selectedValues.includes(String(firm['STEPS'] || ''));
              case 'platforms': {
                const platforms = String(firm['PLATFORMS'] || '').split(',').map(p => p.trim());
                return selectedValues.some((value: string) => platforms.includes(value));
              }
              case 'instruments': {
                const instruments = String(firm['INSTRUMENTS'] || '').split(',').map(i => i.trim());
                return selectedValues.some((value: string) => instruments.includes(value));
              }
              case 'brokers':
                return selectedValues.includes(String(firm['Broker'] || ''));
              case 'maxDrawdown': {
                const drawdown = parseFloat(String(firm['MAX. TOTAL DRAWDOWN'] || '0'));
                return !isNaN(drawdown) && selectedValues.some((value: string) => drawdown <= parseFloat(value));
              }
              default:
                return true;
            }
          });

          return matchesSearch && matchesFilters;
        } catch (error) {
          console.error('Error filtering firm:', firm, error);
          return false;
        }
      });

      setDisplayedFirms(filteredFirms);
    } catch (error) {
      console.error('Error in filtering firms:', error);
      logError(error instanceof Error ? error : new Error('Error filtering firms'), 'Firm Filtering');
    }
  }, [searchTerm, allFirms, filters]);

  const handleFilterChange = useCallback((newFilters: Filters) => {
    try {
      setFilters(newFilters);
      if (searchTerm.trim() === '') {
        setDisplayedFirms(prevFirms => prevFirms);
      } else {
        handleSearch(searchTerm);
      }
    } catch (error) {
      console.error('Error in filter change:', error);
      logError(error instanceof Error ? error : new Error('Error changing filters'), 'Filter Change');
    }
  }, [searchTerm, handleSearch]);

  return (
    <ErrorBoundary>
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
                tableRef={tableRef}
              />
            } />
            <Route path="/articulos/*" element={<ArticlesPage />} />
            <Route path="/top-firms" element={<TopFirmStrip />} />
            <Route path="/firma/:slug" element={<FirmDetail />} />
            <Route path="/firm/:slug/details" element={<FirmDetailExtended />} />
            <Route path="/herramientas" element={<TradingTools setSelectedCurrency={setSelectedCurrency} />}>
              <Route index element={<Navigate to="/herramientas/calculadoras" replace />} />
              <Route path="calculadoras" element={<PositionSizeCalculator />} />s
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
    </ErrorBoundary>
  );
};

// Componente Home separado
const Home: React.FC<{
  firms: Firm[];
  displayedFirms: Firm[];
  onFilterChange: (filters: Filters) => void;
  currentFilters: Filters;
  onSearch: (term: string) => void;
  tableRef: React.RefObject<HTMLDivElement>;
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