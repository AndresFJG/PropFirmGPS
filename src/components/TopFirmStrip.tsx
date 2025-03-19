import React, { useState } from 'react';
import { FaExternalLinkAlt, FaInfoCircle, FaStar } from 'react-icons/fa';
import useReviews from '../hooks/useReviews';

export interface TopFirm {
  id: string;
  name: string;
  logo: string;
  maxAccountSize: string;
  discount: {
    percentage: string;
    description: string;
  };
  websiteUrl: string;
  slug: string;
  rating: number;
  ratingCount: number;
  details: {
    founded: string;
    headquarters: string;
    profitSplit: string;
    minimumTradingDays: number;
    timeLimit: string;
    maxDrawdown: string;
    profitTarget: {
      phase1: string;
      funded: string;
    };
    scaling: string;
    payouts: string;
    platforms: string[];
    instruments: string[];
    features: string[];
  };
}

const formatScaling = (value: string) => {
  const num = parseFloat(value.replace(/[^0-9.-]+/g, '')); // Eliminar caracteres no numéricos
  if (num >= 1e6) {
    return `${(num / 1e6).toFixed(1)}M`; // Millones
  } else if (num >= 1e3) {
    return `${(num / 1e3).toFixed(1)}K`; // Miles
  }
  return value; // Retornar el valor original si es menor a 1000
};

const formatAccountSize = (value: string) => {
  const num = parseFloat(value.replace(/[^0-9.-]+/g, '')); // Eliminar caracteres no numéricos
  if (num >= 1e6) {
    return `${(num / 1e6).toFixed(1)}M`; // Millones
  } else if (num >= 1e3) {
    return `${(num / 1e3).toFixed(1)}K`; // Miles
  }
  return value; // Retornar el valor original si es menor a 1000
};

