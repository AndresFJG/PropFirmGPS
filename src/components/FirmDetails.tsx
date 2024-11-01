// import React from 'react';
// import { Firm } from '../backend/types';

// interface FirmDetailsProps {
//   firm: Firm;
// }

// const FirmDetails: React.FC<FirmDetailsProps> = ({ firm }) => {
//   return (
//     <div className="bg-gray-800 p-4 rounded-lg mt-2">
//               <th className="py-3 px-4 border border-gray-700">Precio {firm['PRICE']}</th>
//               <th className="py-3 px-4 border border-gray-700">Cuenta {firm['ACCOUNT SIZE'] || ''}</th>
//               <th className="py-3 px-4 hidden md:table-cell border border-gray-700">Objetivo {firm['PROFIT TARGET'] || ''}</th>
//               <th className="py-3 px-4 hidden lg:table-cell border border-gray-700">Pérdida diaria {firm['MAX. DAILY LOSS'] || ''}</th>
//               <th className="py-3 px-4 hidden lg:table-cell border border-gray-700">Pérdida total {firm['MAX. TOTAL DRAWDOWN'] || ''}</th>
//               <th className="py-3 px-4 hidden xl:table-cell border border-gray-700">Comisión {firm['COMMISION PER ROUND LOT (FOREX)'] || ''}</th>
//               <th className="py-3 px-4 hidden xl:table-cell border border-gray-700">Ratio {firm['PROFIT TARGET TO DRAWDOWN RATIO'] || ''}</th>
//               <th className="py-3 px-4 border border-gray-700">Calificación ⭐{firm['Trust Pilot Rating'] || ''}</th>
//               <br />
//       <h3 className="text-lg font-semibold mb-2">{firm.name} - Detalles</h3>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <p><strong>Fase 1 Objetivo de beneficios:</strong>{firm['Phase 1 Profit Target'] || ''} </p>
//           <p><strong>Fase 2 Objetivo de beneficios:</strong>{firm['Phase 2 Profit Target']}</p>
//           <p><strong>Pérdida máxima diaria:</strong> {firm['Max Daily Loss']}</p>
//           <p><strong>Pérdida máxima total:</strong> {firm['Max Total Drawdown']}</p>
//           <p><strong>Tipo de reembolso:</strong> {firm['Daily Drawdown Reset Type']}</p>
//           <p><strong>Método de reducción:</strong> {firm['Drawdown Method']}</p>
//           <p><strong>Días mínimos de negociación:</strong> {firm['Minimun Trading Days']}</p>
//           <p><strong>Días máximos de negociación:</strong> {firm['Maximun Trading Days']}</p>
//           <p><strong>Regla de 2 categorías:</strong> {firm['Stop-loss Required'] ? 'Sí' : 'No'}</p>
//           <p><strong>Ratio entre el objetivo de beneficio y la reducción:</strong> {firm['Profit Target to Drawdown Ratio']}</p>
//           <p><strong>Tasa de descuento:</strong> {firm['Comissions (Forex)']}</p>
//           <p><strong>Apalancamiento:</strong> {firm['Leverage']}</p>
//           <p><strong>Tarifa de reembolso:</strong> {firm['Refund Fee']}</p>
//           <p><strong>Escala:</strong> {firm['Scaling']}</p>
//           <p><strong>Asesores expertos :</strong> {firm['Expert Advisors (EA) are allowed'] ? 'Sí' : 'No'}</p>
//         </div>
//         <div>
//           <p><strong>Comercio de copias :</strong> {firm['Copy Trading']}</p>
//           <p><strong>Comercio de noticias :</strong> {firm['News Trading']}</p>
//           <p><strong>Fin de semana :</strong> {firm['Weekend Holding']}</p>
//           <p><strong>Cierre automático en Target :</strong> {firm['Auto-close at Target']}</p>
//           <p><strong>Bloqueador de reducción :</strong> {firm['Drawdown Blocker']}</p>
//           <p><strong>Frecuencia de pago :</strong> {firm['Payout Frequency']}</p>
//           <p><strong>Asignación máxima (sin escalar):</strong> {firm['Max Allocation (without scaling)']}</p>
//           <p><strong>Intercambiar cuentas gratuitas:</strong> {firm['Swap Free Accounts']}</p>
//           <p><strong>Tecnología:</strong> {firm['Technology']}</p>
//           <p><strong>Corredor:</strong> {firm['Broker']}</p>
//           <p><strong>Plataforma(s) de negociación:</strong> {firm['Trading Platform(s)']}</p>
//           <p><strong>Calificación piloto de confianza:</strong> {firm['Trust Pilot Rating']}</p>
//           <p><strong>Establecido:</strong> {firm['Established']}</p>
//           <p><strong>País:</strong> {firm['Country']}</p>
//           <p><strong>Puntos de fidelidad:</strong> {firm['Loyalty Points']}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirmDetails;

