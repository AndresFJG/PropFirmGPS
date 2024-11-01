// // import React, { useState } from 'react';

// // const FilterPanel: React.FC = () => {
// //   const [selectedAsset, setSelectedAsset] = useState<string>('');
// //   const [selectedAccount, setSelectedAccount] = useState<string>('');
// //   const [selectedSteps, setSelectedSteps] = useState<string>('');
// //   const [applyDiscount, setApplyDiscount] = useState<boolean>(false);

// //   const assetTypes = ['Forex', 'Futuros', 'Acciones', 'Cripto', 'Índices', 'Materias primas'];
// //   const accountSizes = ['5K', '10K', '25K', '50K', '100K', '200K', '300K', '400K', '500K'];
// //   const steps = ['Instantánea', '1 Paso', '2 Pasos', '3 Pasos'];

// //   return (
// //     <div className="bg-purple-900 text-white p-6 rounded-lg">
// //       <h2 className="text-2xl font-bold mb-4">¿Qué plan quiere comparar?</h2>
      
// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Seleccione el tipo de activo</p>
// //         <div className="flex flex-wrap gap-2">
// //           {assetTypes.map((asset) => (
// //             <button
// //               key={asset}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedAsset === asset ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => setSelectedAsset(asset)}
// //             >
// //               {asset}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Seleccione el tamaño de su cuenta</p>
// //         <div className="flex flex-wrap gap-2">
// //           {accountSizes.map((size) => (
// //             <button
// //               key={size}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedAccount === size ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => setSelectedAccount(size)}
// //             >
// //               {size}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Número de pasos</p>
// //         <div className="flex flex-wrap gap-2">
// //           {steps.map((step) => (
// //             <button
// //               key={step}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedSteps === step ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => setSelectedSteps(step)}
// //             >
// //               {step}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Promoción Cuenta Extra</p>
// //         <div className="bg-gray-700 p-2 rounded text-sm">
// //           +1 Cuenta de desafío gratuita si alcanza el pago
// //         </div>
// //       </div>

// //       <div className="mb-6 flex items-center">
// //         <label className="flex items-center cursor-pointer">
// //           <div className="relative">
// //             <input
// //               type="checkbox"
// //               className="sr-only"
// //               checked={applyDiscount}
// //               onChange={() => setApplyDiscount(!applyDiscount)}
// //             />
// //             <div className={`block bg-gray-600 w-14 h-8 rounded-full ${applyDiscount ? 'bg-purple-400' : ''}`}></div>
// //             <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${applyDiscount ? 'transform translate-x-6' : ''}`}></div>
// //           </div>
// //           <div className="ml-3 text-gray-300 font-medium text-sm">
// //             Aplicar descuento
// //           </div>
// //         </label>
// //       </div>

// //       <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-bold hover:bg-pink-600 transition duration-300">
// //         Buscar ahora
// //       </button>
// //     </div>
// //   );
// // };

// // export default FilterPanel;

// // import React, { useState } from 'react';

// // interface FilterPanelProps {
// //   onFilterChange: (filters: {
// //     assetType: string;
// //     accountSize: string;
// //     steps: string;
// //     applyDiscount: boolean;
// //   }) => void;
// // }

// // const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
// //   const [selectedAsset, setSelectedAsset] = useState<string>('');
// //   const [selectedAccount, setSelectedAccount] = useState<string>('');
// //   const [selectedSteps, setSelectedSteps] = useState<string>('');
// //   const [applyDiscount, setApplyDiscount] = useState<boolean>(false);

// //   const assetTypes = ['Forex', 'Futuros', 'Acciones', 'Cripto', 'Índices', 'Materias primas'];
// //   const accountSizes = ['5K', '10K', '25K', '50K', '100K', '200K', '300K', '400K', '500K'];
// //   const steps = ['Instantánea', '1 Paso', '2 Pasos', '3 Pasos'];

