import { type Team } from './teams';

export interface Receiver {
  id: string;
  name: string;
  team: Team;
  receptions: number;
  targets: number;
  yards: number;
  touchdowns: number;
  yardsPerCatch: number;
  gamesPlayed: number;
}

export const receivers: Receiver[] = [
  {
    id: '1',
    name: 'Michael Thompson',
    team: 'SF',
    receptions: 108,
    targets: 142,
    yards: 1456,
    touchdowns: 12,
    yardsPerCatch: 13.5,
    gamesPlayed: 17
  },
  {
    id: '2',
    name: 'DeAndre Wilson',
    team: 'KC',
    receptions: 95,
    targets: 128,
    yards: 1289,
    touchdowns: 9,
    yardsPerCatch: 13.6,
    gamesPlayed: 16
  },
  {
    id: '3',
    name: 'Justin Martinez',
    team: 'DAL',
    receptions: 92,
    targets: 135,
    yards: 1198,
    touchdowns: 8,
    yardsPerCatch: 13.0,
    gamesPlayed: 17
  },
  {
    id: '4',
    name: 'Brandon Cooper',
    team: 'BUF',
    receptions: 88,
    targets: 122,
    yards: 1167,
    touchdowns: 7,
    yardsPerCatch: 13.3,
    gamesPlayed: 15
  },
  {
    id: '5',
    name: 'Marcus Johnson',
    team: 'PHI',
    receptions: 85,
    targets: 118,
    yards: 1134,
    touchdowns: 6,
    yardsPerCatch: 13.3,
    gamesPlayed: 16
  },
  {
    id: '6',
    name: 'Chris Rodriguez',
    team: 'MIA',
    receptions: 82,
    targets: 115,
    yards: 1089,
    touchdowns: 8,
    yardsPerCatch: 13.3,
    gamesPlayed: 17
  },
  {
    id: '7',
    name: 'Tyler Washington',
    team: 'CIN',
    receptions: 79,
    targets: 112,
    yards: 1045,
    touchdowns: 5,
    yardsPerCatch: 13.2,
    gamesPlayed: 15
  },
  {
    id: '8',
    name: 'David Anderson',
    team: 'LAR',
    receptions: 76,
    targets: 108,
    yards: 987,
    touchdowns: 6,
    yardsPerCatch: 13.0,
    gamesPlayed: 16
  },
  {
    id: '9',
    name: 'Robert Taylor',
    team: 'GB',
    receptions: 72,
    targets: 105,
    yards: 956,
    touchdowns: 5,
    yardsPerCatch: 13.3,
    gamesPlayed: 14
  },
  {
    id: '10',
    name: 'Kevin Mitchell',
    team: 'BAL',
    receptions: 70,
    targets: 98,
    yards: 934,
    touchdowns: 4,
    yardsPerCatch: 13.3,
    gamesPlayed: 15
  },
  {
    id: '11',
    name: 'Eric Williams',
    team: 'SEA',
    receptions: 68,
    targets: 95,
    yards: 892,
    touchdowns: 5,
    yardsPerCatch: 13.1,
    gamesPlayed: 16
  },
  {
    id: '12',
    name: 'Anthony Harris',
    team: 'MIN',
    receptions: 65,
    targets: 92,
    yards: 867,
    touchdowns: 4,
    yardsPerCatch: 13.3,
    gamesPlayed: 15
  },
  {
    id: '13',
    name: 'James Wilson',
    team: 'DET',
    receptions: 63,
    targets: 89,
    yards: 845,
    touchdowns: 3,
    yardsPerCatch: 13.4,
    gamesPlayed: 14
  },
  {
    id: '14',
    name: 'Samuel Brown',
    team: 'NO',
    receptions: 61,
    targets: 87,
    yards: 823,
    touchdowns: 4,
    yardsPerCatch: 13.5,
    gamesPlayed: 16
  },
  {
    id: '15',
    name: 'Daniel Lee',
    team: 'ARI',
    receptions: 59,
    targets: 84,
    yards: 798,
    touchdowns: 3,
    yardsPerCatch: 13.5,
    gamesPlayed: 15
  },
  {
    id: '16',
    name: 'Michael Davis',
    team: 'LAC',
    receptions: 57,
    targets: 82,
    yards: 776,
    touchdowns: 4,
    yardsPerCatch: 13.6,
    gamesPlayed: 14
  },
  {
    id: '17',
    name: 'Christopher White',
    team: 'HOU',
    receptions: 54,
    targets: 79,
    yards: 745,
    touchdowns: 3,
    yardsPerCatch: 13.8,
    gamesPlayed: 15
  },
  {
    id: '18',
    name: 'Thomas Martin',
    team: 'IND',
    receptions: 52,
    targets: 76,
    yards: 723,
    touchdowns: 2,
    yardsPerCatch: 13.9,
    gamesPlayed: 16
  },
  {
    id: '19',
    name: 'Joseph Clark',
    team: 'TB',
    receptions: 50,
    targets: 73,
    yards: 698,
    touchdowns: 3,
    yardsPerCatch: 14.0,
    gamesPlayed: 15
  },
  {
    id: '20',
    name: 'William Moore',
    team: 'TEN',
    receptions: 48,
    targets: 71,
    yards: 675,
    touchdowns: 2,
    yardsPerCatch: 14.1,
    gamesPlayed: 14
  }
];