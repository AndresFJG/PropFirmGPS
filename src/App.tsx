// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import HeroSection from './components/HeroSection';
// // import FilterPanel from './components/FilterPanel';
// // import FirmTable from './components/FirmTable';
// // import Footer from './components/Footer';
// // import SearchBar from './components/SearchBar';
// // import InfoCards from './components/InfoCards';

// // // export interface Firm {
// // //   id: number;
// // //   logo: string;
// // //   name: string;
// // //   price: string;
// // //   accountSize: string;
// // //   profitTarget: string;
// // //   profitTargetPhase2?: string;
// // //   maxDailyLoss: string;
// // //   maxTotalLoss: string;
// // //   refundType: string;
// // //   refundAmount: string;
// // //   profitRatio: string;
// // //   payoutFrequency: string;
// // //   rating: number;
// // //   country: string;
// // //   registrationDate: string;
// // //   traderTrust: number;
// // //   minTradingDays: string;
// // //   maxTradingDays: string;
// // //   twoCategories: boolean;
// // //   leverage: string;
// // //   discountRate: string;
// // //   scale: string;
// // //   crypto: boolean;
// // //   newsCommission: string;
// // // }

// // export interface Firm {
// //   id: number;
// //   logo: string;
// //   name: string;
// //   price: string;
// //   accountSize: string;
// //   profitTarget: string;
// //   profitTargetPhase2?: string;
// //   maxDailyLoss: string;
// //   maxTotalLoss: string;
// //   refundType: string;
// //   refundAmount: string;
// //   profitRatio: string;
// //   payoutFrequency: string;
// //   rating: number;
// //   country: string;
// //   registrationDate: string;
// //   traderTrust: number;
// //   minTradingDays: string;
// //   maxTradingDays: string;
// //   twoCategories: boolean;
// //   leverage: string;
// //   discountRate: string;
// //   scale: string;
// //   crypto: boolean;
// //   newsCommission: string;
// //   [key: string]: string | number | boolean | undefined; // Agregar firma de índice
// // }

// // // Datos de ejemplo para las firmas
// // const dummyFirms: Firm[] = [
// //   {
// //     id: 1,
// //     logo: '/logos/goat-funded-trader.png',
// //     name: 'Goat Funded Trader',
// //     price: '$158.40',
// //     accountSize: '5K Instantánea',
// //     profitTarget: 'Del 65% al 95%',
// //     maxDailyLoss: '4%',
// //     maxTotalLoss: '8%',
// //     refundType: 'Saldo/Patrimonio neto Máximo a EOD',
// //     refundAmount: '5 $/lote redondo',
// //     profitRatio: '1',
// //     payoutFrequency: 'Triple pago: 5, 15 y 25 de cada mes',
// //     rating: 4.1,
// //     country: 'España',
// //     registrationDate: 'Mayo de 2023',
// //     traderTrust: 280,
// //     minTradingDays: '10 días',
// //     maxTradingDays: 'Ilimitado',
// //     twoCategories: true,
// //     leverage: 'Hasta 50:1',
// //     discountRate: '0%',
// //     scale: '3',
// //     crypto: false,
// //     newsCommission: 'Permitido: Comisión según las posiciones de cada trader'
// //   },
// //   {
// //     id: 2,
// //     logo: '/logos/fxify.png',
// //     name: 'FXIFY',
// //     price: '$92.00',
// //     accountSize: '15K 1 paso',
// //     profitTarget: '75%',
// //     maxDailyLoss: '5%',
// //     maxTotalLoss: '6%',
// //     refundType: 'Basado en el equilibrio',
// //     refundAmount: '$0',
// //     profitRatio: '1.06',
// //     payoutFrequency: 'Primer pago a la carta, 30 días después',
// //     rating: 4.3,
// //     country: 'Reino Unido',
// //     registrationDate: 'Abril de 2023',
// //     traderTrust: 215,
// //     minTradingDays: '5 días',
// //     maxTradingDays: '30 días',
// //     twoCategories: false,
// //     leverage: 'Hasta 100:1',
// //     discountRate: '10%',
// //     scale: '4',
// //     crypto: true,
// //     newsCommission: 'No permitido durante noticias importantes'
// //   },
// // ];