// //   const updateFilters = () => {
// //     onFilterChange({
// //       assetType: selectedAsset,
// //       accountSize: selectedAccount,
// //       steps: selectedSteps,
// //       applyDiscount,
// //     });
// //   };

// //   return (
// //     <div className="bg-purple-900 text-white p-6 rounded-lg">
// //       <h2 className="text-2xl font-bold mb-4">¿Qué plan quiere comparar?</h2>

// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Seleccione el tipo de activo</p>
// //         <div className="flex flex-wrap gap-2">
// //           {assetTypes.map((asset) => (
// //             <button
// //               key={asset}
// //               className={`px-4 py-2 rounded-full text-sm ${selectedAsset === asset ? 'bg-purple-500' : 'bg-gray-700'}`}
// //               onClick={() => {
// //                 setSelectedAsset(asset);
// //                 updateFilters();
// //               }}
// //             >
// //               {asset}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Seleccione el tamaño de su cuenta</p>
// //         <div className="flex flex-wrap gap-2">
// //           {accountSizes.map((size) => (
// //             <button
// //               key={size}
// //               className={`px-4 py-2 rounded-full text-sm ${selectedAccount === size ? 'bg-purple-500' : 'bg-gray-700'}`}
// //               onClick={() => {
// //                 setSelectedAccount(size);
// //                 updateFilters();
// //               }}
// //             >
// //               {size}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Número de pasos</p>
// //         <div className="flex flex-wrap gap-2">
// //           {steps.map((step) => (
// //             <button
// //               key={step}
// //               className={`px-4 py-2 rounded-full text-sm ${selectedSteps === step ? 'bg-purple-500' : 'bg-gray-700'}`}
// //               onClick={() => {
// //                 setSelectedSteps(step);
// //                 updateFilters();
// //               }}
// //             >
// //               {step}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FilterPanel;

// // import React, { useState } from 'react';

// // interface FilterPanelProps {
// //   onFilterChange: (filters: {
// //     assetType: string;
// //     accountSize: string;
// //     steps: string;
// //     applyDiscount: boolean;
// //   }) => void;
// // }

// // const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
// //   const [selectedAsset, setSelectedAsset] = useState<string>('');
// //   const [selectedAccount, setSelectedAccount] = useState<string>('');
// //   const [selectedSteps, setSelectedSteps] = useState<string>('');
// //   const [applyDiscount, setApplyDiscount] = useState<boolean>(false);

// //   const assetTypes = ['Forex', 'Futuros', 'Acciones', 'Cripto', 'Índices', 'Materias primas'];
// //   const accountSizes = ['5K', '10K', '25K', '50K', '100K', '200K', '300K', '400K', '500K'];
// //   const steps = ['Instantánea', '1 Paso', '2 Pasos', '3 Pasos'];

// //   const updateFilters = () => {
// //     onFilterChange({
// //       assetType: selectedAsset,
// //       accountSize: selectedAccount,
// //       steps: selectedSteps,
// //       applyDiscount,
// //     });
// //   };

// //   const toggleSelection = (currentValue: string, selectedValue: string, setSelected: (value: string) => void) => {
// //     setSelected(currentValue === selectedValue ? '' : selectedValue);
// //     updateFilters();
// //   };

// //   return (
// //     <div className="bg-purple-900 text-white p-6 rounded-lg">
// //       <h2 className="text-2xl font-bold mb-4">¿Qué plan quiere comparar?</h2>