// import React from 'react';
// import { Firm } from '../backend/types';

// interface FirmDetailsProps {
//   firm: Firm;
// }

// const FirmDetails: React.FC<FirmDetailsProps> = ({ firm }) => {
//   return (
//     <div className="bg-gray-800 p-6 rounded-lg mt-2">
//       <h3 className="text-lg font-bold mb-4 text-white">{firm.name} - Detalles</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <p><strong>Fase 1 Objetivo de beneficios:</strong> {firm['Phase 1 Profit Target'] || ''}</p>
//           <p><strong>Fase 2 Objetivo de beneficios:</strong> {firm['Phase 2 Profit Target']}</p>
//           <p><strong>Pérdida máxima diaria:</strong> {firm['Max Daily Loss']}</p>
//           <p><strong>Pérdida máxima total:</strong> {firm['Max Total Drawdown']}</p>
//           <p><strong>Tipo de reembolso:</strong> {firm['Daily Drawdown Reset Type']}</p>
//           <p><strong>Método de reducción:</strong> {firm['Drawdown Method']}</p>
//           <p><strong>Días mínimos de negociación:</strong> {firm['Minimun Trading Days']}</p>
//           <p><strong>Días máximos de negociación:</strong> {firm['Maximun Trading Days']}</p>
//           <p><strong>Regla de 2 categorías:</strong> {firm['Stop-loss Required'] ? 'Sí' : 'No'}</p>
//           <p><strong>Ratio entre el objetivo de beneficio y la reducción:</strong> {firm['Profit Target to Drawdown Ratio']}</p>
//           <p><strong>Tasa de descuento:</strong> {firm['Comissions (Forex)']}</p>
//           <p><strong>Apalancamiento:</strong> {firm['Leverage']}</p>
//           <p><strong>Tarifa de reembolso:</strong> {firm['Refund Fee']}</p>
//           <p><strong>Escala:</strong> {firm['Scaling']}</p>
//           <p><strong>Asesores expertos:</strong> {firm['Expert Advisors (EA) are allowed'] ? 'Sí' : 'No'}</p>
//         </div>
//         <div>
//           <p><strong>Comercio de copias:</strong> {firm['Copy Trading']}</p>
//           <p><strong>Comercio de noticias:</strong> {firm['News Trading']}</p>
//           <p><strong>Fin de semana:</strong> {firm['Weekend Holding']}</p>
//           <p><strong>Cierre automático en Target:</strong> {firm['Auto-close at Target']}</p>
//           <p><strong>Bloqueador de reducción:</strong> {firm['Drawdown Blocker']}</p>
//           <p><strong>Frecuencia de pago:</strong> {firm['Payout Frequency']}</p>
//           <p><strong>Asignación máxima (sin escalar):</strong> {firm['Max Allocation (without scaling)']}</p>
//           <p><strong>Intercambiar cuentas gratuitas:</strong> {firm['Swap Free Accounts']}</p>
//           <p><strong>Tecnología:</strong> {firm['Technology']}</p>
//           <p><strong>Corredor:</strong> {firm['Broker']}</p>
//           <p><strong>Plataforma(s) de negociación:</strong> {firm['Trading Platform(s)']}</p>
//           <p><strong>Calificación piloto de confianza:</strong> {firm['Trust Pilot Rating']}</p>
//           <p><strong>Establecido:</strong> {firm['Established']}</p>
//           <p><strong>País:</strong> {firm['Country']}</p>
//           <p><strong>Puntos de fidelidad:</strong> {firm['Loyalty Points']}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirmDetails;

// import React from 'react';
// import { Firm } from '../backend/types';

// interface FirmDetailsProps {
//   firm: Firm;
// }

