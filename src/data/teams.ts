export type Team = typeof teams[number];

export const teams = [
  'ARI', 'ATL', 'BAL', 'BUF', 'CAR', 'CHI', 'CIN', 'CLE',
  'DAL', 'DEN', 'DET', 'GB', 'HOU', 'IND', 'JAX', 'KC',
  'LAC', 'LAR', 'LV', 'MIA', 'MIN', 'NE', 'NO', 'NYG',
  'NYJ', 'PHI', 'PIT', 'SEA', 'SF', 'TB', 'TEN', 'WAS'
] as const;

export const teamColors: Record<Team, { primary: string; secondary: string }> = {
  SF: { primary: 'bg-red-700', secondary: 'text-gold-500' },
  KC: { primary: 'bg-red-600', secondary: 'text-yellow-400' },
  DAL: { primary: 'bg-blue-800', secondary: 'text-gray-300' },
  BUF: { primary: 'bg-blue-700', secondary: 'text-red-600' },
  PHI: { primary: 'bg-green-800', secondary: 'text-gray-200' },
  MIA: { primary: 'bg-teal-500', secondary: 'text-orange-500' },
  CIN: { primary: 'bg-orange-600', secondary: 'text-black' },
  LAR: { primary: 'bg-blue-600', secondary: 'text-yellow-500' },
  GB: { primary: 'bg-green-700', secondary: 'text-yellow-400' },
  BAL: { primary: 'bg-purple-900', secondary: 'text-gold-500' },
  ARI: { primary: 'bg-red-700', secondary: 'text-white' },
  ATL: { primary: 'bg-red-600', secondary: 'text-black' },
  CAR: { primary: 'bg-blue-800', secondary: 'text-silver-400' },
  CHI: { primary: 'bg-navy-900', secondary: 'text-orange-600' },
  CLE: { primary: 'bg-orange-700', secondary: 'text-brown-700' },
  DEN: { primary: 'bg-orange-600', secondary: 'text-navy-900' },
  DET: { primary: 'bg-blue-600', secondary: 'text-silver-400' },
  HOU: { primary: 'bg-red-700', secondary: 'text-navy-900' },
  IND: { primary: 'bg-blue-600', secondary: 'text-white' },
  JAX: { primary: 'bg-teal-500', secondary: 'text-gold-500' },
  LAC: { primary: 'bg-blue-600', secondary: 'text-yellow-400' },
  LV: { primary: 'bg-black', secondary: 'text-silver-400' },
  MIN: { primary: 'bg-purple-800', secondary: 'text-yellow-400' },
  NE: { primary: 'bg-navy-900', secondary: 'text-red-600' },
  NO: { primary: 'bg-gold-500', secondary: 'text-black' },
  NYG: { primary: 'bg-blue-700', secondary: 'text-red-600' },
  NYJ: { primary: 'bg-green-700', secondary: 'text-white' },
  PIT: { primary: 'bg-black', secondary: 'text-yellow-400' },
  SEA: { primary: 'bg-blue-700', secondary: 'text-green-500' },
  TB: { primary: 'bg-red-700', secondary: 'text-gray-900' },
  TEN: { primary: 'bg-navy-900', secondary: 'text-red-600' },
  WAS: { primary: 'bg-burgundy-800', secondary: 'text-yellow-600' }
};