// //       {/* Filtro por tipo de activo */}
// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Seleccione el tipo de activo</p>
// //         <div className="flex flex-wrap gap-2">
// //           {assetTypes.map((asset) => (
// //             <button
// //               key={asset}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedAsset === asset ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => toggleSelection(selectedAsset, asset, setSelectedAsset)}
// //             >
// //               {asset}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Filtro por tamaño de cuenta */}
// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Seleccione el tamaño de su cuenta</p>
// //         <div className="flex flex-wrap gap-2">
// //           {accountSizes.map((size) => (
// //             <button
// //               key={size}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedAccount === size ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => toggleSelection(selectedAccount, size, setSelectedAccount)}
// //             >
// //               {size}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Filtro por número de pasos */}
// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Número de pasos</p>
// //         <div className="flex flex-wrap gap-2">
// //           {steps.map((step) => (
// //             <button
// //               key={step}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedSteps === step ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => toggleSelection(selectedSteps, step, setSelectedSteps)}
// //             >
// //               {step}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Filtro por descuento */}
// //       <div className="mb-6 flex items-center">
// //         <label className="flex items-center cursor-pointer">
// //           <div className="relative">
// //             <input
// //               type="checkbox"
// //               className="sr-only"
// //               checked={applyDiscount}
// //               onChange={() => {
// //                 setApplyDiscount(!applyDiscount);
// //                 updateFilters();
// //               }}
// //             />
// //             <div className={`block bg-gray-600 w-14 h-8 rounded-full ${applyDiscount ? 'bg-purple-400' : ''}`}></div>
// //             <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
// //               applyDiscount ? 'transform translate-x-6' : ''
// //             }`}></div>
// //           </div>
// //           <div className="ml-3 text-gray-300 font-medium text-sm">
// //             Aplicar descuento
// //           </div>
// //         </label>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FilterPanel;

// // import React, { useState } from 'react';

// // interface FilterPanelProps {
// //   onFilterChange: (filters: {
// //     assetType: string;
// //     accountSize: string;
// //     steps: string;
// //     applyDiscount: boolean;
// //   }) => void;
// // }

// // const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
// //   const [selectedAsset, setSelectedAsset] = useState<string>('');
// //   const [selectedAccount, setSelectedAccount] = useState<string>('');
// //   const [selectedSteps, setSelectedSteps] = useState<string>('');
// //   const [applyDiscount, setApplyDiscount] = useState<boolean>(false);

// //   const assetTypes = ['Forex', 'Futuros', 'Acciones', 'Cripto', 'Índices', 'Materias primas'];
// //   const accountSizes = ['5K', '10K', '25K', '50K', '100K', '200K', '300K', '400K', '500K'];
// //   const steps = ['Instantánea', '1 Paso', '2 Pasos', '3 Pasos'];

// //   const updateFilters = () => {
// //     onFilterChange({
// //       assetType: selectedAsset,
// //       accountSize: selectedAccount,
// //       steps: selectedSteps,
// //       applyDiscount,
// //     });
// //   };

// //   const toggleSelection = (currentValue: string, selectedValue: string, setSelected: (value: string) => void) => {
// //     setSelected(currentValue === selectedValue ? '' : selectedValue);
// //     updateFilters();
// //   };

// //   // Función para resetear todos los filtros
// //   const resetFilters = () => {
// //     setSelectedAsset('');
// //     setSelectedAccount('');
// //     setSelectedSteps('');
// //     setApplyDiscount(false);
// //     onFilterChange({ assetType: '', accountSize: '', steps: '', applyDiscount: false });
// //   };

// //   return (
// //     <div className="bg-purple-900 text-white p-6 rounded-lg">
// //       <h2 className="text-2xl font-bold mb-4">¿Qué plan quiere comparar?</h2>