// const FirmDetails: React.FC<FirmDetailsProps> = ({ firm }) => {
//   return (
//     <div className="bg-gray-800 p-8 rounded-lg mt-4 text-white max-h-[80vh] overflow-y-auto">
//       <h3 className="text-2xl font-bold mb-6">{firm.name} - Detalles</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Primera columna de detalles */}
//         <div className="space-y-4">
//           <p><strong>Fase 1 Objetivo de beneficios:</strong> {firm['Phase 1 Profit Target'] || 'N/A'}</p>
//           <p><strong>Fase 2 Objetivo de beneficios:</strong> {firm['Phase 2 Profit Target'] || 'N/A'}</p>
//           <p><strong>Pérdida máxima diaria:</strong> {firm['Max Daily Loss'] || 'N/A'}</p>
//           <p><strong>Pérdida máxima total:</strong> {firm['Max Total Drawdown'] || 'N/A'}</p>
//           <p><strong>Tipo de reembolso:</strong> {firm['Daily Drawdown Reset Type'] || 'N/A'}</p>
//           <p><strong>Método de reducción:</strong> {firm['Drawdown Method'] || 'N/A'}</p>
//           <p><strong>Días mínimos de negociación:</strong> {firm['Minimun Trading Days'] || 'N/A'}</p>
//           <p><strong>Días máximos de negociación:</strong> {firm['Maximun Trading Days'] || 'N/A'}</p>
//           <p><strong>Regla de 2 categorías:</strong> {firm['Stop-loss Required'] ? 'Sí' : 'No'}</p>
//           <p><strong>Ratio entre el objetivo de beneficio y la reducción:</strong> {firm['Profit Target to Drawdown Ratio'] || 'N/A'}</p>
//           <p><strong>Tasa de descuento:</strong> {firm['Comissions (Forex)'] || 'N/A'}</p>
//           <p><strong>Apalancamiento:</strong> {firm['Leverage'] || 'N/A'}</p>
//           <p><strong>Tarifa de reembolso:</strong> {firm['Refund Fee'] || 'N/A'}</p>
//           <p><strong>Escala:</strong> {firm['Scaling'] || 'N/A'}</p>
//           <p><strong>Asesores expertos:</strong> {firm['Expert Advisors (EA) are allowed'] ? 'Sí' : 'No'}</p>
//         </div>

//         {/* Segunda columna de detalles */}
//         <div className="space-y-4">
//           <p><strong>Comercio de copias:</strong> {firm['Copy Trading'] || 'N/A'}</p>
//           <p><strong>Comercio de noticias:</strong> {firm['News Trading'] || 'N/A'}</p>
//           <p><strong>Fin de semana:</strong> {firm['Weekend Holding'] || 'N/A'}</p>
//           <p><strong>Cierre automático en Target:</strong> {firm['Auto-close at Target'] || 'N/A'}</p>
//           <p><strong>Bloqueador de reducción:</strong> {firm['Drawdown Blocker'] || 'N/A'}</p>
//           <p><strong>Frecuencia de pago:</strong> {firm['Payout Frequency'] || 'N/A'}</p>
//           <p><strong>Asignación máxima (sin escalar):</strong> {firm['Max Allocation (without scaling)'] || 'N/A'}</p>
//           <p><strong>Intercambiar cuentas gratuitas:</strong> {firm['Swap Free Accounts'] || 'N/A'}</p>
//           <p><strong>Tecnología:</strong> {firm['Technology'] || 'N/A'}</p>
//           <p><strong>Corredor:</strong> {firm['Broker'] || 'N/A'}</p>
//           <p><strong>Plataforma(s) de negociación:</strong> {firm['Trading Platform(s)'] || 'N/A'}</p>
//           <p><strong>Calificación piloto de confianza:</strong> {firm['Trust Pilot Rating'] || 'N/A'}</p>
//           <p><strong>Establecido:</strong> {firm['Established'] || 'N/A'}</p>
//           <p><strong>País:</strong> {firm['Country'] || 'N/A'}</p>
//           <p><strong>Puntos de fidelidad:</strong> {firm['Loyalty Points'] || 'N/A'}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirmDetails;

// import React from 'react';
// import { Firm } from '../backend/types';

// interface FirmDetailsProps {
//   firm: Firm;
// }

// const FirmDetails: React.FC<FirmDetailsProps> = ({ firm }) => {
//   return (
//     <div className="bg-gray-900 p-6 rounded-lg mt-4 text-white max-h-[80vh] overflow-y-auto shadow-lg">
//       {/* Sección de resumen de la firma */}
//       <div className="bg-gray-800 p-4 rounded-lg mb-6">
//         <h2 className="text-3xl font-bold mb-4">{firm['FIRM'] || 'Firma'}</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
//           <div className="p-4 bg-gray-700 rounded-lg">
//             <p className="text-sm font-semibold text-gray-400">Precio</p>
//             <p className="text-lg font-bold">{firm['PRICE'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg">
//             <p className="text-sm font-semibold text-gray-400">Cuenta</p>
//             <p className="text-lg font-bold">{firm['ACCOUNT SIZE'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg">
//             <p className="text-sm font-semibold text-gray-400">Objetivo</p>
//             <p className="text-lg font-bold">{firm['PROFIT TARGET'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg">
//             <p className="text-sm font-semibold text-gray-400">Pérdida diaria</p>
//             <p className="text-lg font-bold">{firm['MAX. DAILY LOSS'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg">
//             <p className="text-sm font-semibold text-gray-400">Pérdida total</p>
//             <p className="text-lg font-bold">{firm['MAX. TOTAL DRAWDOWN'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg">
//             <p className="text-sm font-semibold text-gray-400">Comisión</p>
//             <p className="text-lg font-bold">{firm['COMMISION PER ROUND LOT (FOREX)'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg">
//             <p className="text-sm font-semibold text-gray-400">Ratio</p>
//             <p className="text-lg font-bold">{firm['PROFIT TARGET TO DRAWDOWN RATIO'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg">
//             <p className="text-sm font-semibold text-gray-400">Calificación</p>
//             <p className="text-lg font-bold">⭐ {firm['Trust Pilot Rating'] || 'N/A'}</p>
//           </div>
//         </div>
//       </div>

