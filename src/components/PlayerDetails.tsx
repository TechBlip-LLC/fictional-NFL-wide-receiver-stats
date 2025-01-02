import { BarChart, Award, TrendingUp, Target, Calendar, Zap } from 'lucide-react';
import { type Receiver } from '../data/receivers';
import { StatBadge } from './StatBadge';

interface PlayerDetailsProps {
  receiver: Receiver;
}

export function PlayerDetails({ receiver }: PlayerDetailsProps) {
  const catchRate = ((receiver.receptions / receiver.targets) * 100).toFixed(1);
  const yardsPerGame = (receiver.yards / receiver.gamesPlayed).toFixed(1);
  const touchdownRate = ((receiver.touchdowns / receiver.receptions) * 100).toFixed(1);
  const targetShare = ((receiver.targets / (receiver.gamesPlayed * 35)) * 100).toFixed(1);

  return (
    <div className="animate-fadeIn space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatBadge
          icon={<Target className="w-4 h-4" />}
          label="Catch Rate"
          value={`${catchRate}%`}
          description={`${receiver.receptions} catches on ${receiver.targets} targets`}
          trend={catchRate > 65 ? 'positive' : catchRate < 55 ? 'negative' : 'neutral'}
        />
        <StatBadge
          icon={<Zap className="w-4 h-4" />}
          label="Yards per Game"
          value={yardsPerGame}
          description={`${receiver.yards.toLocaleString()} total yards`}
          trend={yardsPerGame > 75 ? 'positive' : yardsPerGame < 50 ? 'negative' : 'neutral'}
        />
        <StatBadge
          icon={<Award className="w-4 h-4" />}
          label="TD Rate"
          value={`${touchdownRate}%`}
          description={`${receiver.touchdowns} total touchdowns`}
          trend={touchdownRate > 8 ? 'positive' : touchdownRate < 4 ? 'negative' : 'neutral'}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatBadge
          icon={<BarChart className="w-4 h-4" />}
          label="Target Share"
          value={`${targetShare}%`}
          description="Percentage of team targets"
          trend={targetShare > 25 ? 'positive' : targetShare < 15 ? 'negative' : 'neutral'}
        />
        <StatBadge
          icon={<TrendingUp className="w-4 h-4" />}
          label="Yards Per Catch"
          value={receiver.yardsPerCatch.toFixed(1)}
          description="Average yards per reception"
          trend={receiver.yardsPerCatch > 14 ? 'positive' : receiver.yardsPerCatch < 11 ? 'negative' : 'neutral'}
        />
        <StatBadge
          icon={<Calendar className="w-4 h-4" />}
          label="Games Played"
          value={receiver.gamesPlayed}
          description="Out of 17 regular season games"
          trend={receiver.gamesPlayed > 15 ? 'positive' : receiver.gamesPlayed < 14 ? 'negative' : 'neutral'}
        />
      </div>
    </div>
  );
}