// //       {/* Filtro por tipo de activo */}
// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Seleccione el tipo de activo</p>
// //         <div className="flex flex-wrap gap-2">
// //           {assetTypes.map((asset) => (
// //             <button
// //               key={asset}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedAsset === asset ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => toggleSelection(selectedAsset, asset, setSelectedAsset)}
// //             >
// //               {asset}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Filtro por tamaño de cuenta */}
// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Seleccione el tamaño de su cuenta</p>
// //         <div className="flex flex-wrap gap-2">
// //           {accountSizes.map((size) => (
// //             <button
// //               key={size}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedAccount === size ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => toggleSelection(selectedAccount, size, setSelectedAccount)}
// //             >
// //               {size}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Filtro por número de pasos */}
// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Número de pasos</p>
// //         <div className="flex flex-wrap gap-2">
// //           {steps.map((step) => (
// //             <button
// //               key={step}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedSteps === step ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => toggleSelection(selectedSteps, step, setSelectedSteps)}
// //             >
// //               {step}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Filtro por descuento */}
// //       <div className="mb-6 flex items-center">
// //         <label className="flex items-center cursor-pointer">
// //           <div className="relative">
// //             <input
// //               type="checkbox"
// //               className="sr-only"
// //               checked={applyDiscount}
// //               onChange={() => {
// //                 setApplyDiscount(!applyDiscount);
// //                 updateFilters();
// //               }}
// //             />
// //             <div className={`block bg-gray-600 w-14 h-8 rounded-full ${applyDiscount ? 'bg-purple-400' : ''}`}></div>
// //             <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
// //               applyDiscount ? 'transform translate-x-6' : ''
// //             }`}></div>
// //           </div>
// //           <div className="ml-3 text-gray-300 font-medium text-sm">
// //             Aplicar descuento
// //           </div>
// //         </label>
// //       </div>

// //       {/* Botón de reset */}
// //       <button
// //         className="w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300"
// //         onClick={resetFilters}
// //       >
// //         Resetear Filtros
// //       </button>
// //     </div>
// //   );
// // };

// // export default FilterPanel;

// // import React, { useState } from 'react';

// // interface FilterPanelProps {
// //   onFilterChange: (filters: {
// //     accountSize: string;
// //     steps: string;
// //     applyDiscount: boolean;
// //   }) => void;
// // }

// // const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
// //   const [selectedAccountSize, setSelectedAccountSize] = useState<string>('');
// //   const [selectedSteps, setSelectedSteps] = useState<string>('');
// //   const [applyDiscount, setApplyDiscount] = useState<boolean>(false);

// //   const accountSizes = ['5K', '10K', '25K', '50K', '100K', '200K', '300K', '400K', '500K'];
// //   const steps = ['Instantánea', '1 Paso', '2 Pasos', '3 Pasos'];

// //   // Actualizar filtros
// //   const updateFilters = () => {
// //     onFilterChange({
// //       accountSize: selectedAccountSize,
// //       steps: selectedSteps,
// //       applyDiscount,
// //     });
// //   };

// //   // Alternar selección de filtros
// //   const toggleSelection = (currentValue: string, selectedValue: string, setSelected: (value: string) => void) => {
// //     const newValue = currentValue === selectedValue ? '' : selectedValue;
// //     setSelected(newValue);
// //     setTimeout(updateFilters, 0); // Actualizar filtros después de cambiar el estado
// //   };

// //   // Función para resetear todos los filtros
// //   const resetFilters = () => {
// //     setSelectedAccountSize('');
// //     setSelectedSteps('');
// //     setApplyDiscount(false);
// //     onFilterChange({ accountSize: '', steps: '', applyDiscount: false });
// //   };

// //   return (
// //     <div className="bg-purple-900 text-white p-6 rounded-lg">
// //       <h2 className="text-2xl font-bold mb-4">¿Qué plan quiere comparar?</h2>

// //       {/* Filtro por tamaño de cuenta */}
// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Tamaño de cuenta</p>
// //         <div className="flex flex-wrap gap-2">
// //           {accountSizes.map((size) => (
// //             <button
// //               key={size}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedAccountSize === size ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => toggleSelection(selectedAccountSize, size, setSelectedAccountSize)}
// //             >
// //               {size}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Filtro por número de cuentas (steps) */}
// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Número de cuentas</p>
// //         <div className="flex flex-wrap gap-2">
// //           {steps.map((step) => (
// //             <button
// //               key={step}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedSteps === step ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => toggleSelection(selectedSteps, step, setSelectedSteps)}
// //             >
// //               {step}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Filtro por descuento */}
// //       <div className="mb-6 flex items-center">
// //         <label className="flex items-center cursor-pointer">
// //           <div className="relative">
// //             <input
// //               type="checkbox"
// //               className="sr-only"
// //               checked={applyDiscount}
// //               onChange={() => {
// //                 setApplyDiscount(!applyDiscount);
// //                 setTimeout(updateFilters, 0); // Actualizar filtros después del cambio
// //               }}
// //             />
// //             <div className={`block bg-gray-600 w-14 h-8 rounded-full ${applyDiscount ? 'bg-purple-400' : ''}`}></div>
// //             <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
// //               applyDiscount ? 'transform translate-x-6' : ''
// //             }`}></div>
// //           </div>
// //           <span className="ml-3 text-gray-300 font-medium text-sm">
// //             Aplicar descuento
// //           </span>
// //         </label>
// //       </div>