//       {/* Detalles completos de la firma */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Primera columna de detalles */}
//         <div className="space-y-4">
//           <p><strong>Fase 1 Objetivo de beneficios:</strong> {firm['Phase 1 Profit Target'] || 'N/A'}</p>
//           <p><strong>Fase 2 Objetivo de beneficios:</strong> {firm['Phase 2 Profit Target'] || 'N/A'}</p>
//           <p><strong>Pérdida máxima diaria:</strong> {firm['Max Daily Loss'] || 'N/A'}</p>
//           <p><strong>Pérdida máxima total:</strong> {firm['Max Total Drawdown'] || 'N/A'}</p>
//           <p><strong>Tipo de reembolso:</strong> {firm['Daily Drawdown Reset Type'] || 'N/A'}</p>
//           <p><strong>Método de reducción:</strong> {firm['Drawdown Method'] || 'N/A'}</p>
//           <p><strong>Días mínimos de negociación:</strong> {firm['Minimun Trading Days'] || 'N/A'}</p>
//           <p><strong>Días máximos de negociación:</strong> {firm['Maximun Trading Days'] || 'N/A'}</p>
//           <p><strong>Regla de 2 categorías:</strong> {firm['Stop-loss Required'] ? 'Sí' : 'No'}</p>
//           <p><strong>Ratio entre el objetivo de beneficio y la reducción:</strong> {firm['Profit Target to Drawdown Ratio'] || 'N/A'}</p>
//           <p><strong>Tasa de descuento:</strong> {firm['Comissions (Forex)'] || 'N/A'}</p>
//           <p><strong>Apalancamiento:</strong> {firm['Leverage'] || 'N/A'}</p>
//           <p><strong>Tarifa de reembolso:</strong> {firm['Refund Fee'] || 'N/A'}</p>
//           <p><strong>Escala:</strong> {firm['Scaling'] || 'N/A'}</p>
//           <p><strong>Asesores expertos:</strong> {firm['Expert Advisors (EA) are allowed'] ? 'Sí' : 'No'}</p>
//         </div>

//         {/* Segunda columna de detalles */}
//         <div className="space-y-4">
//           <p><strong>Comercio de copias:</strong> {firm['Copy Trading'] || 'N/A'}</p>
//           <p><strong>Comercio de noticias:</strong> {firm['News Trading'] || 'N/A'}</p>
//           <p><strong>Fin de semana:</strong> {firm['Weekend Holding'] || 'N/A'}</p>
//           <p><strong>Cierre automático en Target:</strong> {firm['Auto-close at Target'] || 'N/A'}</p>
//           <p><strong>Bloqueador de reducción:</strong> {firm['Drawdown Blocker'] || 'N/A'}</p>
//           <p><strong>Frecuencia de pago:</strong> {firm['Payout Frequency'] || 'N/A'}</p>
//           <p><strong>Asignación máxima (sin escalar):</strong> {firm['Max Allocation (without scaling)'] || 'N/A'}</p>
//           <p><strong>Intercambiar cuentas gratuitas:</strong> {firm['Swap Free Accounts'] || 'N/A'}</p>
//           <p><strong>Tecnología:</strong> {firm['Technology'] || 'N/A'}</p>
//           <p><strong>Corredor:</strong> {firm['Broker'] || 'N/A'}</p>
//           <p><strong>Plataforma(s) de negociación:</strong> {firm['Trading Platform(s)'] || 'N/A'}</p>
//           <p><strong>Calificación piloto de confianza:</strong> {firm['Trust Pilot Rating'] || 'N/A'}</p>
//           <p><strong>Establecido:</strong> {firm['Established'] || 'N/A'}</p>
//           <p><strong>País:</strong> {firm['Country'] || 'N/A'}</p>
//           <p><strong>Puntos de fidelidad:</strong> {firm['Loyalty Points'] || 'N/A'}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirmDetails;

// import React from 'react';
// import { Firm } from '../backend/types';

// interface FirmDetailsProps {
//   firm: Firm;
// }