// // const App: React.FC = () => {
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const handleSearch = (term: string) => {
// //     setSearchTerm(term);
// //   };

// //   const filteredFirms = dummyFirms.filter((firm: Firm) =>
// //     firm.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <Router>
// //       <div className="flex flex-col min-h-screen bg-gray-900 text-white">
// //         <Navbar />
// //         <main className="flex-grow">
// //           <Routes>
// //             <Route path="/" element={
// //               <>
// //                 <HeroSection />
// //                 <div className="w-full px-2 sm:px-4 py-8">
// //                   <div className="mb-8">
// //                     <SearchBar onSearch={handleSearch} />
// //                   </div>
// //                   <div className="flex flex-col lg:flex-row gap-4">
// //                     <div className="lg:w-1/4">
// //                       <FilterPanel />
// //                     </div>
// //                     <div className="lg:w-3/4 overflow-x-auto">
// //                       <FirmTable firms={filteredFirms} />
// //                     </div>
// //                   </div>
// //                   <div className="mt-12">
// //                     <InfoCards />
// //                   </div>
// //                 </div>
// //               </>
// //             } />
// //           </Routes>
// //         </main>
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import HeroSection from './components/HeroSection';
// // import FilterPanel from './components/FilterPanel';
// // import FirmTable from './components/FirmTable';
// // import Footer from './components/Footer';
// // import SearchBar from './components/SearchBar';
// // import InfoCards from './components/InfoCards';
// // import { Firm } from './backend/types'; // Importar el tipo Firm desde types.ts

// // // Datos de ejemplo para las firmas
// // const dummyFirms: Firm[] = [
// //   {
// //     id: 1,
// //     logo: '/logos/goat-funded-trader.png',
// //     name: 'Goat Funded Trader',
// //     price: '$158.40',
// //     accountSize: '5K Instantánea',
// //     profitTarget: 'Del 65% al 95%',
// //     maxDailyLoss: '4%',
// //     maxTotalLoss: '8%',
// //     refundType: 'Saldo/Patrimonio neto Máximo a EOD',
// //     refundAmount: '5 $/lote redondo',
// //     profitRatio: '1',
// //     payoutFrequency: 'Triple pago: 5, 15 y 25 de cada mes',
// //     rating: 4.1,
// //     country: 'España',
// //     registrationDate: 'Mayo de 2023',
// //     traderTrust: 280,
// //     minTradingDays: '10 días',
// //     maxTradingDays: 'Ilimitado',
// //     twoCategories: true,
// //     leverage: 'Hasta 50:1',
// //     discountRate: '0%',
// //     scale: '3',
// //     crypto: false,
// //     newsCommission: 'Permitido: Comisión según las posiciones de cada trader'
// //   },
// //   {
// //     id: 2,
// //     logo: '/logos/fxify.png',
// //     name: 'FXIFY',
// //     price: '$92.00',
// //     accountSize: '15K 1 paso',
// //     profitTarget: '75%',
// //     maxDailyLoss: '5%',
// //     maxTotalLoss: '6%',
// //     refundType: 'Basado en el equilibrio',
// //     refundAmount: '$0',
// //     profitRatio: '1.06',
// //     payoutFrequency: 'Primer pago a la carta, 30 días después',
// //     rating: 4.3,
// //     country: 'Reino Unido',
// //     registrationDate: 'Abril de 2023',
// //     traderTrust: 215,
// //     minTradingDays: '5 días',
// //     maxTradingDays: '30 días',
// //     twoCategories: false,
// //     leverage: 'Hasta 100:1',
// //     discountRate: '10%',
// //     scale: '4',
// //     crypto: true,
// //     newsCommission: 'No permitido durante noticias importantes'
// //   },
// // ];

// // const App: React.FC = () => {
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const handleSearch = (term: string) => {
// //     setSearchTerm(term);
// //   };

// //   const filteredFirms = dummyFirms.filter((firm: Firm) =>
// //     firm.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <Router>
// //       <div className="flex flex-col min-h-screen bg-gray-900 text-white">
// //         <Navbar />
// //         <main className="flex-grow">
// //           <Routes>
// //             <Route path="/" element={
// //               <>
// //                 <HeroSection />
// //                 <div className="w-full px-2 sm:px-4 py-8">
// //                   <div className="mb-8">
// //                     <SearchBar onSearch={handleSearch} />
// //                   </div>
// //                   <div className="flex flex-col lg:flex-row gap-4">
// //                     <div className="lg:w-1/4">
// //                       <FilterPanel />
// //                     </div>
// //                     <div className="lg:w-3/4 overflow-x-auto">
// //                       <FirmTable firms={filteredFirms} />
// //                     </div>
// //                   </div>
// //                   <div className="mt-12">
// //                     <InfoCards />
// //                   </div>
// //                 </div>
// //               </>
// //             } />
// //           </Routes>
// //         </main>
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import FilterPanel from './components/FilterPanel';
// import FirmTable from './components/FirmTable';
// import Footer from './components/Footer';
// import SearchBar from './components/SearchBar';
// import InfoCards from './components/InfoCards';
// import Papa from 'papaparse'; // Importar PapaParse para leer el CSV
// import { Firm } from './backend/types'; // Importar el tipo Firm


// const App: React.FC = () => {
//   const [firms, setFirms] = useState<Firm[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   // useEffect(() => {
//   //   Papa.parse('/pro_firm_details_v2-profirm_gps_v1.csv', {
//   //     download: true,
//   //     header: true,
//   //     complete: (result) => {
//   //       console.log('Datos del CSV:', result.data); // Verificar todos los datos
//   //       console.log('Primer elemento:', result.data[0]); // Verificar la estructura del primer elemento
//   //       setFirms(result.data as Firm[]);
//   //     },
//   //     error: (error) => {
//   //       console.error('Error al leer el CSV:', error);
//   //     },
//   //   });
//   // }, []);
  

// // Ajuste del useEffect para manejar mejor el CSV
// useEffect(() => {
//   Papa.parse('/pro_firm_details_v2-profirm_gps_v1.csv', {
//     download: true,
//     header: true, // Lee las cabeceras de forma automática
//     skipEmptyLines: true, // Omite líneas vacías
//     dynamicTyping: true, // Convierte números en lugar de dejarlos como strings
//     complete: (result) => {
//       console.log('Datos del CSV:', result.data);
//       if (result.data.length > 0 && typeof result.data[0] === 'object') {
//         setFirms(result.data as Firm[]);
//       } else {
//         console.error('Error: La estructura de datos no es válida.');
//       }
//     },
//     error: (error) => {
//       console.error('Error al leer el CSV:', error);
//     },
//   });
// }, []);

//   const filteredFirms = firms.filter((firm: Firm) =>
//     firm.name ? firm.name.toLowerCase().includes(searchTerm.toLowerCase()) : false
//   );
  
//   console.log('Firms filtradas:', filteredFirms); // Verificar las firmas filtradas

//   const handleSearch = (term: string) => {
//     setSearchTerm(term);
//   };


//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen bg-gray-900 text-white">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <HeroSection />
//                 <div className="w-full px-2 sm:px-4 py-8">
//                   <div className="mb-8">
//                     <SearchBar onSearch={handleSearch} />
//                   </div>
//                   <div className="flex flex-col lg:flex-row gap-4">
//                     <div className="lg:w-1/4">
//                       <FilterPanel />
//                     </div>
//                     <div className="lg:w-3/4 overflow-x-auto">
//                       <FirmTable firms={filteredFirms} />
//                     </div>
//                   </div>
//                   <div className="mt-12">
//                     <InfoCards />
//                   </div>
//                 </div>
//               </>
//             } />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import FilterPanel from './components/FilterPanel';
// import FirmTable from './components/FirmTable';
// import Footer from './components/Footer';
// import SearchBar from './components/SearchBar';
// import InfoCards from './components/InfoCards';
// import Papa from 'papaparse';
// import { Firm } from './backend/types';

// const App: React.FC = () => {
//   const [firms, setFirms] = useState<Firm[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Cargar y parsear el archivo CSV
//     Papa.parse('/pro_firm_details_v2-profirm_gps_v1.csv', {
//       download: true,
//       header: true,
//       skipEmptyLines: true,
//       complete: (result) => {
//         console.log('Datos del CSV:', result.data); // Verificar los datos del CSV
//         // Validar que los datos sean un array y que contengan objetos
//         if (Array.isArray(result.data) && result.data.length > 0 && typeof result.data[0] === 'object') {
//           setFirms(result.data as Firm[]);
//         } else {
//           console.error('Error: La estructura de datos no es válida.');
//         }
//       },
//       error: (error) => {
//         console.error('Error al leer el CSV:', error);
//       },
//     });
//   }, []);

//   const handleSearch = (term: string) => {
//     setSearchTerm(term);
//   };

//   // Filtrar las firmas con el término de búsqueda
//   const filteredFirms = firms.filter((firm: any) => {
//     return firm['FIRM'] ? firm['FIRM'].toLowerCase().includes(searchTerm.toLowerCase()) : false;
//   });

//   console.log('Firms filtradas:', filteredFirms); // Verificar las firmas filtradas

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen bg-gray-900 text-white">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <HeroSection />
//                 <div className="w-full px-2 sm:px-4 py-8">
//                   <div className="mb-8">
//                     <SearchBar onSearch={handleSearch} />
//                   </div>
//                   <div className="flex flex-col lg:flex-row gap-4">
//                     <div className="lg:w-1/4">
//                       <FilterPanel />
//                     </div>
//                     <div className="lg:w-3/4 overflow-x-auto">
//                       <FirmTable firms={filteredFirms} />
//                     </div>
//                   </div>
//                   <div className="mt-12">
//                     <InfoCards />
//                   </div>
//                 </div>
//               </>
//             } />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import FilterPanel from './components/FilterPanel';
// import FirmTable from './components/FirmTable';
// import Footer from './components/Footer';
// import SearchBar from './components/SearchBar';
// import InfoCards from './components/InfoCards';
// import Reviews from './components/Reviews';
// import Papa from 'papaparse';
// import { Firm } from './backend/types';

// const App: React.FC = () => {
//   const [firms, setFirms] = useState<Firm[]>([]);
//   const [filteredFirms, setFilteredFirms] = useState<Firm[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({
//     assetType: '',
//     accountSize: '',
//     steps: '',
//     applyDiscount: false,
//   });

//   useEffect(() => {
//     Papa.parse('/pro_firm_details_v2-profirm_gps_v1.csv', {
//       download: true,
//       header: true,
//       skipEmptyLines: true,
//       complete: (result) => {
//         console.log('Datos del CSV:', result.data);
//         if (Array.isArray(result.data) && result.data.length > 0 && typeof result.data[0] === 'object') {
//           setFirms(result.data as Firm[]);
//           setFilteredFirms(result.data as Firm[]);
//         } else {
//           console.error('Error: La estructura de datos no es válida.');
//         }
//       },
//       error: (error) => {
//         console.error('Error al leer el CSV:', error);
//       },
//     });
//   }, []);

//   // Aplicar filtros a las firmas
//   useEffect(() => {
//     const filtered = firms.filter((firm) => {
//       const firmName = typeof firm['FIRM'] === 'string' ? firm['FIRM'].toLowerCase() : '';
//       const accountSize = typeof firm['ACCOUNT SIZE'] === 'string' ? firm['ACCOUNT SIZE'].toLowerCase() : '';
//       const profitTarget = typeof firm['PROFIT TARGET'] === 'string' ? firm['PROFIT TARGET'].toLowerCase() : '';

//       const matchesAsset = filters.assetType ? firmName.includes(filters.assetType.toLowerCase()) : true;
//       const matchesAccount = filters.accountSize ? accountSize.includes(filters.accountSize.toLowerCase()) : true;
//       const matchesSteps = filters.steps ? profitTarget.includes(filters.steps.toLowerCase()) : true;
//       const matchesSearchTerm = searchTerm ? firmName.includes(searchTerm.toLowerCase()) : true;

//       return matchesAsset && matchesAccount && matchesSteps && matchesSearchTerm;
//     });

//     setFilteredFirms(filtered);
//   }, [filters, searchTerm, firms]);

//   const handleSearch = (term: string) => {
//     setSearchTerm(term);
//   };

//   const handleFilterChange = (newFilters: {
//     assetType: string;
//     accountSize: string;
//     steps: string;
//     applyDiscount: boolean;
//   }) => {
//     setFilters(newFilters);
//   };

//   console.log('Firms filtradas:', filteredFirms);

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen bg-gray-900 text-white">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <HeroSection />
//                 <div className="w-full px-2 sm:px-4 py-8">
//                   <div className="mb-8">
//                     <SearchBar onSearch={handleSearch} />
//                   </div>
//                   <div className="flex flex-col lg:flex-row gap-4">
//                     <div className="lg:w-1/4">
//                       <FilterPanel onFilterChange={handleFilterChange} />
//                     </div>
//                     <div className="lg:w-3/4 overflow-x-auto">
//                       <FirmTable firms={filteredFirms} />
//                     </div>
//                   </div>
//                   <div className="mt-12">
//                     <InfoCards />
//                   </div>
//                   <div className='mt-10'>
//                     <Reviews/>
//                   </div>
//                 </div>
//               </>
//             } />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import FilterPanel from './components/FilterPanel';
// import FirmTable from './components/FirmTable';
// import Footer from './components/Footer';
// import SearchBar from './components/SearchBar';
// import InfoCards from './components/InfoCards';
// import Reviews from './components/Reviews';
// import Papa from 'papaparse';
// import { Firm } from './backend/types';

// const App: React.FC = () => {
//   const [firms, setFirms] = useState<Firm[]>([]);
//   const [filteredFirms, setFilteredFirms] = useState<Firm[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({
//     accountSize: '',
//     steps: '',
//     applyDiscount: false,
//   });

//   useEffect(() => {
//     Papa.parse('/pro_firm_details_v2-profirm_gps_v1.csv', {
//       download: true,
//       header: true,
//       skipEmptyLines: true,
//       complete: (result) => {
//         if (Array.isArray(result.data) && result.data.length > 0 && typeof result.data[0] === 'object') {
//           setFirms(result.data as Firm[]);
//           setFilteredFirms(result.data as Firm[]);
//         } else {
//           console.error('Error: La estructura de datos no es válida.');
//         }
//       },
//       error: (error) => {
//         console.error('Error al leer el CSV:', error);
//       },
//     });
//   }, []);

//   // Aplicar filtros a las firmas
//   useEffect(() => {
//     const filtered = firms.filter((firm) => {
//       const accountSize = typeof firm['ACCOUNT SIZE'] === 'string' ? firm['ACCOUNT SIZE'].toLowerCase() : '';
//       const profitTarget = typeof firm['PROFIT TARGET'] === 'string' ? firm['PROFIT TARGET'].toLowerCase() : '';

//       const matchesAccount = filters.accountSize ? accountSize.includes(filters.accountSize.toLowerCase()) : true;
//       const matchesSteps = filters.steps ? profitTarget.includes(filters.steps.toLowerCase()) : true;
//       const matchesSearchTerm = searchTerm ? firm['FIRM']?.toString().toLowerCase().includes(searchTerm.toLowerCase()) : true;

//       return matchesAccount && matchesSteps && matchesSearchTerm;
//     });

//     setFilteredFirms(filtered);
//   }, [filters, searchTerm, firms]);

//   const handleSearch = (term: string) => {
//     setSearchTerm(term);
//   };

//   const handleFilterChange = (newFilters: {
//     accountSize: string;
//     steps: string;
//     applyDiscount: boolean;
//   }) => {
//     setFilters(newFilters);
//   };

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen bg-gray-900 text-white">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <HeroSection />
//                 <div className="w-full px-2 sm:px-4 py-8">
//                   <div className="mb-8">
//                     <SearchBar onSearch={handleSearch} />
//                   </div>
//                   <div className="flex flex-col lg:flex-row gap-4">
//                     <div className="lg:w-1/4">
//                       <FilterPanel onFilterChange={handleFilterChange} />
//                     </div>
//                     <div className="lg:w-3/4 overflow-x-auto">
//                       <FirmTable firms={filteredFirms} />
//                     </div>
//                   </div>
//                   <div className="mt-12">
//                     <InfoCards />
//                   </div>
//                   <div className="mt-10">
//                     <Reviews />
//                   </div>
//                 </div>
//               </>
//             } />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

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

  // Aplicar filtros a las firmas
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

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#392a63] text-[#04a8c2] bg-purple-gradient">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
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
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