// //       {/* Botón de reset */}
// //       <button
// //         className="w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300"
// //         onClick={resetFilters}
// //       >
// //         Resetear Filtros
// //       </button>
// //     </div>
// //   );
// // };

// // export default FilterPanel;

// // import React, { useState } from 'react';

// // interface FilterPanelProps {
// //   onFilterChange: (filters: {
// //     accountSize: string;
// //     steps: string;
// //     applyDiscount: boolean;
// //   }) => void;
// // }

// // const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
// //   const [selectedAccountSize, setSelectedAccountSize] = useState<string>('');
// //   const [selectedSteps, setSelectedSteps] = useState<string>('');
// //   const [applyDiscount, setApplyDiscount] = useState<boolean>(false);

// //   const accountSizes = ['5K', '10K', '25K', '50K', '100K', '200K', '300K', '400K', '500K'];
// //   const steps = ['Instantánea', '1 Paso', '2 Pasos', '3 Pasos'];

// //   // Actualizar filtros
// //   const updateFilters = () => {
// //     onFilterChange({
// //       accountSize: selectedAccountSize,
// //       steps: selectedSteps,
// //       applyDiscount,
// //     });
// //   };

// //   const toggleSelection = (currentValue: string, selectedValue: string, setSelected: (value: string) => void) => {
// //     const newValue = currentValue === selectedValue ? '' : selectedValue;
// //     setSelected(newValue);
// //     setTimeout(updateFilters, 0); // Actualizar filtros después del cambio de estado
// //   };

// //   const resetFilters = () => {
// //     setSelectedAccountSize('');
// //     setSelectedSteps('');
// //     setApplyDiscount(false);
// //     onFilterChange({ accountSize: '', steps: '', applyDiscount: false });
// //   };

// //   return (
// //     <div className="bg-purple-900 text-white p-6 rounded-lg">
// //       <h2 className="text-2xl font-bold mb-4">¿Qué plan quiere comparar?</h2>

// //       {/* Filtro por tamaño de cuenta */}
// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Tamaño de cuenta</p>
// //         <div className="flex flex-wrap gap-2">
// //           {accountSizes.map((size) => (
// //             <button
// //               key={size}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedAccountSize === size ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => toggleSelection(selectedAccountSize, size, setSelectedAccountSize)}
// //             >
// //               {size}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Filtro por número de cuentas (steps) */}
// //       <div className="mb-4">
// //         <p className="mb-2 font-semibold">Número de cuentas</p>
// //         <div className="flex flex-wrap gap-2">
// //           {steps.map((step) => (
// //             <button
// //               key={step}
// //               className={`px-4 py-2 rounded-full text-sm ${
// //                 selectedSteps === step ? 'bg-purple-500' : 'bg-gray-700'
// //               }`}
// //               onClick={() => toggleSelection(selectedSteps, step, setSelectedSteps)}
// //             >
// //               {step}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Filtro por descuento */}
// //       <div className="mb-6 flex items-center">
// //         <label className="flex items-center cursor-pointer">
// //           <div className="relative">
// //             <input
// //               type="checkbox"
// //               className="sr-only"
// //               checked={applyDiscount}
// //               onChange={() => {
// //                 setApplyDiscount(!applyDiscount);
// //                 setTimeout(updateFilters, 0); // Actualizar filtros después del cambio de estado
// //               }}
// //             />
// //             <div className={`block bg-gray-600 w-14 h-8 rounded-full ${applyDiscount ? 'bg-purple-400' : ''}`}></div>
// //             <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
// //               applyDiscount ? 'transform translate-x-6' : ''
// //             }`}></div>
// //           </div>
// //           <span className="ml-3 text-gray-300 font-medium text-sm">
// //             Aplicar descuento
// //           </span>
// //         </label>
// //       </div>