// const FirmDetails: React.FC<FirmDetailsProps> = ({ firm }) => {
//   return (
//     <div className="bg-gray-900 p-6 rounded-lg mt-4 text-white max-h-[80vh] overflow-y-auto shadow-lg">
//       {/* Sección de resumen de la firma */}
//       <div className="bg-gray-800 p-4 rounded-lg mb-6">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
//           <div className="p-4 bg-gray-700 rounded-lg flex flex-col items-center">
//             <p className="text-sm font-semibold text-gray-400">Precio</p>
//             <p className="text-base font-bold">{firm['PRICE'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg flex flex-col items-center">
//             <p className="text-sm font-semibold text-gray-400">Cuenta</p>
//             <p className="text-base font-bold">{firm['ACCOUNT SIZE'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg flex flex-col items-center">
//             <p className="text-sm font-semibold text-gray-400">Objetivo</p>
//             <p className="text-base font-bold">{firm['PROFIT TARGET'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg flex flex-col items-center">
//             <p className="text-sm font-semibold text-gray-400">Pérdida diaria</p>
//             <p className="text-base font-bold">{firm['MAX. DAILY LOSS'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg flex flex-col items-center">
//             <p className="text-sm font-semibold text-gray-400">Pérdida total</p>
//             <p className="text-base font-bold">{firm['MAX. TOTAL DRAWDOWN'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg flex flex-col items-center">
//             <p className="text-sm font-semibold text-gray-400">Comisión</p>
//             <p className="text-base font-bold">{firm['COMMISION PER ROUND LOT (FOREX)'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg flex flex-col items-center">
//             <p className="text-sm font-semibold text-gray-400">Ratio</p>
//             <p className="text-base font-bold">{firm['PROFIT TARGET TO DRAWDOWN RATIO'] || 'N/A'}</p>
//           </div>
//           <div className="p-4 bg-gray-700 rounded-lg flex flex-col items-center">
//             <p className="text-sm font-semibold text-gray-400">Calificación</p>
//             <p className="text-base font-bold">⭐ {firm['Trust Pilot Rating'] || 'N/A'}</p>
//           </div>
//         </div>
//       </div>

//       {/* Detalles completos de la firma */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Primera columna de detalles */}
//         <div className="space-y-4">
//           <p><strong>Fase 1 Objetivo de beneficios:</strong> {firm['Phase 1 Profit Target'] || 'N/A'}</p>
//           <p><strong>Fase 2 Objetivo de beneficios:</strong> {firm['Phase 2 Profit Target'] || 'N/A'}</p>
//           <p><strong>Pérdida máxima diaria:</strong> {firm['Max Daily Loss'] || 'N/A'}</p>
//           <p><strong>Pérdida máxima total:</strong> {firm['Max Total Drawdown'] || 'N/A'}</p>
//           <p><strong>Tipo de reembolso:</strong> {firm['Daily Drawdown Reset Type'] || 'N/A'}</p>
//           <p><strong>Método de reducción:</strong> {firm['Drawdown Method'] || 'N/A'}</p>
//           <p><strong>Días mínimos de negociación:</strong> {firm['Minimun Trading Days'] || 'N/A'}</p>
//           <p><strong>Días máximos de negociación:</strong> {firm['Maximun Trading Days'] || 'N/A'}</p>
//           <p><strong>Regla de 2 categorías:</strong> {firm['Stop-loss Required'] ? 'Sí' : 'No'}</p>
//           <p><strong>Ratio entre el objetivo de beneficio y la reducción:</strong> {firm['Profit Target to Drawdown Ratio'] || 'N/A'}</p>
//           <p><strong>Tasa de descuento:</strong> {firm['Comissions (Forex)'] || 'N/A'}</p>
//           <p><strong>Apalancamiento:</strong> {firm['Leverage'] || 'N/A'}</p>
//           <p><strong>Tarifa de reembolso:</strong> {firm['Refund Fee'] || 'N/A'}</p>
//           <p><strong>Escala:</strong> {firm['Scaling'] || 'N/A'}</p>
//           <p><strong>Asesores expertos:</strong> {firm['Expert Advisors (EA) are allowed'] ? 'Sí' : 'No'}</p>
//         </div>

//         {/* Segunda columna de detalles */}
//         <div className="space-y-4">
//           <p><strong>Comercio de copias:</strong> {firm['Copy Trading'] || 'N/A'}</p>
//           <p><strong>Comercio de noticias:</strong> {firm['News Trading'] || 'N/A'}</p>
//           <p><strong>Fin de semana:</strong> {firm['Weekend Holding'] || 'N/A'}</p>
//           <p><strong>Cierre automático en Target:</strong> {firm['Auto-close at Target'] || 'N/A'}</p>
//           <p><strong>Bloqueador de reducción:</strong> {firm['Drawdown Blocker'] || 'N/A'}</p>
//           <p><strong>Frecuencia de pago:</strong> {firm['Payout Frequency'] || 'N/A'}</p>
//           <p><strong>Asignación máxima (sin escalar):</strong> {firm['Max Allocation (without scaling)'] || 'N/A'}</p>
//           <p><strong>Intercambiar cuentas gratuitas:</strong> {firm['Swap Free Accounts'] || 'N/A'}</p>
//           <p><strong>Tecnología:</strong> {firm['Technology'] || 'N/A'}</p>
//           <p><strong>Corredor:</strong> {firm['Broker'] || 'N/A'}</p>
//           <p><strong>Plataforma(s) de negociación:</strong> {firm['Trading Platform(s)'] || 'N/A'}</p>
//           <p><strong>Calificación piloto de confianza:</strong> {firm['Trust Pilot Rating'] || 'N/A'}</p>
//           <p><strong>Establecido:</strong> {firm['Established'] || 'N/A'}</p>
//           <p><strong>País:</strong> {firm['Country'] || 'N/A'}</p>
//           <p><strong>Puntos de fidelidad:</strong> {firm['Loyalty Points'] || 'N/A'}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirmDetails;

