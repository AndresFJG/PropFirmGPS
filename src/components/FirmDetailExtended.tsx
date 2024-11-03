import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Papa from 'papaparse';

interface FirmDetailData {
  'Profirm Name': string;
  'CEO': string;
  'ESTABLISHED': string;
  'COUNTRY': string;
  'BROKER': string;
  'PLATFORM': string;
  'TRUST PILOT': string;
  'PAYMENT METHODS': string;
  'PAYOUT METHODS': string;
  'INSTRUMENTS': string;
  'LEVERAGE': string;
  'COMMISSIONS': string;
  'DEMO ACCOUNT': string;
}

interface AccountData {
  'FIRM': string;
  'ACCOUNT SIZE': string;
  'PRICE': string;
  'PROFIT SPLIT': string;
  'PROFIT TARGET': string;
  'MAX. DAILY LOSS': string;
  'MAX. TOTAL DRAWDOWN': string;
}

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-purple-900/20 p-5 rounded-xl flex items-center justify-between gap-4 hover:bg-purple-900/30 transition-all duration-200 border border-purple-700/20">
    <span className="text-purple-100 text-sm font-medium uppercase tracking-wider w-2/5">
      {label}
    </span>
    <span className="text-white text-sm font-medium w-3/5 text-right break-words">
      {value || 'No disponible'}
    </span>
  </div>
);

const InfoSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold text-white mb-3 pb-2 border-b border-purple-700/50">
      {title}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const FirmDetailExtended: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [firmData, setFirmData] = useState<FirmDetailData | null>(null);
  const [accounts, setAccounts] = useState<AccountData[]>([]);

  useEffect(() => {
    Papa.parse('/csv/pro_firm_details_v1.csv', {
      download: true,
      header: true,
      complete: (results) => {
        const firm = results.data.find((f: any) => 
          f['Profirm Name']?.toLowerCase() === slug?.toLowerCase()
        );
        if (firm) {
          setFirmData(firm as FirmDetailData);
        }
      }
    });

    Papa.parse('/pro_firm_details_v2-profirm_gps_v1.csv', {
      download: true,
      header: true,
      complete: (results) => {
        console.log('Datos CSV completos:', results.data);
        const firmAccounts = results.data.filter((account: any) => {
          console.log('Comparando:', account['FIRM'], slug);
          return account['FIRM']?.toLowerCase() === slug?.toLowerCase()
        });
        console.log('Cuentas filtradas:', firmAccounts);
        setAccounts(firmAccounts as AccountData[]);
      },
      error: (error) => {
        console.error('Error al cargar el CSV:', error);
      }
    });
  }, [slug]);

  if (!firmData) return <div>Cargando...</div>;

  console.log('Estado actual de accounts:', accounts);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        {/* Carta de información */}
        <div className="lg:col-span-4 bg-purple-800/30 rounded-2xl p-6 backdrop-blur-sm shadow-xl shadow-purple-900/20 border border-purple-700/20 h-fit">
          {/* Encabezado */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-white mb-4">{firmData['Profirm Name']}</h1>
            <div className="bg-purple-900/20 p-4 rounded-lg flex items-center justify-between">
              <span className="text-gray-300 text-sm font-medium uppercase tracking-wide">
                Valoración
              </span>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400 text-xl" />
                <span className="text-white font-small text-lg">{firmData['TRUST PILOT']}</span>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="space-y-4">
            <InfoSection title="Información General">
              <InfoItem label="CEO" value={firmData['CEO']} />
              <InfoItem label="Establecido" value={firmData['ESTABLISHED']} />
              <InfoItem label="País" value={firmData['COUNTRY']} />
            </InfoSection>

            <InfoSection title="Plataformas y Brokers">
              <InfoItem label="Broker" value={firmData['BROKER']} />
              <InfoItem label="Plataforma" value={firmData['PLATFORM']} />
            </InfoSection>

            <InfoSection title="Métodos de Pago">
              <InfoItem label="Pagos" value={firmData['PAYMENT METHODS']} />
              <InfoItem label="Retiros" value={firmData['PAYOUT METHODS']} />
            </InfoSection>

            <InfoSection title="Condiciones de Trading">
              <InfoItem label="Instrumentos" value={firmData['INSTRUMENTS']} />
              <InfoItem label="Apalancamiento" value={firmData['LEVERAGE']} />
              <InfoItem label="Comisiones" value={firmData['COMMISSIONS']} />
            </InfoSection>

            {/* Sección Demo Account - solo se muestra si existe */}
            {firmData['DEMO ACCOUNT'] && (
              <InfoSection title="Cuenta Demo">
                <InfoItem label="Información" value={firmData['DEMO ACCOUNT']} />
              </InfoSection>
            )}
          </div>
        </div>

        {/* Tabla de cuentas - ajustada a 6 columnas */}
        <div className="lg:col-span-6 bg-purple-800/30 rounded-2xl p-8 backdrop-blur-sm shadow-xl shadow-purple-900/20 border border-purple-700/20">
          <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-purple-700/50">
            Cuentas Disponibles
          </h2>
          <div className="w-full">
            <table className="w-full text-white border-spacing-y-4 border-separate">
              <thead>
                <tr>
                  {/* Encabezados con fondo más llamativo y mejor espaciado */}
                  {['Firma', 'Tamaño', 'Precio', 'Split', 'Objetivo', 'P.Diaria', 'P.Total'].map((header) => (
                    <th key={header} className="bg-purple-900/70 first:rounded-l-lg last:rounded-r-lg py-5 px-6">
                      <span className="text-base font-semibold uppercase tracking-wider text-purple-100">
                        {header}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="space-y-3">
                {accounts.map((account, index) => (
                  <tr 
                    key={index}
                    className="transition-all duration-200"
                  >
                    {/* Celdas con mejor diseño y hover */}
                    {[
                      account['FIRM'],
                      account['ACCOUNT SIZE'],
                      account['PRICE'],
                      account['PROFIT SPLIT'],
                      account['PROFIT TARGET'],
                      account['MAX. DAILY LOSS'],
                      account['MAX. TOTAL DRAWDOWN']
                    ].map((value, i) => (
                      <td 
                        key={i} 
                        className={`
                          bg-purple-900/20 hover:bg-purple-900/30 
                          transition-colors duration-200
                          py-4 px-6 text-base font-medium
                          ${i === 0 ? 'rounded-l-lg' : ''}
                          ${i === 6 ? 'rounded-r-lg' : ''}
                          ${typeof value === 'string' && value.includes('$') ? 'text-green-400' : 'text-white'}
                        `}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmDetailExtended;