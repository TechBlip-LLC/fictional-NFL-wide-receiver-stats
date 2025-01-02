import { 
  Trophy,
  Star,
  Bird,
  Fish,
  Lion,
  Shield,
  Plane,
  Ship,
  Flame,
  Zap,
  Crown
} from 'lucide-react';
import { type Team } from '../data/teams';

const teamIcons: Record<Team, React.ComponentType<any>> = {
  SF: Trophy,
  KC: Crown,
  DAL: Star,
  BUF: Shield,
  PHI: Bird,
  MIA: Fish,
  CIN: Lion,
  LAR: Crown,
  GB: Shield,
  BAL: Bird,
  ARI: Bird,
  ATL: Bird,
  CAR: Lion,
  CHI: Shield,
  CLE: Shield,
  DEN: Flame,
  DET: Lion,
  HOU: Star,
  IND: Zap,
  JAX: Lion,
  LAC: Shield,
  LV: Shield,
  MIN: Ship,
  NE: Star,
  NO: Star,
  NYG: Star,
  NYJ: Plane,
  PIT: Star,
  SEA: Bird,
  TB: Ship,
  TEN: Shield,
  WAS: Star
};

export function getTeamIcon(team: Team) {
  return teamIcons[team];
}