// //       {/* Botón de reset */}
// //       <button
// //         className="w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300"
// //         onClick={resetFilters}
// //       >
// //         Resetear Filtros
// //       </button>
// //     </div>
// //   );
// // };

// // export default FilterPanel;


// import React, { useState } from 'react';

// interface FilterPanelProps {
//   onFilterChange: (filters: {
//     accountSize: string;
//     steps: string;
//     applyDiscount: boolean;
//   }) => void;
// }

// const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
//   const [selectedAccountSize, setSelectedAccountSize] = useState<string>('');
//   const [selectedSteps, setSelectedSteps] = useState<string>('');
//   const [applyDiscount, setApplyDiscount] = useState<boolean>(false);

//   const accountSizes = ['5K', '10K', '25K', '50K', '100K', '200K', '300K', '400K', '500K'];
//   const steps = ['Instantánea', '1 Paso', '2 Pasos', '3 Pasos'];

//   // Actualizar filtros
//   const updateFilters = (newAccountSize = selectedAccountSize, newSteps = selectedSteps, newDiscount = applyDiscount) => {
//     onFilterChange({
//       accountSize: newAccountSize,
//       steps: newSteps,
//       applyDiscount: newDiscount,
//     });
//   };

//   const toggleSelection = (currentValue: string, selectedValue: string, setSelected: (value: string) => void) => {
//     const newValue = currentValue === selectedValue ? '' : selectedValue;
//     setSelected(newValue);
//     updateFilters(
//       selectedAccountSize === selectedValue ? '' : selectedAccountSize,
//       selectedSteps === selectedValue ? '' : selectedSteps,
//       applyDiscount
//     );
//   };

//   const resetFilters = () => {
//     setSelectedAccountSize('');
//     setSelectedSteps('');
//     setApplyDiscount(false);
//     onFilterChange({ accountSize: '', steps: '', applyDiscount: false });
//   };

//   return (
//     <div className="bg-purple-900 text-white p-6 rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">¿Qué plan quiere comparar?</h2>

//       {/* Filtro por tamaño de cuenta */}
//       <div className="mb-4">
//         <p className="mb-2 font-semibold">Tamaño de cuenta</p>
//         <div className="flex flex-wrap gap-2">
//           {accountSizes.map((size) => (
//             <button
//               key={size}
//               className={`px-4 py-2 rounded-full text-sm ${
//                 selectedAccountSize === size ? 'bg-purple-500' : 'bg-gray-700'
//               }`}
//               onClick={() => toggleSelection(selectedAccountSize, size, setSelectedAccountSize)}
//             >
//               {size}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Filtro por número de cuentas (steps) */}
//       <div className="mb-4">
//         <p className="mb-2 font-semibold">Número de cuentas</p>
//         <div className="flex flex-wrap gap-2">
//           {steps.map((step) => (
//             <button
//               key={step}
//               className={`px-4 py-2 rounded-full text-sm ${
//                 selectedSteps === step ? 'bg-purple-500' : 'bg-gray-700'
//               }`}
//               onClick={() => toggleSelection(selectedSteps, step, setSelectedSteps)}
//             >
//               {step}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Filtro por descuento */}
//       <div className="mb-6 flex items-center">
//         <label className="flex items-center cursor-pointer">
//           <div className="relative">
//             <input
//               type="checkbox"
//               className="sr-only"
//               checked={applyDiscount}
//               onChange={() => {
//                 setApplyDiscount(!applyDiscount);
//                 updateFilters(selectedAccountSize, selectedSteps, !applyDiscount);
//               }}
//             />
//             <div className={`block bg-gray-600 w-14 h-8 rounded-full ${applyDiscount ? 'bg-purple-400' : ''}`}></div>
//             <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
//               applyDiscount ? 'transform translate-x-6' : ''
//             }`}></div>
//           </div>
//           <span className="ml-3 text-gray-300 font-medium text-sm">
//             Aplicar descuento
//           </span>
//         </label>
//       </div>

