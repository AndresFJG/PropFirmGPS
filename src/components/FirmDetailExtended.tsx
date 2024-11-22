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
  <div className="bg-[#1e222d] p-5 rounded-xl flex items-center justify-between gap-4 
                  hover:bg-[#2962ff]/5 transition-all duration-200 
                  border border-[#2a2e39] hover:border-[#2962ff]/30">
    <span className="text-[#787b86] text-sm font-medium uppercase tracking-wider w-2/5 font-inter">
      {label}
    </span>
    <span className="text-[#d1d4dc] text-sm font-medium w-3/5 text-right break-words font-inter">
      {value || 'No disponible'}
    </span>
  </div>
);

const InfoSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold text-[#d1d4dc] mb-3 pb-2 
                   border-b border-[#2a2e39] font-poppins">
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

    Papa.parse('/pro_firm_details_v2-profirm_gps_v1_separado.csv', {
      download: true,
      header: true,
      complete: (results) => {
        const firmAccounts = results.data.filter((account: any) => {
          return account['FIRM']?.toLowerCase() === slug?.toLowerCase()
        });
        setAccounts(firmAccounts as AccountData[]);
      },
      error: (error) => {
        console.error('Error al cargar el CSV:', error);
      }
    });
  }, [slug]);

  if (!firmData) return <div>Cargando...</div>;

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Carta de información */}
        <div className="xl:col-span-4 bg-gradient-to-br from-[#1e222d] via-[#1e222d] to-[#2962ff]/5 
                      rounded-2xl p-6 shadow-xl border border-[#2a2e39] 
                      hover:border-[#2962ff]/30 transition-all duration-300
                      hover:shadow-[#2962ff]/10 h-fit">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#d1d4dc] mb-4 font-poppins">
              {firmData['Profirm Name']}
            </h1>
            <div className="bg-[#131722] p-4 rounded-lg flex items-center justify-between
                          border border-[#2a2e39] hover:border-[#2962ff]/30
                          transition-all duration-300">
              <span className="text-[#787b86] text-sm font-medium uppercase tracking-wide font-inter">
                Valoración
              </span>
              <div className="flex items-center gap-2">
                <FaStar className="text-[#2962ff] text-xl" />
                <span className="text-[#d1d4dc] font-medium text-lg font-inter">
                  {firmData['TRUST PILOT']}
                </span>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="space-y-6">
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

        {/* Tabla de cuentas */}
        <div className="xl:col-span-8 bg-gradient-to-br from-[#1e222d] via-[#1e222d] to-[#2962ff]/5 
                      rounded-2xl p-6 shadow-xl border border-[#2a2e39]
                      hover:border-[#2962ff]/30 transition-all duration-300
                      hover:shadow-[#2962ff]/10">
          <h2 className="text-2xl font-bold text-[#d1d4dc] mb-6 pb-2 
                       border-b border-[#2a2e39] font-poppins">
            Cuentas Disponibles
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-[#d1d4dc] border-spacing-y-3 border-separate">
              <thead>
                <tr>
                  {[
                    { key: 'size', label: 'Tamaño', width: 'w-[20%]' },
                    { key: 'price', label: 'Precio', width: 'w-[15%]' },
                    { key: 'split', label: 'Split', width: 'w-[10%]' },
                    { key: 'target', label: 'Objetivo', width: 'w-[15%]' },
                    { key: 'daily', label: 'P.Diaria', width: 'w-[20%]' },
                    { key: 'total', label: 'P.Total', width: 'w-[20%]' }
                  ].map((header) => (
                    <th key={header.key} 
                        className={`${header.width} bg-[#131722] first:rounded-l-lg last:rounded-r-lg 
                                  py-4 px-4 text-left border border-[#2a2e39]`}>
                      <span className="text-sm font-semibold uppercase tracking-wider text-[#787b86] font-inter">
                        {header.label}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="space-y-2">
                {accounts.map((account, index) => (
                  <tr key={index} className="transition-all duration-200">
                    {[
                      { value: account['ACCOUNT SIZE'], align: 'text-left' },
                      { value: account['PRICE'], align: 'text-right' },
                      { value: account['PROFIT SPLIT'], align: 'text-center' },
                      { value: account['PROFIT TARGET'], align: 'right' },
                      { value: account['MAX. DAILY LOSS'], align: 'right' },
                      { value: account['MAX. TOTAL DRAWDOWN'], align: 'right' }
                    ].map((cell, i) => (
                      <td key={i} 
                          className={`
                            bg-[#1e222d] hover:bg-[#2962ff]/5 
                            transition-colors duration-200
                            py-4 px-4 text-sm font-medium font-inter ${cell.align}
                            border border-[#2a2e39] hover:border-[#2962ff]/30
                            ${i === 0 ? 'rounded-l-lg' : ''}
                            ${i === 5 ? 'rounded-r-lg' : ''}
                            ${typeof cell.value === 'string' && cell.value.includes('$') ? 'text-[#2962ff]' : 'text-[#d1d4dc]'}
                          `}>
                        {cell.value || 'N/A'}
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