// import React from 'react';
// import { Firm } from '../backend/types';
// import '../index.css'

// interface FirmDetailsProps {
//   firm: Firm;
// }

// const FirmDetails: React.FC<FirmDetailsProps> = ({ firm }) => {
//   return (
//     <div className="bg-gray-900 p-6 rounded-lg mt-4 text-white max-h-[80vh] overflow-y-auto shadow-lg">
//       {/* Sección de resumen de la firma */}
//       <div className="bg-gray-800 p-4 rounded-lg mb-6">
//         <div className="grid grid-cols-1 rounded-lg lg:grid-cols-4 gap-4">
//           {[
//             { label: 'Precio', value: firm['PRICE'] },
//             { label: 'Cuenta', value: firm['ACCOUNT SIZE'] },
//             { label: 'Objetivo', value: firm['PROFIT TARGET'] },
//             { label: 'Pérdida diaria', value: firm['MAX. DAILY LOSS'] },
//             { label: 'Pérdida total', value: firm['MAX. TOTAL DRAWDOWN'] },
//             { label: 'Comisión', value: firm['COMMISION PER ROUND LOT (FOREX)'] },
//             { label: 'Ratio', value: firm['PROFIT TARGET TO DRAWDOWN RATIO'] },
//             { label: 'Calificación', value: `⭐ ${firm['Trust Pilot Rating']}` },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="p-3 bg-gray-700 flex flex-col items-center rounded-lg border-b border-gray-600"
//             >
//               <p className="text-xs font-semibold text-gray-400">{item.label}</p>
//               <p className="text-sm font-bold mt-1">{item.value || 'N/A'}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Detalles completos de la firma */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {[{
//           title: 'Fase 1 Objetivo de beneficios', value: firm['Phase 1 Profit Target']
//         }, {
//           title: 'Fase 2 Objetivo de beneficios', value: firm['Phase 2 Profit Target']
//         }, {
//           title: 'Pérdida máxima diaria', value: firm['Max Daily Loss']
//         }, {
//           title: 'Pérdida máxima total', value: firm['Max Total Drawdown']
//         }, {
//           title: 'Tipo de reembolso', value: firm['Daily Drawdown Reset Type']
//         }, {
//           title: 'Método de reducción', value: firm['Drawdown Method']
//         }, {
//           title: 'Días mínimos de negociación', value: firm['Minimun Trading Days']
//         }, {
//           title: 'Días máximos de negociación', value: firm['Maximun Trading Days']
//         }, {
//           title: 'Regla de 2 categorías', value: firm['Stop-loss Required'] ? 'Sí' : 'No'
//         }, {
//           title: 'Ratio entre el objetivo de beneficio y la reducción', value: firm['Profit Target to Drawdown Ratio']
//         }, {
//           title: 'Tasa de descuento', value: firm['Comissions (Forex)']
//         }, {
//           title: 'Apalancamiento', value: firm['Leverage']
//         }, {
//           title: 'Tarifa de reembolso', value: firm['Refund Fee']
//         }, {
//           title: 'Escala', value: firm['Scaling']
//         }, {
//           title: 'Asesores expertos', value: firm['Expert Advisors (EA) are allowed'] ? 'Sí' : 'No'
//         }, {
//           title: 'Comercio de copias', value: firm['Copy Trading']
//         }, {
//           title: 'Comercio de noticias', value: firm['News Trading']
//         }, {
//           title: 'Fin de semana', value: firm['Weekend Holding']
//         }, {
//           title: 'Cierre automático en Target', value: firm['Auto-close at Target']
//         }, {
//           title: 'Bloqueador de reducción', value: firm['Drawdown Blocker']
//         }, {
//           title: 'Frecuencia de pago', value: firm['Payout Frequency']
//         }, {
//           title: 'Asignación máxima (sin escalar)', value: firm['Max Allocation (without scaling)']
//         }, {
//           title: 'Intercambiar cuentas gratuitas', value: firm['Swap Free Accounts']
//         }, {
//           title: 'Tecnología', value: firm['Technology']
//         }, {
//           title: 'Corredor', value: firm['Broker']
//         }, {
//           title: 'Plataforma(s) de negociación', value: firm['Trading Platforms']
//         }, {
//           title: 'Calificación piloto de confianza', value: firm['Trust Pilot Rating']
//         }, {
//           title: 'Establecido', value: firm['Established']
//         }, {
//           title: 'País', value: firm['Country']
//         }, {
//           title: 'Puntos de fidelidad', value: firm['Loyalty Points']
//         }].map((detail, index) => (
//           <div
//             key={index}
//             className="py-2 border-b border-gray-600 flex justify-between items-center"
//           >
//             <p className="text-sm font-semibold">{detail.title}:</p>
//             <p className="text-sm">{detail.value || 'N/A'}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FirmDetails;