//       {/* Botón de reset */}
//       <button
//         className="w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300"
//         onClick={resetFilters}
//       >
//         Resetear Filtros
//       </button>
//     </div>
//   );
// };

// export default FilterPanel;

// import React, { useState } from 'react';

// interface FilterPanelProps {
//   onFilterChange: (filters: {
//     accountSize: string;
//     steps: string;
//     applyDiscount: boolean;
//   }) => void;
// }

// const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
//   const [selectedAccountSize, setSelectedAccountSize] = useState<string>('');
//   const [selectedSteps, setSelectedSteps] = useState<string>('');
//   const [applyDiscount, setApplyDiscount] = useState<boolean>(false);

//   const accountSizes = ['5K', '10K', '25K', '50K', '100K', '200K', '300K', '400K', '500K'];
//   const steps = ['Instantánea', '1 Paso', '2 Pasos', '3 Pasos'];

//   const updateFilters = (newAccountSize: string, newSteps: string, newDiscount: boolean) => {
//     onFilterChange({
//       accountSize: newAccountSize,
//       steps: newSteps,
//       applyDiscount: newDiscount,
//     });
//   };

//   const toggleAccountSize = (size: string) => {
//     const newSize = selectedAccountSize === size ? '' : size;
//     setSelectedAccountSize(newSize);
//     updateFilters(newSize, selectedSteps, applyDiscount);
//   };

//   const toggleSteps = (step: string) => {
//     const newStep = selectedSteps === step ? '' : step;
//     setSelectedSteps(newStep);
//     updateFilters(selectedAccountSize, newStep, applyDiscount);
//   };

//   const toggleDiscount = () => {
//     const newDiscount = !applyDiscount;
//     setApplyDiscount(newDiscount);
//     updateFilters(selectedAccountSize, selectedSteps, newDiscount);
//   };

//   const resetFilters = () => {
//     setSelectedAccountSize('');
//     setSelectedSteps('');
//     setApplyDiscount(false);
//     onFilterChange({ accountSize: '', steps: '', applyDiscount: false });
//   };

//   return (
//     <div className="bg-purple-900 text-white p-6 rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">¿Qué plan quiere comparar?</h2>

//       {/* Filtro por tamaño de cuenta */}
//       <div className="mb-4">
//         <p className="mb-2 font-semibold">Tamaño de cuenta</p>
//         <div className="flex flex-wrap gap-2">
//           {accountSizes.map((size) => (
//             <button
//               key={size}
//               className={`px-4 py-2 rounded-full text-sm ${
//                 selectedAccountSize === size ? 'bg-purple-500' : 'bg-gray-700'
//               }`}
//               onClick={() => toggleAccountSize(size)}
//             >
//               {size}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Filtro por número de cuentas (steps) */}
//       <div className="mb-4">
//         <p className="mb-2 font-semibold">Número de cuentas</p>
//         <div className="flex flex-wrap gap-2">
//           {steps.map((step) => (
//             <button
//               key={step}
//               className={`px-4 py-2 rounded-full text-sm ${
//                 selectedSteps === step ? 'bg-purple-500' : 'bg-gray-700'
//               }`}
//               onClick={() => toggleSteps(step)}
//             >
//               {step}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Filtro por descuento */}
//       <div className="mb-6 flex items-center">
//         <label className="flex items-center cursor-pointer">
//           <div className="relative">
//             <input
//               type="checkbox"
//               className="sr-only"
//               checked={applyDiscount}
//               onChange={toggleDiscount}
//             />
//             <div className={`block bg-gray-600 w-14 h-8 rounded-full ${applyDiscount ? 'bg-purple-400' : ''}`}></div>
//             <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
//               applyDiscount ? 'transform translate-x-6' : ''
//             }`}></div>
//           </div>
//           <span className="ml-3 text-gray-300 font-medium text-sm">
//             Aplicar descuento
//           </span>
//         </label>
//       </div>

