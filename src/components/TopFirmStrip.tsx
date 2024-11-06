import React, { useState } from 'react';
import { FaExternalLinkAlt, FaInfoCircle, FaStar, FaTimes } from 'react-icons/fa';
import useReviews from '../hooks/useReviews';

interface TopFirm {
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

const TopFirmStrip: React.FC = () => {
  const topFirms: TopFirm[] = [
    {
      id: '1',
      name: 'FTMO',
      logo: '/images/firms/ftmo-logo.png',
      maxAccountSize: '400,000',
      discount: {
        percentage: '10%',
        description: 'Use code: PROFIRMGPS'
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
      logo: '/images/firms/the5ers-logo.png',
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
      logo: '/images/firms/topstep-logo.png',
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
        scaling: 'Up to $500,000',
        payouts: 'Weekly',
        platforms: ['TSTrader', 'NinjaTrader', 'Tradovate'],
        instruments: ['Futures'],
        features: [
          'No minimum trading days',
          'Real-time data included',
          'Free coaching',
          'Mobile app available',
          'NFA Regulated'
        ]
      }
    },
    {
      id: '4',
      name: 'Alpha Capital Group',
      logo: '/images/firms/alpha-capital-group-logo.png',
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
          funded: '5%'
        },
        scaling: 'Up to $1,000,000',
        payouts: 'Weekly',
        platforms: ['MT4', 'MT5'],
        instruments: ['Forex', 'Indices', 'Commodities'],
        features: [
          'Two-step evaluation',
          'Trading community',
          'Educational resources',
          'Personal manager',
          'Flexible trading conditions'
        ]
      }
    },
    {
      id: '5',
      name: 'Alpha Futures',
      logo: '/images/firms/alpha-futures-logo.png',
      maxAccountSize: '600,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSAF'
      },
      websiteUrl: 'https://alphafutures.com',
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
      logo: '/images/firms/aqua-funded-logo.png',
      maxAccountSize: '300,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSAQUA'
      },
      websiteUrl: 'https://aquafunded.com',
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
      logo: '/images/firms/ascendex-logo.png',
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
      logo: '/images/firms/audacity-capital-logo.png',
      maxAccountSize: '350,000',
      discount: {
        percentage: '10%',
        description: 'Use code: GPSAUD'
      },
      websiteUrl: 'https://audacitycapital.com',
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
      logo: '/images/firms/blueberry-funded-logo.png',
      maxAccountSize: '200,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSBB'
      },
      websiteUrl: 'https://blueberryfunded.com',
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
      logo: '/images/firms/blue-guardian-logo.png',
      maxAccountSize: '400,000',
      discount: {
        percentage: '25%',
        description: 'Use code: GPSBG'
      },
      websiteUrl: 'https://blueguardian.com',
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
      logo: '/images/firms/breakout-crypto-logo.png',
      maxAccountSize: '250,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSBC'
      },
      websiteUrl: 'https://breakoutcrypto.com',
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
      logo: '/images/firms/brightfunded-logo.png',
      maxAccountSize: '300,000',
      discount: {
        percentage: '15%',
        description: 'Use code: GPSBF'
      },
      websiteUrl: 'https://brightfunded.com',
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
      logo: '/images/firms/crypto-fund-trader-logo.png',
      maxAccountSize: '100,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSCFT'
      },
      websiteUrl: 'https://cryptofundtrader.com',
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
      logo: '/images/firms/darwinex-zero-logo.png',
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
      logo: '/images/firms/e8-markets-logo.png',
      maxAccountSize: '400,000',
      discount: {
        percentage: '25%',
        description: 'Use code: GPSE8'
      },
      websiteUrl: 'https://e8markets.com',
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
      logo: '/images/firms/earn2trade-logo.png',
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
      logo: '/images/firms/elitetrader-logo.png',
      maxAccountSize: '250,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSET'
      },
      websiteUrl: 'https://elitetrader.com',
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
      logo: '/images/firms/finotive-funding-logo.png',
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
      logo: '/images/firms/fintokei-logo.png',
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
      logo: '/images/firms/fortraders-logo.png',
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
      logo: '/images/firms/fundedtradingplus-logo.png',
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
      logo: '/images/firms/fundingpips-logo.png',
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
      logo: '/images/firms/goatfundedtrader-logo.png',
      maxAccountSize: '250,000',
      discount: {
        percentage: '25%',
        description: 'Use code: GPSGFT'
      },
      websiteUrl: 'https://goatfundedtrader.com',
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
      logo: '/images/firms/instantfunding-logo.png',
      maxAccountSize: '150,000',
      discount: {
        percentage: '20%',
        description: 'Use code: GPSIF'
      },
      websiteUrl: 'https://instantfunding.com',
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
      logo: '/images/firms/lark-funding-logo.png',
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
      logo: '/images/firms/myfundedfutures-logo.png',
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
      logo: '/images/firms/myfundedfx-logo.png',
      maxAccountSize: '300,000',
      discount: {
        percentage: '25%',
        description: 'Use code: GPSMFX'
      },
      websiteUrl: 'https://myfundedfx.com',
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
      logo: '/images/firms/mentfunding-logo.png',
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
      logo: '/images/firms/nordicfunding-logo.png',
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
      logo: '/images/firms/oanda-logo.png',
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
      logo: '/images/firms/thetradingpit-logo.png',
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
      logo: '/images/firms/tradeday-logo.png',
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
      logo: '/images/firms/traderslaunch-logo.png',
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
      logo: '/images/firms/tradethepool-logo.png',
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
      logo: '/images/firms/apex-futures-logo.png',
      maxAccountSize: '400,000',
      discount: {
        percentage: '25%',
        description: 'Use code: GPSAPEX'
      },
      websiteUrl: 'https://apexfutures.com',
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Top Proprietary Trading Firms
      </h2>

      <div className="space-y-4">
        {topFirms.map((firm) => (
          <div 
            key={firm.id}
            className="bg-purple-800/30 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center p-6">
              {/* Logo y Nombre */}
              <div className="md:w-1/4 flex items-center space-x-4">
                <img 
                  src={firm.logo}
                  alt={firm.name}
                  className="w-16 h-16 object-contain"
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
                  className="flex items-center justify-center px-6 py-2 bg-[#04a8c2] text-white rounded-lg hover:bg-[#038ba1] transition-colors duration-200"
                >
                  Visitar Sitio
                  <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>
                
                <button
                  onClick={() => setSelectedFirm(firm)}
                  className="flex items-center justify-center px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
                >
                  Ver Detalles
                  <FaInfoCircle className="ml-2" />
                </button>
              </div>
            </div>

            {/* Barra de Progreso o Indicador */}
            <div className="h-1 bg-gradient-to-r from-purple-600 via-[#04a8c2] to-purple-600" />
          </div>
        ))}
      </div>

      {/* Modal Mejorado */}
      {selectedFirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-purple-900/95 to-purple-800/95 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20 shadow-2xl">
            {/* Header Mejorado */}
            <div className="relative bg-purple-900/50 p-6 border-b border-purple-500/20">
              <div className="flex items-center space-x-6">
                <div className="bg-white/10 p-3 rounded-xl">
                  <img 
                    src={selectedFirm.logo} 
                    alt={selectedFirm.name} 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedFirm.name}</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-yellow-400/10 px-3 py-1 rounded-full">
                      <FaStar className="text-yellow-400" />
                      <span className="text-white ml-2 font-semibold">{selectedFirm.rating}</span>
                    </div>
                    <span className="text-gray-400">
                      {selectedFirm.ratingCount.toLocaleString()} reviews
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedFirm(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-all duration-200"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Contenido Principal */}
            <div className="p-6 space-y-8">
              {/* Resumen Rápido */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-purple-800/30 p-4 rounded-xl">
                  <p className="text-gray-400 text-sm">Account Size</p>
                  <p className="text-2xl font-bold text-[#04a8c2]">${selectedFirm.maxAccountSize}</p>
                </div>
                <div className="bg-purple-800/30 p-4 rounded-xl">
                  <p className="text-gray-400 text-sm">Profit Split</p>
                  <p className="text-2xl font-bold text-white">{selectedFirm.details.profitSplit}</p>
                </div>
                <div className="bg-purple-800/30 p-4 rounded-xl">
                  <p className="text-gray-400 text-sm">Max Drawdown</p>
                  <p className="text-2xl font-bold text-red-400">{selectedFirm.details.maxDrawdown}</p>
                </div>
                <div className="bg-purple-800/30 p-4 rounded-xl">
                  <p className="text-gray-400 text-sm">Scaling</p>
                  <p className="text-2xl font-bold text-green-400">{selectedFirm.details.scaling}</p>
                </div>
              </div>

              {/* Información Detallada */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Detalles de la Empresa */}
                <div className="bg-purple-800/20 p-6 rounded-xl space-y-4">
                  <h4 className="text-xl font-semibold text-white flex items-center">
                    <span className="bg-purple-500/20 p-2 rounded-lg mr-3">
                      <FaInfoCircle className="text-purple-400" />
                    </span>
                    Información General
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <p className="flex justify-between">
                      <span className="text-gray-400">Fundado:</span>
                      <span className="font-medium">{selectedFirm.details.founded}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-400">Sede:</span>
                      <span className="font-medium">{selectedFirm.details.headquarters}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-400">Pagos:</span>
                      <span className="font-medium">{selectedFirm.details.payouts}</span>
                    </p>
                  </div>
                </div>

                {/* Objetivos de Trading */}
                <div className="bg-purple-800/20 p-6 rounded-xl space-y-4">
                  <h4 className="text-xl font-semibold text-white flex items-center">
                    <span className="bg-blue-500/20 p-2 rounded-lg mr-3">
                      <FaInfoCircle className="text-blue-400" />
                    </span>
                    Objetivos de Trading
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <p className="flex justify-between">
                      <span className="text-gray-400">Objetivo Fase 1:</span>
                      <span className="font-medium">{selectedFirm.details.profitTarget.phase1}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-400">Objetivo Funded:</span>
                      <span className="font-medium">{selectedFirm.details.profitTarget.funded}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-400">Días Mínimos:</span>
                      <span className="font-medium">{selectedFirm.details.minimumTradingDays}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-400">Límite de Tiempo:</span>
                      <span className="font-medium">{selectedFirm.details.timeLimit}</span>
                    </p>
                  </div>
                </div>

                {/* Plataformas e Instrumentos */}
                <div className="bg-purple-800/20 p-6 rounded-xl space-y-4">
                  <h4 className="text-xl font-semibold text-white flex items-center">
                    <span className="bg-green-500/20 p-2 rounded-lg mr-3">
                      <FaInfoCircle className="text-green-400" />
                    </span>
                    Plataformas y Mercados
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 mb-2">Plataformas:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedFirm.details.platforms.map((platform, index) => (
                          <span key={index} className="bg-purple-700/30 px-3 py-1 rounded-full text-white text-sm">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-2">Instrumentos:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedFirm.details.instruments.map((instrument, index) => (
                          <span key={index} className="bg-purple-700/30 px-3 py-1 rounded-full text-white text-sm">
                            {instrument}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Características */}
                <div className="bg-purple-800/20 p-6 rounded-xl space-y-4">
                  <h4 className="text-xl font-semibold text-white flex items-center">
                    <span className="bg-yellow-500/20 p-2 rounded-lg mr-3">
                      <FaInfoCircle className="text-yellow-400" />
                    </span>
                    Características
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {selectedFirm.details.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
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
                  className="flex items-center justify-center px-8 py-3 bg-[#04a8c2] text-white rounded-xl hover:bg-[#038ba1] transition-all duration-200 shadow-lg hover:shadow-[#04a8c2]/20"
                >
                  Visitar Sitio Web
                  <FaExternalLinkAlt className="ml-2" />
                </a>
                <button
                  onClick={() => setSelectedFirm(null)}
                  className="px-8 py-3 bg-purple-700/50 text-white rounded-xl hover:bg-purple-700/70 transition-all duration-200"
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