// import React from 'react';
// import { Firm } from '../backend/types';
// import '../index.css';

// interface FirmDetailsProps {
//   firm: Firm;
// }

// const FirmDetails: React.FC<FirmDetailsProps> = ({ firm }) => {
//   return (
//     <div className="bg-gray-900 p-6 rounded-lg mt-4 text-white max-h-[80vh] overflow-y-auto shadow-lg">
//       {/* Sección de resumen de la firma */}
//       <div className="bg-gray-800 p-4 rounded-lg mb-6">
//         <div className="grid grid-cols-1 rounded-lg lg:grid-cols-4 gap-4">
//           {[
//             { label: 'Precio', value: firm['PRICE'] },
//             { label: 'Cuenta', value: firm['ACCOUNT SIZE'] },
//             { label: 'Objetivo', value: firm['PROFIT TARGET'] },
//             { label: 'Pérdida diaria', value: firm['MAX. DAILY LOSS'] },
//             { label: 'Pérdida total', value: firm['MAX. TOTAL DRAWDOWN'] },
//             { label: 'Comisión', value: firm['COMMISION PER ROUND LOT (FOREX)'] },
//             { label: 'Ratio', value: firm['PROFIT TARGET TO DRAWDOWN RATIO'] },
//             { label: 'Calificación', value: `⭐ ${firm['Trust Pilot Rating']}` },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="p-3 bg-gray-700 flex flex-col items-center rounded-lg border-b border-gray-600"
//             >
//               <p className="text-xs font-semibold text-gray-400">{item.label}</p>
//               <p className="text-sm font-bold mt-1">{item.value || 'N/A'}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Detalles completos de la firma */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {[
//           { title: 'Fase 1 Objetivo de beneficios', value: firm['Phase 1 Profit Target'] },
//           { title: 'Fase 2 Objetivo de beneficios', value: firm['Phase 2 Profit Target'] },
//           { title: 'Pérdida máxima diaria', value: firm['Max Daily Loss'] },
//           { title: 'Pérdida máxima total', value: firm['Max Total Drawdown'] },
//           { title: 'Tipo de reembolso', value: firm['Daily Drawdown Reset Type'] },
//           { title: 'Método de reducción', value: firm['Drawdown Method'] },
//           { title: 'Días mínimos de negociación', value: firm['Minimun Trading Days'] },
//           { title: 'Días máximos de negociación', value: firm['Maximun Trading Days'] },
//           { title: 'Regla de 2 categorías', value: firm['Stop-loss Required'] ? 'Sí' : 'No' },
//           { title: 'Ratio entre el objetivo de beneficio y la reducción', value: firm['Profit Target to Drawdown Ratio'] },
//           { title: 'Tasa de descuento', value: firm['Comissions (Forex)'] },
//           { title: 'Apalancamiento', value: firm['Leverage'] },
//           { title: 'Tarifa de reembolso', value: firm['Refund Fee'] },
//           { title: 'Escala', value: firm['Scaling'] },
//           { title: 'Asesores expertos', value: firm['Expert Advisors (EA) are allowed'] ? 'Sí' : 'No' },
//           { title: 'Comercio de copias', value: firm['Copy Trading'] },
//           { title: 'Comercio de noticias', value: firm['News Trading'] },
//           { title: 'Fin de semana', value: firm['Weekend Holding'] },
//           { title: 'Cierre automático en Target', value: firm['Auto-close at Target'] },
//           { title: 'Bloqueador de reducción', value: firm['Drawdown Blocker'] },
//           { title: 'Frecuencia de pago', value: firm['Payout Frequency'] },
//           { title: 'Asignación máxima (sin escalar)', value: firm['Max Allocation (without scaling)'] },
//           { title: 'Intercambiar cuentas gratuitas', value: firm['Swap Free Accounts'] },
//           { title: 'Tecnología', value: firm['Technology'] },
//           { title: 'Corredor', value: firm['Broker'] },
//           { title: 'Plataforma(s) de negociación', value: firm['Trading Platforms'] },
//           { title: 'Calificación piloto de confianza', value: firm['Trust Pilot Rating'] },
//           { title: 'Establecido', value: firm['Established'] },
//           { title: 'País', value: firm['Country'] },
//           { title: 'Puntos de fidelidad', value: firm['Loyalty Points'] },
//         ].map((detail, index) => (
//           <div
//             key={index}
//             className="py-2 border-b border-gray-600 flex justify-between items-center"
//           >
//             <p className="text-sm font-semibold">{detail.title}:</p>
//             <p className="text-sm">{detail.value || 'N/A'}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FirmDetails;

