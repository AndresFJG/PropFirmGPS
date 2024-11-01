// types.ts

export interface Firm {
    id: number;
    logo: string;
    name: string;
    price: string;
    accountSize: string;
    profitTarget: string;
    profitTargetPhase2?: string;
    maxDailyLoss: string;
    maxTotalLoss: string;
    refundType: string;
    refundAmount: string;
    profitRatio: string;
    payoutFrequency: string;
    rating: number;
    country: string;
    registrationDate: string;
    traderTrust: number;
    minTradingDays: string;
    maxTradingDays: string;
    twoCategories: boolean;
    leverage: string;
    discountRate: string;
    scale: string;
    crypto: boolean;
    newsCommission: string;
    [key: string]: string | number | boolean | undefined;
  }
  