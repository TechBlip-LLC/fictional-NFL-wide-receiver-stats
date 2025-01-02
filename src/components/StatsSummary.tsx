import { type ReactNode } from 'react';
import { StatCard } from './StatCard';
import { Trophy, Target, Zap, Users } from 'lucide-react';
import { type Receiver } from '../data/receivers';

interface StatsSummaryProps {
  receivers: Receiver[];
}

export function StatsSummary({ receivers }: StatsSummaryProps) {
  const totalYards = receivers.reduce((sum, r) => sum + r.yards, 0);
  const totalTouchdowns = receivers.reduce((sum, r) => sum + r.touchdowns, 0);
  const avgYardsPerCatch = (receivers.reduce((sum, r) => sum + r.yardsPerCatch, 0) / receivers.length).toFixed(1);
  const totalReceptions = receivers.reduce((sum, r) => sum + r.receptions, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Receiving Yards"
        value={totalYards.toLocaleString()}
        icon={<Trophy className="w-6 h-6" />}
        gradient="bg-gradient-to-br from-purple-600 to-blue-600"
      />
      <StatCard
        title="Total Touchdowns"
        value={totalTouchdowns}
        icon={<Target className="w-6 h-6" />}
        gradient="bg-gradient-to-br from-orange-600 to-pink-600"
      />
      <StatCard
        title="Average YPC"
        value={avgYardsPerCatch}
        icon={<Zap className="w-6 h-6" />}
        gradient="bg-gradient-to-br from-green-600 to-teal-600"
      />
      <StatCard
        title="Total Receptions"
        value={totalReceptions}
        icon={<Users className="w-6 h-6" />}
        gradient="bg-gradient-to-br from-blue-600 to-cyan-600"
      />
    </div>
  );
}