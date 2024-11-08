import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FilterPanel from './components/FilterPanel';
import FirmTable from './components/FirmTable';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import InfoCards from './components/InfoCards';
import Reviews from './components/Reviews';
import ArticlesPage from './components/ArticlesPage';
import ComparisonCards from './components/ComparisonCards';
import ComparisonDetail from './components/ComparisonDetail';
import TopFirmStrip from './components/TopFirmStrip';
import FirmDetail from './components/FirmDetail';
import FirmDetailExtended from './components/FirmDetailExtended';
import Papa from 'papaparse';
import { Firm, Filters } from './backend/types';
import './index.css'

const App: React.FC = () => {
  const [allFirms, setAllFirms] = useState<Firm[]>([]);
  const [filters, setFilters] = useState<Filters>({
    accountSizes: [],
    steps: [],
    platforms: [],
    instruments: [],
    brokers: [],
    maxDrawdown: [],
    tradingDays: []
  });

  // Cargar datos iniciales
  useEffect(() => {
    Papa.parse('/pro_firm_details_v2-profirm_gps_v1.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        if (Array.isArray(result.data) && result.data.length > 0) {
          console.log('Datos CSV cargados:', result.data); // Debug
          setAllFirms(result.data as Firm[]);
        }
      },
      error: (error) => {
        console.error('Error al leer el CSV:', error);
      },
    });
  }, []);

  // Función mejorada de filtrado
  const displayedFirms = useMemo(() => {
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

  // Agregar console.log para debugging
  useEffect(() => {
    console.log('Filtros actuales:', filters);
    console.log('Firms filtradas:', displayedFirms);
  }, [filters, displayedFirms]);

  const handleFilterChange = (newFilters: Filters) => {
    console.log('Aplicando nuevos filtros:', newFilters); // Debug
    setFilters(newFilters);
  };

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
              />
            } />
            <Route path="/articulos/*" element={<ArticlesPage />} />
            <Route path="/comparaciones" element={<ComparisonCards />} />
            <Route path="/comparacion/:slug" element={<ComparisonDetail />} />
            <Route path="/top-firms" element={<TopFirmStrip />} />
            <Route path="/firma/:slug" element={<FirmDetail />} />
            <Route path="/firm/:slug/details" element={<FirmDetailExtended />} />
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
}> = ({ firms, displayedFirms, onFilterChange, currentFilters }) => (
  <>
    <HeroSection />
    <div className="w-full px-2 sm:px-4 py-8">
      <div className="mb-8">
        <SearchBar onSearch={() => {}} />
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