const TopFirmStrip: React.FC = () => {
  const topFirms: TopFirm[] = [
    {
      id: '1',
      name: 'FTMO',
      logo: 'FTMO.svg',
      maxAccountSize: '400,000',
      discount: {
        percentage: '10%',
        description: 'Use code: PROPFIRMGPS'
      },
      websiteUrl: 'https://ftmo.com',
      slug: 'ftmo-review',
      rating: 4.9,
      ratingCount: 3547,
      details: {
        founded: '2014',
        headquarters: 'Prague, Czech Republic',
        profitSplit: '80%',
        minimumTradingDays: 10,
        timeLimit: '30 days per phase',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '10%',
          funded: '5%'
        },
        scaling: 'Up to $2,000,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5', 'cTrader'],
        instruments: ['Forex', 'Crypto', 'Stocks', 'Commodities'],
        features: [
          'Swing trading allowed',
          'Weekend holding allowed',
          'No restrictions on strategies',
          'Mobile app available',
          'Free demo account'
        ]
      }
    },
    {
      id: '2',
      name: 'The5ers',
      logo: 'The5ers.svg',
      maxAccountSize: '4,000,000',
      discount: {
        percentage: '5%',
        description: 'Use code: GPS5'
      },
      websiteUrl: 'https://the5ers.com',
      slug: 'the5ers-review',
      rating: 4.8,
      ratingCount: 2893,
      details: {
        founded: '2016',
        headquarters: 'Tel Aviv, Israel',
        profitSplit: '85%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '4%',
        profitTarget: {
          phase1: '6%',
          funded: 'No target'
        },
        scaling: 'Up to $4,000,000',
        payouts: 'Monthly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Metals', 'Indices'],
        features: [
          'Low initial drawdown',
          'Scaling plan available',
          'No time limits',
          'Overnight and weekend holding',
          'News trading allowed'
        ]
      }
    },
    {
      id: '3',
      name: 'Topstep',
      logo: 'Topstep.svg',
      maxAccountSize: '150,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPS'
      },
      websiteUrl: 'https://topstep.com',
      slug: 'topstep-review',
      rating: 4.8,
      ratingCount: 2856,
      details: {
        founded: '2012',
        headquarters: 'Chicago, USA',
        profitSplit: '90%',
        minimumTradingDays: 5,
        timeLimit: 'Unlimited',
        maxDrawdown: '3%',
        profitTarget: {
          phase1: '$500',
          funded: 'No target'
        },
        scaling: 'Up to $1,000,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'cTrader'],
        instruments: ['Forex', 'Crypto', 'Stocks'],
        features: [
          'No minimum trading days',
          'Flexible scaling options',
          'Free trial available',
          '24/7 support'
        ]
      }
    },
    {
      id: '4',
      name: 'Alpha Capital Group',
      logo: 'Alpha Capital Group.svg',
      maxAccountSize: '500,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSACG'
      },
      websiteUrl: 'https://alphacapitalgroup.com',
      slug: 'alpha-capital-group-review',
      rating: 4.7,
      ratingCount: 1534,
      details: {
        founded: '2020',
        headquarters: 'London, UK',
        profitSplit: '80%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: '4%'
        },
        scaling: 'Up to $500,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Flexible trading conditions',
          'No time limits',
          'Trading tools provided',
          'Educational resources',
          'Professional support'
        ]
      }
    },
    {
      id: '5',
      name: 'Alpha Futures',
      logo: 'Alpha Futures.svg',
      maxAccountSize: '600,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSAF'
      },
      websiteUrl: 'https://app.alpha-futures.com/signup/Kevin_Santiago000652/',
      slug: 'alpha-futures-review',
      rating: 4.7,
      ratingCount: 1245,
      details: {
        founded: '2021',
        headquarters: 'Singapore',
        profitSplit: '85%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '6%',
        profitTarget: {
          phase1: '10%',
          funded: '5%'
        },
        scaling: 'Up to $1,200,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Futures', 'Forex', 'Indices'],
        features: [
          'Instant funding available',
          'No minimum trading days',
          'Advanced analytics',
          'Real-time data included',
          'Free coaching',
          'Mobile app available',
          'NFA Regulated'
        ]
      }
    },
    {
      id: '6',
      name: 'Aqua Funded',
      logo: 'AquaFunded.svg',
      maxAccountSize: '300,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSAQUA'
      },
      websiteUrl: 'https://checkout.aquafunded.com/ref/2636/',
      slug: 'aqua-funded-review',
      rating: 4.6,
      ratingCount: 923,
      details: {
        founded: '2021',
        headquarters: 'Dubai, UAE',
        profitSplit: '85%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '6%',
        profitTarget: {
          phase1: '10%',
          funded: 'No target'
        },
        scaling: 'Up to $600,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Metals', 'Crypto'],
        features: [
          'Instant funding available',
          'No minimum trading days',
          'Free VPS',
          'Islamic accounts',
          'Advanced analytics'
        ]
      }
    },
    {
      id: '7',
      name: 'Ascendex Capital',
      logo: 'Ascendx Capital.png',
      maxAccountSize: '250,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSASC'
      },
      websiteUrl: 'https://ascendexcapital.com',
      slug: 'ascendex-capital-review',
      rating: 4.6,
      ratingCount: 856,
      details: {
        founded: '2022',
        headquarters: 'London, UK',
        profitSplit: '80%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: '5%'
        },
        scaling: 'Up to $1,000,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],
        features: [
          'Fast verification',
          'Educational resources',
          'Community support',
          'Trading analytics',
          'Personal manager'
        ]
      }
    },
    {
      id: '8',
      name: 'Audacity Capital',
      logo: 'Audacity Capital.svg',
      maxAccountSize: '350,000',
      discount: {
        percentage: '10%',
        description: 'Use code: GPSAUD'
      },
      websiteUrl: 'https://trade.audacitycapital.co.uk/user-auth/register?referral_code=3cf2ab&utm_source=client&utm_medium=referral',
      slug: 'audacity-capital-review',
      rating: 4.5,
      ratingCount: 745,
      details: {
        founded: '2019',
        headquarters: 'Dubai, UAE',
        profitSplit: '85%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '10%',
          funded: '5%'
        },
        scaling: 'Up to $700,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Professional development',
          'Live trading room',
          'Market analysis',
          'Trading tools',
          'Mentorship program'
        ]
      }
    },
    {
      id: '9',
      name: 'Blue Berry Funded',
      logo: 'Blueberry Funded.svg',
      maxAccountSize: '200,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSBB'
      },
      websiteUrl: 'https://blueberryfunded.com/?utm_source=affiliate&ref=890',
      slug: 'blueberry-funded-review',
      rating: 4.5,
      ratingCount: 634,
      details: {
        founded: '2022',
        headquarters: 'London, UK',
        profitSplit: '85%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '6%',
        profitTarget: {
          phase1: '8%',
          funded: '5%'
        },
        scaling: 'Up to $400,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Rapid evaluation',
          'Trading community',
          'Educational content',
          'Daily analysis',
          '24/7 support'
        ]
      }
    },
    {
      id: '10',
      name: 'Blue Guardian',
      logo: 'Blue Guardian.svg',
      maxAccountSize: '400,000',
      discount: {
        percentage: '25%',
        description: 'Use code: GPSBG'
      },
      websiteUrl: 'https://checkout.blueguardian.com/ref/1332/',
      slug: 'blue-guardian-review',
      rating: 4.5,
      ratingCount: 856,
      details: {
        founded: '2021',
        headquarters: 'London, UK',
        profitSplit: '85%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '8%',
        profitTarget: {
          phase1: '8%',
          funded: '4%'
        },
        scaling: 'Up to $2,000,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Lowest profit targets',
          'Fast verification process',
          'Monthly competitions',
          'No trading restrictions',
          'Free signals service'
        ]
      }
    },
    {
      id: '11',
      name: 'Breakout Crypto',
      logo: 'Breakout.svg',
      maxAccountSize: '250,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSBC'
      },
      websiteUrl: 'http://dashboard.breakoutprop.com/evaluation?affiliateId=https://propfirmgps.netlify.app/',
      slug: 'breakout-crypto-review',
      rating: 4.4,
      ratingCount: 523,
      details: {
        founded: '2022',
        headquarters: 'Singapore',
        profitSplit: '80%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '10%',
        profitTarget: {
          phase1: '12%',
          funded: '6%'
        },
        scaling: 'Up to $500,000',
        payouts: 'Weekly',
        platforms: ['MT5', 'Custom Platform'],
        instruments: ['Crypto', 'Crypto Derivatives'],
        features: [
          'Crypto specialization',
          '24/7 trading',
          'Advanced crypto tools',
          'Market analysis',
          'Community support'
        ]
      }
    },
    {
      id: '12',
      name: 'Brightfunded',
      logo: 'BrightFunded.svg',
      maxAccountSize: '300,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSBF'
      },
      websiteUrl: 'https://brightfunded.com?affiliateId=QJ_cPWSJQ8qdruCfibN98w',
      slug: 'brightfunded-review',
      rating: 4.4,
      ratingCount: 478,
      details: {
        founded: '2022',
        headquarters: 'Dubai, UAE',
        profitSplit: '85%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: '4%'
        },
        scaling: 'Up to $600,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],
        features: [
          'Flexible trading conditions',
          'No time limits',
          'Trading tools provided',
          'Educational resources',
          'Professional support'
        ]
      }
    },
    {
      id: '13',
      name: 'Crypto Fund Trader',
      logo: 'Crypto Fund Trader.png',
      maxAccountSize: '100,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSCFT'
      },
      websiteUrl: 'https://cryptofundtrader.com?_por=kevin-santiago25',
      slug: 'crypto-fund-trader-review',
      rating: 4.3,
      ratingCount: 345,
      details: {
        founded: '2023',
        headquarters: 'Malta',
        profitSplit: '75%',
        minimumTradingDays: 0,
        timeLimit: '30 days',
        maxDrawdown: '15%',
        profitTarget: {
          phase1: '15%',
          funded: '10%'
        },
        scaling: 'Up to $250,000',
        payouts: 'Weekly',
        platforms: ['Custom Platform'],
        instruments: ['Crypto', 'DeFi Tokens'],
        features: [
          'Crypto-focused',
          'DeFi integration',
          'High leverage',
          'Advanced crypto tools',
          'Crypto community'
        ]
      }
    },
    {
      id: '14',
      name: 'Darwinex Zero',
      logo: 'Darwinex.webp',
      maxAccountSize: '200,000',
      discount: {
        percentage: '10%',
        description: 'Use code: GPSDW'
      },
      websiteUrl: 'https://darwinex.com',
      slug: 'darwinex-zero-review',
      rating: 4.3,
      ratingCount: 567,
      details: {
        founded: '2012',
        headquarters: 'London, UK',
        profitSplit: '80%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: '5%'
        },
        scaling: 'Up to $400,000',
        payouts: 'Monthly',
        platforms: ['MT4', 'MT5', 'cTrader'],
        instruments: ['Forex', 'Indices', 'Commodities', 'Stocks'],
        features: [
          'FCA Regulated',
          'Social trading',
          'Performance analytics',
          'Risk management tools',
          'API trading'
        ]
      }
    },
    {
      id: '15',
      name: 'E8 Markets',
      logo: 'E8 Markets.svg',
      maxAccountSize: '400,000',
      discount: {
        percentage: '25%',
        description: 'Use code: GPSE8'
      },
      websiteUrl: 'https://e8markets.com/a/A78708E9',
      slug: 'e8-markets-review',
      rating: 4.5,
      ratingCount: 678,
      details: {
        founded: '2021',
        headquarters: 'Singapore',
        profitSplit: '80%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: 'No target'
        },
        scaling: 'Up to $800,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Metals', 'Crypto'],
        features: [
          'Fast verification',
          'Monthly competitions',
          'No trading restrictions',
          'Free signals',
          'Expert support'
        ]
      }
    },
    {
      id: '16',
      name: 'Earn2Trade',
      logo: 'Earn2Trade.svg',
      maxAccountSize: '200,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSE2T'
      },
      websiteUrl: 'https://earn2trade.com',
      slug: 'earn2trade-review',
      rating: 4.6,
      ratingCount: 892,
      details: {
        founded: '2019',
        headquarters: 'USA',
        profitSplit: '80%',
        minimumTradingDays: 5,
        timeLimit: '60 days',
        maxDrawdown: '4%',
        profitTarget: {
          phase1: '6%',
          funded: 'No target'
        },
        scaling: 'Up to $400,000',
        payouts: 'Monthly',
        platforms: ['NinjaTrader', 'Tradovate'],
        instruments: ['Futures'],
        features: [
          'Educational platform',
          'Comprehensive learning',
          'Trading simulator',
          'Professional support',
          'Market analysis'
        ]
      }
    },
    {
      id: '17',
      name: 'EliteTrader',
      logo: 'Elite Trader Funding.png',
      maxAccountSize: '250,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSET'
      },
      websiteUrl: 'https://elitetraderfunding.com/?ref=propfirmgps',
      slug: 'elitetrader-review',
      rating: 4.4,
      ratingCount: 567,
      details: {
        founded: '2022',
        headquarters: 'London, UK',
        profitSplit: '85%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: '5%'
        },
        scaling: 'Up to $500,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Elite community',
          'Professional tools',
          'Daily analysis',
          'Trading signals',
          'VIP support'
        ]
      }
    },
    {
      id: '18',
      name: 'Finotive Funding',
      logo: 'Finotive Funding.svg',
      maxAccountSize: '300,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSFF'
      },
      websiteUrl: 'https://finotivefunding.com',
      slug: 'finotive-funding-review',
      rating: 4.3,
      ratingCount: 432,
      details: {
        founded: '2022',
        headquarters: 'Dubai, UAE',
        profitSplit: '80%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '6%',
        profitTarget: {
          phase1: '10%',
          funded: '5%'
        },
        scaling: 'Up to $600,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Metals', 'Crypto'],
        features: [
          'Flexible rules',
          'No time limits',
          'Islamic accounts',
          'Educational resources',
          'Community support'
        ]
      }
    },
    {
      id: '19',
      name: 'Fintokei',
      logo: 'fintokei.svg',
      maxAccountSize: '200,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSFT'
      },
      websiteUrl: 'https://fintokei.com',
      slug: 'fintokei-review',
      rating: 4.2,
      ratingCount: 345,
      details: {
        founded: '2023',
        headquarters: 'Singapore',
        profitSplit: '75%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '8%',
        profitTarget: {
          phase1: '12%',
          funded: '6%'
        },
        scaling: 'Up to $400,000',
        payouts: 'Monthly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Crypto'],
        features: [
          'Asian market focus',
          'Competitive spreads',
          'Trading tools',
          'Market analysis',
          '24/7 support'
        ]
      }
    },
    {
      id: '20',
      name: 'ForTraders',
      logo: 'For Traders.svg',
      maxAccountSize: '250,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSFT'
      },
      websiteUrl: 'https://fortraders.com',
      slug: 'fortraders-review',
      rating: 4.3,
      ratingCount: 567,
      details: {
        founded: '2022',
        headquarters: 'Estonia',
        profitSplit: '80%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: '4%'
        },
        scaling: 'Up to $500,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Flexible conditions',
          'Trading tools',
          'Educational content',
          'Community access',
          'Professional support'
        ]
      }
    },
    {
      id: '21',
      name: 'FundedTradingPlus',
      logo: 'Funded Trading Plus.png',
      maxAccountSize: '300,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSFTP'
      },
      websiteUrl: 'https://fundedtradingplus.com',
      slug: 'fundedtradingplus-review',
      rating: 4.4,
      ratingCount: 678,
      details: {
        founded: '2022',
        headquarters: 'London, UK',
        profitSplit: '85%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '6%',
        profitTarget: {
          phase1: '10%',
          funded: '5%'
        },
        scaling: 'Up to $600,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Fast evaluation',
          'Trading tools included',
          'Educational resources',
          'Community support',
          'Professional analysis'
        ]
      }
    },
    {
      id: '22',
      name: 'FundingPips',
      logo: 'Funding Pips.svg',
      maxAccountSize: '200,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSFP'
      },
      websiteUrl: 'https://fundingpips.com',
      slug: 'fundingpips-review',
      rating: 4.3,
      ratingCount: 456,
      details: {
        founded: '2022',
        headquarters: 'Dubai, UAE',
        profitSplit: '80%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: '4%'
        },
        scaling: 'Up to $400,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Metals'],
        features: [
          'Instant funding option',
          'No time restrictions',
          'Islamic accounts',
          'Free VPS',
          'Daily analysis'
        ]
      }
    },
    {
      id: '23',
      name: 'GoatFundedTrader',
      logo: 'Goat Funded Trader.png',
      maxAccountSize: '250,000',
      discount: {
        percentage: '25%',
        description: 'Use code: GPSGFT'
      },
      websiteUrl: 'https://goatfundedtrader.com/aff/1871/',
      slug: 'goatfundedtrader-review',
      rating: 4.2,
      ratingCount: 345,
      details: {
        founded: '2023',
        headquarters: 'Singapore',
        profitSplit: '85%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '7%',
        profitTarget: {
          phase1: '10%',
          funded: '5%'
        },
        scaling: 'Up to $500,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Crypto'],
        features: [
          'Competitive conditions',
          'Trading tools suite',
          'Educational content',
          'Community access',
          '24/7 support'
        ]
      }
    },
    {
      id: '24',
      name: 'InstantFunding',
      logo: 'Instant Funding.svg',
      maxAccountSize: '150,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSIF'
      },
      websiteUrl: 'https://instantfunding.io?partner=2030',
      slug: 'instantfunding-review',
      rating: 4.3,
      ratingCount: 432,
      details: {
        founded: '2022',
        headquarters: 'Malta',
        profitSplit: '80%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: 'No target'
        },
        scaling: 'Up to $300,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Instant account access',
          'No evaluation phase',
          'Flexible trading',
          'Real-time support',
          'Trading tools included'
        ]
      }
    },
    {
      id: '25',
      name: 'Lark Funding',
      logo: 'Lark Funding.svg',
      maxAccountSize: '200,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSLF'
      },
      websiteUrl: 'https://larkfunding.com',
      slug: 'lark-funding-review',
      rating: 4.2,
      ratingCount: 345,
      details: {
        founded: '2023',
        headquarters: 'London, UK',
        profitSplit: '80%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '6%',
        profitTarget: {
          phase1: '10%',
          funded: '5%'
        },
        scaling: 'Up to $400,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Beginner friendly',
          'Educational resources',
          'Trading community',
          'Market analysis',
          'Professional support'
        ]
      }
    },
    {
      id: '26',
      name: 'MyFundedFutures',
      logo: 'My Funded Futures.svg',
      maxAccountSize: '250,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSMFF'
      },
      websiteUrl: 'https://myfundedfutures.com',
      slug: 'myfundedfutures-review',
      rating: 4.4,
      ratingCount: 567,
      details: {
        founded: '2022',
        headquarters: 'Chicago, USA',
        profitSplit: '85%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '4%',
        profitTarget: {
          phase1: '$1,000',
          funded: 'No target'
        },
        scaling: 'Up to $500,000',
        payouts: 'Weekly',
        platforms: ['NinjaTrader', 'Tradovate'],
        instruments: ['Futures'],
        features: [
          'Futures specialized',
          'Real-time data included',
          'Trading tools suite',
          'Professional support',
          'Community access'
        ]
      }
    },
    {
      id: '27',
      name: 'MyFundedFx',
      logo: 'My Funded FX.svg',
      maxAccountSize: '300,000',
      discount: {
        percentage: '25%',
        description: 'Use code: GPSMFX'
      },
      websiteUrl: 'https://myfundedfx.tech/purchasechallenge/?sl=10723',
      slug: 'myfundedfx-review',
      rating: 4.3,
      ratingCount: 432,
      details: {
        founded: '2022',
        headquarters: 'Dubai, UAE',
        profitSplit: '80%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: '4%'
        },
        scaling: 'Up to $600,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Metals'],
        features: [
          'Forex focused',
          'Islamic accounts',
          'Trading tools',
          'Market analysis',
          'Educational resources'
        ]
      }
    },
    {
      id: '28',
      name: 'MentFunding',
      logo: 'Ment Funding.svg',
      maxAccountSize: '200,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSMF'
      },
      websiteUrl: 'https://mentfunding.com',
      slug: 'mentfunding-review',
      rating: 4.2,
      ratingCount: 345,
      details: {
        founded: '2023',
        headquarters: 'Singapore',
        profitSplit: '85%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '6%',
        profitTarget: {
          phase1: '10%',
          funded: '5%'
        },
        scaling: 'Up to $400,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Crypto'],
        features: [
          'Mentorship program',
          'Educational focus',
          'Community support',
          'Trading tools',
          'Professional guidance'
        ]
      }
    },
    {
      id: '29',
      name: 'NordicFunding',
      logo: 'Nordic Funder.webp',
      maxAccountSize: '250,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSNF'
      },
      websiteUrl: 'https://nordicfunding.com',
      slug: 'nordicfunding-review',
      rating: 4.3,
      ratingCount: 432,
      details: {
        founded: '2022',
        headquarters: 'Stockholm, Sweden',
        profitSplit: '85%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: '4%'
        },
        scaling: 'Up to $500,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5', 'cTrader'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Scandinavian reliability',
          'Professional tools',
          'Educational resources',
          'Community support',
          'Expert analysis'
        ]
      }
    },
    {
      id: '30',
      name: 'Oanda',
      logo: 'OANDA Prop Trader.svg',
      maxAccountSize: '500,000',
      discount: {
        percentage: '10%',
        description: 'Use code: GPSOANDA'
      },
      websiteUrl: 'https://oanda.com',
      slug: 'oanda-review',
      rating: 4.7,
      ratingCount: 2345,
      details: {
        founded: '1996',
        headquarters: 'New York, USA',
        profitSplit: '70%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: 'Variable',
          funded: 'No target'
        },
        scaling: 'Custom plans',
        payouts: 'Monthly',
        platforms: ['MT4', 'MT5', 'Proprietary'],
        instruments: ['Forex', 'Indices', 'Commodities', 'Bonds'],
        features: [
          'Regulated broker',
          'Advanced technology',
          'Research tools',
          'Educational resources',
          'Global presence'
        ]
      }
    },
    {
      id: '31',
      name: 'TheTradingPit',
      logo: 'The Trading Pit.svg',
      maxAccountSize: '300,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSTTP'
      },
      websiteUrl: 'https://thetradingpit.com',
      slug: 'thetradingpit-review',
      rating: 4.4,
      ratingCount: 567,
      details: {
        founded: '2022',
        headquarters: 'London, UK',
        profitSplit: '80%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '6%',
        profitTarget: {
          phase1: '10%',
          funded: '5%'
        },
        scaling: 'Up to $600,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Community focused',
          'Live trading room',
          'Professional tools',
          'Daily analysis',
          'Expert support'
        ]
      }
    },
    {
      id: '32',
      name: 'TradeDay',
      logo: 'TradeDay.svg',
      maxAccountSize: '200,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSTD'
      },
      websiteUrl: 'https://tradeday.com',
      slug: 'tradeday-review',
      rating: 4.3,
      ratingCount: 432,
      details: {
        founded: '2023',
        headquarters: 'Sydney, Australia',
        profitSplit: '85%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: '4%'
        },
        scaling: 'Up to $400,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Fast evaluation',
          'Trading tools included',
          'Educational content',
          'Market analysis',
          '24/7 support'
        ]
      }
    },
    {
      id: '33',
      name: 'TradersLaunch',
      logo: 'Traders Launch.svg',
      maxAccountSize: '250,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSTL'
      },
      websiteUrl: 'https://traderslaunch.com',
      slug: 'traderslaunch-review',
      rating: 4.2,
      ratingCount: 345,
      details: {
        founded: '2023',
        headquarters: 'Toronto, Canada',
        profitSplit: '80%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '6%',
        profitTarget: {
          phase1: '10%',
          funded: '5%'
        },
        scaling: 'Up to $500,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Beginner friendly',
          'Comprehensive education',
          'Trading community',
          'Professional tools',
          'Expert support'
        ]
      }
    },
    {
      id: '34',
      name: 'TradeThePool',
      logo: 'Trade The Pool.svg',
      maxAccountSize: '300,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSTTP'
      },
      websiteUrl: 'https://tradethepool.com',
      slug: 'tradethepool-review',
      rating: 4.4,
      ratingCount: 567,
      details: {
        founded: '2022',
        headquarters: 'Amsterdam, Netherlands',
        profitSplit: '85%',
        minimumTradingDays: 0,
        timeLimit: 'Unlimited',
        maxDrawdown: '5%',
        profitTarget: {
          phase1: '8%',
          funded: '4%'
        },
        scaling: 'Up to $600,000',
        payouts: 'Bi-weekly',
        platforms: ['MT4', 'MT5', 'cTrader'],
        instruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],
        features: [
          'Pooled funding model',
          'Community trading',
          'Advanced analytics',
          'Trading tools suite',
          'Professional support'
        ]
      }
    },
    {
      id: '35',
      name: 'Apex Futures',
      logo: 'Apex Trader Funding.svg',
      maxAccountSize: '400,000',
      discount: {
        percentage: '25%',
        description: 'Use code: GPSAPEX'
      },
      websiteUrl: 'https://apextraderfunding.com/member/aff/go/propfirmgps',
      slug: 'apex-futures-review',
      rating: 4.8,
      ratingCount: 1567,
      details: {
        founded: '2020',
        headquarters: 'Chicago, USA',
        profitSplit: '80%',
        minimumTradingDays: 5,
        timeLimit: '30 days',
        maxDrawdown: '6%',
        profitTarget: {
          phase1: '10%',
          funded: '5%'
        },
        scaling: 'Up to $500,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Beginner friendly',
          'Comprehensive education',
          'Trading community',
          'Professional tools',
          'Expert support'
        ]
      }
    }
  ];

  const { reviews, loading } = useReviews();
  const [selectedFirm, setSelectedFirm] = useState<TopFirm | null>(null);

  return (
    <div className="w-full bg-[#131722]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {topFirms.map((firm) => (
          <div key={firm.id} 
               className="bg-[#1e222d] rounded-xl mb-4 overflow-hidden
                        border border-[#2a2e39] hover:border-[#2962ff]/30
                        transition-all duration-300
                        hover:shadow-lg hover:shadow-[#2962ff]/10">
            <div className="p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Logo y Nombre */}
              <div className="md:w-1/4 flex items-center space-x-4">
                <img
                  src={require(`../logos/${firm.logo}`)} // Asegúrate de que la ruta sea correcta
                  alt={firm.name}
                  onError={(e) => { e.currentTarget.src = 'ruta/a/imagen/predeterminada.png'; }}
                  className="w-16 h-16 rounded-lg object-contain shadow-md transition-transform duration-200 ease-in-out transform hover:scale-110"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {firm.name}
                  </h3>
                  {!loading && reviews[firm.id] && (
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400" />
                        <span className="text-white ml-1">
                          {reviews[firm.id].rating.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        ({reviews[firm.id].count} reviews)
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Información de Account Size */}
              <div className="md:w-1/4 text-center my-4 md:my-0">
                <p className="text-gray-300 text-sm">Account size up to:</p>
                <p className="text-2xl font-bold text-[#04a8c2]">
                  ${firm.maxAccountSize}
                </p>
              </div>

              {/* Información de Descuento */}
              <div className="md:w-1/4 text-center my-4 md:my-0">
                <div className="bg-green-500/20 rounded-lg px-4 py-2 inline-block">
                  <p className="text-green-400 font-bold text-lg">
                    {firm.discount.percentage} Off
                  </p>
                  <p className="text-gray-300 text-sm">
                    {firm.discount.description}
                  </p>
                </div>
              </div>
                {/* Botones */}
                <div className="md:w-1/4 flex flex-col space-y-2">
                <a
                  href={firm.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-2 
                           bg-gradient-to-r from-[#2962ff] to-[#2979ff]
                           text-white rounded-lg 
                           hover:from-[#2979ff] hover:to-[#2962ff]
                           transition-all duration-300 transform hover:-translate-y-0.5
                           shadow-lg hover:shadow-[#2962ff]/25"
                >
                  Visitar Sitio
                  <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>
                
                <button
                  onClick={() => setSelectedFirm(firm)}
                  className="flex items-center justify-center px-6 py-2 
                           bg-[#1e222d] text-[#d1d4dc] rounded-lg 
                           border border-[#2a2e39] hover:border-[#2962ff]/30
                           hover:bg-[#2a2e39] transition-all duration-300"
                >
                  Ver Detalles
                  <FaInfoCircle className="ml-2" />
                </button>
              </div>

            </div>

            {/* Barra de Progreso */}
            <div className="h-1 bg-gradient-to-r from-[#2962ff] via-[#2979ff] to-[#2962ff]" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedFirm && (
        <div className="fixed inset-0 bg-[#131722]/90 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-[#1e222d] to-[#131722] rounded-2xl 
                         max-w-4xl w-full max-h-[90vh] overflow-y-auto 
                         border border-[#2a2e39] hover:border-[#2962ff]/30
                         shadow-2xl">
            {/* Header */}
            <div className="relative bg-[#1e222d] p-6 border-b border-[#2a2e39]">
              <div className="flex items-center space-x-6">
                <img 
                  src={require(`../logos/${selectedFirm.logo}`)} // Asegúrate de que la ruta sea correcta
                  alt={selectedFirm.name} 
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#d1d4dc] mb-2 font-poppins">
                  {selectedFirm.name}
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-[#2962ff]/10 px-3 py-1 rounded-full">
                    <FaStar className="text-[#2962ff]" />
                    <span className="text-[#d1d4dc] ml-2 font-semibold">
                      {selectedFirm.rating}
                    </span>
                  </div>
                  <span className="text-[#787b86]">
                    {selectedFirm.ratingCount.toLocaleString()} reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Contenido Principal */}
            <div className="p-6 space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#131722] p-4 rounded-xl border border-[#2a2e39]">
                  <p className="text-[#787b86] text-sm">Account Size</p>
                  <p className="text-2xl font-bold text-[#2962ff]">
                    {formatAccountSize(selectedFirm.maxAccountSize)}
                  </p>
                </div>
                <div className="bg-[#131722] p-4 rounded-xl border border-[#2a2e39]">
                  <p className="text-[#787b86] text-sm">Profit Split</p>
                  <p className="text-2xl font-bold text-white">{selectedFirm.details.profitSplit}</p>
                </div>
                <div className="bg-[#131722] p-4 rounded-xl border border-[#2a2e39]">
                  <p className="text-[#787b86] text-sm">Max Drawdown</p>
                  <p className="text-2xl font-bold text-red-400">{selectedFirm.details.maxDrawdown}</p>
                </div>
                <div className="bg-[#131722] p-4 rounded-xl border border-[#2a2e39]">
                  <p className="text-[#787b86] text-sm">Scaling</p>
                  <p className="text-2xl font-bold text-green-400">{formatScaling(selectedFirm.details.scaling)}</p>
                </div>
              </div>

              {/* Información Detallada */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Detalles de la Empresa */}
                <div className="bg-[#1e222d] p-6 rounded-xl space-y-4">
                  <h4 className="text-xl font-semibold text-[#d1d4dc] flex items-center">
                    <span className="bg-[#2962ff]/20 p-2 rounded-lg mr-3">
                      <FaInfoCircle className="text-[#2962ff]" />
                    </span>
                    Información General
                  </h4>
                  <div className="space-y-3 text-[#d1d4dc]">
                    <p className="flex justify-between">
                      <span className="text-[#787b86]">Fundado:</span>
                      <span className="font-medium">{selectedFirm.details.founded}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#787b86]">Sede:</span>
                      <span className="font-medium">{selectedFirm.details.headquarters}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#787b86]">Pagos:</span>
                      <span className="font-medium">{selectedFirm.details.payouts}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#787b86]">Scaling:</span>
                      <span className="font-medium">{formatScaling(selectedFirm.details.scaling)}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#787b86]">Tamaño de Cuenta:</span>
                      <span className="font-medium">{formatAccountSize(selectedFirm.maxAccountSize)}</span>
                    </p>
                  </div>
                </div>

                {/* Objetivos de Trading */}
                <div className="bg-[#1e222d] p-6 rounded-xl space-y-4">
                  <h4 className="text-xl font-semibold text-[#d1d4dc] flex items-center">
                    <span className="bg-[#2962ff]/20 p-2 rounded-lg mr-3">
                      <FaInfoCircle className="text-[#2962ff]" />
                    </span>
                    Objetivos de Trading
                  </h4>
                  <div className="space-y-3 text-[#d1d4dc]">
                    <p className="flex justify-between">
                      <span className="text-[#787b86]">Objetivo Fase 1:</span>
                      <span className="font-medium">{selectedFirm.details.profitTarget.phase1}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#787b86]">Objetivo Funded:</span>
                      <span className="font-medium">{selectedFirm.details.profitTarget.funded}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#787b86]">Días Mínimos:</span>
                      <span className="font-medium">{selectedFirm.details.minimumTradingDays}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#787b86]">Límite de Tiempo:</span>
                      <span className="font-medium">{selectedFirm.details.timeLimit}</span>
                    </p>
                  </div>
                </div>

                {/* Plataformas e Instrumentos */}
                <div className="bg-[#1e222d] p-6 rounded-xl space-y-4">
                  <h4 className="text-xl font-semibold text-[#d1d4dc] flex items-center">
                    <span className="bg-[#2962ff]/20 p-2 rounded-lg mr-3">
                      <FaInfoCircle className="text-[#2962ff]" />
                    </span>
                    Plataformas y Mercados
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[#787b86] mb-2">Plataformas:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedFirm.details.platforms.map((platform, index) => (
                          <span key={index} className="bg-[#2a2e39] px-3 py-1 rounded-full text-[#d1d4dc] text-sm">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[#787b86] mb-2">Instrumentos:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedFirm.details.instruments.map((instrument, index) => (
                          <span key={index} className="bg-[#2a2e39] px-3 py-1 rounded-full text-[#d1d4dc] text-sm">
                            {instrument}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Características */}
                <div className="bg-[#1e222d] p-6 rounded-xl space-y-4">
                  <h4 className="text-xl font-semibold text-[#d1d4dc] flex items-center">
                    <span className="bg-[#2962ff]/20 p-2 rounded-lg mr-3">
                      <FaInfoCircle className="text-[#2962ff]" />
                    </span>
                    Características
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {selectedFirm.details.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-[#d1d4dc]">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex justify-center space-x-4 pt-4">
                <a
                  href={selectedFirm.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-3 
                           bg-gradient-to-r from-[#2962ff] to-[#2979ff]
                           text-white rounded-xl 
                           hover:from-[#2979ff] hover:to-[#2962ff]
                           transition-all duration-300 transform hover:-translate-y-0.5
                           shadow-lg hover:shadow-[#2962ff]/25"
                >
                  Visitar Sitio Web
                  <FaExternalLinkAlt className="ml-2" />
                </a>
                <button
                  onClick={() => setSelectedFirm(null)}
                  className="px-8 py-3 bg-[#1e222d] text-[#d1d4dc] 
                           rounded-xl border border-[#2a2e39] 
                           hover:border-[#2962ff]/30 hover:bg-[#2a2e39] 
                           transition-all duration-300"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopFirmStrip; 