//       {/* Botón de reset */}
//       <button
//         className="w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300"
//         onClick={resetFilters}
//       >
//         Resetear Filtros
//       </button>
//     </div>
//   );
// };

// export default FilterPanel;


import React, { useState } from 'react';

interface FilterPanelProps {
  onFilterChange: (filters: {
    accountSize: string;
    steps: string;
    applyDiscount: boolean;
  }) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
  const [selectedAccountSize, setSelectedAccountSize] = useState<string>('');
  const [selectedSteps, setSelectedSteps] = useState<string>('');
  const [applyDiscount, setApplyDiscount] = useState<boolean>(false);

  const accountSizes = ['5K', '10K', '25K', '50K', '100K', '200K', '300K', '400K', '500K'];
  const steps = ['Instantánea', '1 Paso', '2 Pasos', '3 Pasos'];

  // Función para actualizar los filtros con coincidencias exactas
  const updateFilters = (newAccountSize: string, newSteps: string, newDiscount: boolean) => {
    onFilterChange({
      accountSize: newAccountSize,
      steps: newSteps,
      applyDiscount: newDiscount,
    });
  };

  // Alternar selección de tamaño de cuenta
  const toggleAccountSize = (size: string) => {
    const newSize = selectedAccountSize === size ? '' : size;
    setSelectedAccountSize(newSize);
    updateFilters(newSize, selectedSteps, applyDiscount);
  };

  // Alternar selección de pasos
  const toggleSteps = (step: string) => {
    const newStep = selectedSteps === step ? '' : step;
    setSelectedSteps(newStep);
    updateFilters(selectedAccountSize, newStep, applyDiscount);
  };

  // Alternar selección de descuento
  const toggleDiscount = () => {
    const newDiscount = !applyDiscount;
    setApplyDiscount(newDiscount);
    updateFilters(selectedAccountSize, selectedSteps, newDiscount);
  };

  // Resetear filtros
  const resetFilters = () => {
    setSelectedAccountSize('');
    setSelectedSteps('');
    setApplyDiscount(false);
    onFilterChange({ accountSize: '', steps: '', applyDiscount: false });
  };

  return (
    <div className="bg-purple-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">¿Qué plan quiere comparar?</h2>

      {/* Filtro por tamaño de cuenta */}
      <div className="mb-4">
        <p className="mb-2 font-semibold">Tamaño de cuenta</p>
        <div className="flex flex-wrap gap-2">
          {accountSizes.map((size) => (
            <button
              key={size}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedAccountSize === size ? 'bg-purple-500' : 'bg-gray-700'
              }`}
              onClick={() => toggleAccountSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro por número de cuentas (steps) */}
      <div className="mb-4">
        <p className="mb-2 font-semibold">Número de pasos</p>
        <div className="flex flex-wrap gap-2">
          {steps.map((step) => (
            <button
              key={step}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedSteps === step ? 'bg-purple-500' : 'bg-gray-700'
              }`}
              onClick={() => toggleSteps(step)}
            >
              {step}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro por descuento */}
      <div className="mb-6 flex items-center">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={applyDiscount}
              onChange={toggleDiscount}
            />
            <div className={`block bg-gray-600 w-14 h-8 rounded-full ${applyDiscount ? 'bg-purple-400' : ''}`}></div>
            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
              applyDiscount ? 'transform translate-x-6' : ''
            }`}></div>
          </div>
          <span className="ml-3 text-gray-300 font-medium text-sm">
            Aplicar descuento
          </span>
        </label>
      </div>

      {/* Botón de reset */}
      <button
        className="w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300"
        onClick={resetFilters}
      >
        Resetear Filtros
      </button>
    </div>
  );
};

export default FilterPanel;