import React from 'react';
import { Firm } from '../backend/types';
import '../index.css';

interface FirmDetailsProps {
  firm: Firm;
}

const FirmDetails: React.FC<FirmDetailsProps> = ({ firm }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg mt-4 text-white max-h-[80vh] overflow-y-auto shadow-lg">
      {/* Sección de resumen de la firma */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-1 rounded-lg lg:grid-cols-4 gap-4">
          {[
            { label: 'Precio', value: firm['PRICE'] },
            { label: 'Cuenta', value: firm['ACCOUNT SIZE'] },
            { label: 'Objetivo', value: firm['PROFIT TARGET'] },
            { label: 'Pérdida diaria', value: firm['MAX. DAILY LOSS'] },
            { label: 'Pérdida total', value: firm['MAX. TOTAL DRAWDOWN'] },
            { label: 'Comisión', value: firm['COMMISION PER ROUND LOT (FOREX)'] },
            { label: 'Ratio', value: firm['PROFIT TARGET TO DRAWDOWN RATIO'] },
            { label: 'Calificación', value: `⭐ ${firm['Trust Pilot Rating']}` },
          ].map((item, index) => (
            <div
              key={index}
              className="p-3 bg-gray-700 flex flex-col items-center rounded-lg border-b border-gray-600"
            >
              <p className="text-xs font-semibold text-gray-400">{item.label}</p>
              <p className="text-sm font-bold mt-1">{item.value || 'N/A'}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detalles completos de la firma */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Fase 1 Objetivo de beneficios', value: firm['Phase 1 Profit Target'] },
          { title: 'Fase 2 Objetivo de beneficios', value: firm['Phase 2 Profit Target'] },
          { title: 'Pérdida máxima diaria', value: firm['Max Daily Loss'] },
          { title: 'Pérdida máxima total', value: firm['Max Total Drawdown'] },
          { title: 'Tipo de reembolso', value: firm['Daily Drawdown Reset Type'] },
          { title: 'Método de reducción', value: firm['Drawdown Method'] },
          { title: 'Días mínimos de negociación', value: firm['Minimun Trading Days'] },
          { title: 'Días máximos de negociación', value: firm['Maximun Trading Days'] },
          { title: 'Regla de 2 categorías', value: firm['Stop-loss Required'] ? 'Sí' : 'No' },
          { title: 'Ratio entre el objetivo de beneficio y la reducción', value: firm['Profit Target to Drawdown Ratio'] },
          { title: 'Tasa de descuento', value: firm['Comissions (Forex)'] },
          { title: 'Apalancamiento', value: firm['Leverage'] },
          { title: 'Tarifa de reembolso', value: firm['Refund Fee'] },
          { title: 'Escala', value: firm['Scaling'] },
          { title: 'Asesores expertos', value: firm['Expert Advisors (EA) are allowed'] ? 'Sí' : 'No' },
          { title: 'Comercio de copias', value: firm['Copy Trading'] },
          { title: 'Comercio de noticias', value: firm['News Trading'] },
          { title: 'Fin de semana', value: firm['Weekend Holding'] },
          { title: 'Cierre automático en Target', value: firm['Auto-close at Target'] },
          { title: 'Bloqueador de reducción', value: firm['Drawdown Blocker'] },
          { title: 'Frecuencia de pago', value: firm['Payout Frequency'] },
          { title: 'Asignación máxima (sin escalar)', value: firm['Max Allocation (without scaling)'] },
          { title: 'Intercambiar cuentas gratuitas', value: firm['Swap Free Accounts'] },
          { title: 'Tecnología', value: firm['Technology'] },
          { title: 'Corredor', value: firm['Broker'] },
          { title: 'Plataforma(s) de negociación', value: firm['Trading Platforms'] },
          { title: 'Calificación piloto de confianza', value: firm['Trust Pilot Rating'] },
          { title: 'Establecido', value: firm['Established'] },
          { title: 'País', value: firm['Country'] },
          { title: 'Puntos de fidelidad', value: firm['Loyalty Points'] },
        ].map((detail, index) => (
          <div
            key={index}
            className="py-2 border-b border-gray-600 flex justify-between items-center"
          >
            <p className="text-sm font-semibold">{detail.title}:</p>
            <p className="text-sm">{detail.value || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirmDetails;
