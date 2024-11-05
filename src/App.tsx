import React, { useEffect, useState } from 'react';
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
import { Firm } from './backend/types';
import './index.css'

const App: React.FC = () => {
  const [firms, setFirms] = useState<Firm[]>([]);
  const [filteredFirms, setFilteredFirms] = useState<Firm[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    accountSize: '',
    steps: '',
    applyDiscount: false,
  });

  useEffect(() => {
    Papa.parse('/pro_firm_details_v2-profirm_gps_v1.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        if (Array.isArray(result.data) && result.data.length > 0 && typeof result.data[0] === 'object') {
          setFirms(result.data as Firm[]);
          setFilteredFirms(result.data as Firm[]);
        } else {
          console.error('Error: La estructura de datos no es válida.');
        }
      },
      error: (error) => {
        console.error('Error al leer el CSV:', error);
      },
    });
  }, []);

  useEffect(() => {
    const filtered = firms.filter((firm) => {
      const accountSize = typeof firm['ACCOUNT SIZE'] === 'string' ? firm['ACCOUNT SIZE'].toLowerCase() : '';
      const profitTarget = typeof firm['PROFIT TARGET'] === 'string' ? firm['PROFIT TARGET'].toLowerCase() : '';

      const matchesAccount = filters.accountSize ? accountSize.includes(filters.accountSize.toLowerCase()) : true;
      const matchesSteps = filters.steps ? profitTarget.includes(filters.steps.toLowerCase()) : true;
      const matchesSearchTerm = searchTerm ? firm['FIRM']?.toString().toLowerCase().includes(searchTerm.toLowerCase()) : true;

      return matchesAccount && matchesSteps && matchesSearchTerm;
    });

    setFilteredFirms(filtered);
  }, [filters, searchTerm, firms]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (newFilters: {
    accountSize: string;
    steps: string;
    applyDiscount: boolean;
  }) => {
    setFilters(newFilters);
  };

  // Componente Home separado para mejor organización
  const Home = () => (
    <>
      <HeroSection />
      <div className="w-full px-2 sm:px-4 py-8">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/4">
            <FilterPanel onFilterChange={handleFilterChange} />
          </div>
          <div className="lg:w-3/4 overflow-x-auto">
            <FirmTable firms={filteredFirms} />
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

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#392a63] text-[#04a8c2] bg-purple-gradient">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articulos/*" element={<ArticlesPage />} />
            {/* En tu Router */}
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

export default App;