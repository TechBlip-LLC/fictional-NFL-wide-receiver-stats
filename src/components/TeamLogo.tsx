import { type Team } from '../data/teams';
import { getTeamIcon } from '../utils/teamIcons';

interface TeamLogoProps {
  team: Team;
  className?: string;
}

export function TeamLogo({ team, className = '' }: TeamLogoProps) {
  const Icon = getTeamIcon(team);
  return <Icon className={`w-6 h-6 ${className}`} />;
}