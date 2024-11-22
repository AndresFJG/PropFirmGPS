import React, { useEffect, useState, useMemo } from 'react';
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
import './index.css'
import FAQ from './components/FAQ';
import ResourceCenter from './components/ResourceCenter';
import Blog from './components/Blog';

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
    tradingDays: []
  });
  const [selectedCurrency, setSelectedCurrency] = useState<string>('EURUSD');

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
          String(firm['Trading Platforms']|| '').toLowerCase().includes(platform.toLowerCase())
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

      // Filtro de días de trading
      const matchesTradingDays = filters.tradingDays.length === 0 || 
        filters.tradingDays.some(days => 
          String(firm['MINIMUN TRADING DAYS']) === days
        );

      return matchesAccountSize && matchesSteps && matchesPlatform && 
             matchesInstruments && matchesBroker && matchesDrawdown && 
             matchesTradingDays;
    });
  }, [allFirms, filters]);

  const handleSearch = (term: string) => {
    const filteredFirms = allFirms.filter(firm => 
      firm['FIRM'] && String(firm['FIRM']).toLowerCase().includes(term.toLowerCase())
    );
    setDisplayedFirms(filteredFirms);
  };

   // Agregar console.log para debugging
  useEffect(() => {
    console.log('Filtros actuales:', filters);
    console.log('Firms filtradas:', displayedFirmsFiltered);
  }, [filters, displayedFirmsFiltered]); 

  const handleFilterChange = (newFilters: Filters) => {
    console.log('Aplicando nuevos filtros:', newFilters); // Debug
    setFilters(newFilters);
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
}> = ({ firms, displayedFirms, onFilterChange, currentFilters, onSearch }) => (
  <>
    <HeroSection />
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
        <div className="lg:w-3/4 overflow-x-auto">
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