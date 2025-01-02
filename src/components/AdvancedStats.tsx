import { type Receiver } from '../data/receivers';
import { BarChart2, Target, Zap } from 'lucide-react';

interface AdvancedStatsProps {
  receiver: Receiver;
}

export function AdvancedStats({ receiver }: AdvancedStatsProps) {
  const catchRate = ((receiver.receptions / receiver.targets) * 100).toFixed(1);
  const yardsPerGame = (receiver.yards / receiver.gamesPlayed).toFixed(1);
  const touchdownRate = ((receiver.touchdowns / receiver.receptions) * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Catch Rate</span>
          <Target className="w-4 h-4 text-blue-500" />
        </div>
        <div className="text-2xl font-bold text-gray-900">{catchRate}%</div>
        <div className="mt-1 text-xs text-gray-500">
          {receiver.receptions} of {receiver.targets} targets
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Yards/Game</span>
          <Zap className="w-4 h-4 text-emerald-500" />
        </div>
        <div className="text-2xl font-bold text-gray-900">{yardsPerGame}</div>
        <div className="mt-1 text-xs text-gray-500">
          {receiver.yards.toLocaleString()} total yards
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">TD Rate</span>
          <BarChart2 className="w-4 h-4 text-purple-500" />
        </div>
        <div className="text-2xl font-bold text-gray-900">{touchdownRate}%</div>
        <div className="mt-1 text-xs text-gray-500">
          {receiver.touchdowns} touchdowns
        </div>
      </div>
    </div>
  );
}