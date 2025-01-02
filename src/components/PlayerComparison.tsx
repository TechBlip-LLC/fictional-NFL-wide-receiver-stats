import { X, Trophy, Target, Zap, BarChart2 } from 'lucide-react';
import { type Receiver } from '../data/receivers';

interface PlayerComparisonProps {
  players: Receiver[];
  onClose: () => void;
}

export function PlayerComparison({ players, onClose }: PlayerComparisonProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const stats = [
    { 
      key: 'receptions', 
      label: 'Receptions',
      icon: <Target className="w-4 h-4" aria-hidden="true" />,
      primaryColor: 'rgb(29, 78, 216)', // blue-700
      secondaryColor: 'rgb(147, 197, 253)' // blue-300
    },
    { 
      key: 'yards', 
      label: 'Total Yards',
      icon: <Trophy className="w-4 h-4" aria-hidden="true" />,
      primaryColor: 'rgb(126, 34, 206)', // purple-700
      secondaryColor: 'rgb(216, 180, 254)' // purple-300
    },
    { 
      key: 'touchdowns', 
      label: 'Touchdowns',
      icon: <Zap className="w-4 h-4" aria-hidden="true" />,
      primaryColor: 'rgb(4, 120, 87)', // emerald-700
      secondaryColor: 'rgb(110, 231, 183)' // emerald-300
    },
    { 
      key: 'yardsPerCatch', 
      label: 'Yards Per Catch',
      icon: <BarChart2 className="w-4 h-4" aria-hidden="true" />,
      primaryColor: 'rgb(194, 65, 12)', // orange-700
      secondaryColor: 'rgb(253, 186, 116)' // orange-300
    }
  ] as const;

  return (
    <div 
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="comparison-title"
      onKeyDown={handleKeyDown}
    >
      <div className="bg-white w-full sm:rounded-2xl shadow-2xl sm:max-w-2xl animate-slideUp sm:animate-fadeIn max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 id="comparison-title" className="text-xl sm:text-2xl font-bold text-gray-900">
              Player Comparison
            </h2>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close comparison"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="px-4 sm:px-6 py-4 bg-gray-50/50">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-sm sm:text-base">
            <div className="text-left">
              <div className="font-semibold text-gray-900">{players[0].name}</div>
              <div className="text-sm text-gray-500">{players[0].team}</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="px-3 py-1 rounded-full bg-gray-100 text-xs sm:text-sm font-medium text-gray-600">
                VS
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-900">{players[1].name}</div>
              <div className="text-sm text-gray-500">{players[1].team}</div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          {stats.map(stat => {
            const value1 = players[0][stat.key] as number;
            const value2 = players[1][stat.key] as number;
            const max = Math.max(value1, value2);
            const leader = value1 > value2 ? 'left' : value1 < value2 ? 'right' : null;

            return (
              <div key={stat.key} className="space-y-2">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="text-gray-600">{stat.icon}</div>
                  <span className="font-medium text-sm sm:text-base text-gray-700">{stat.label}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-2 text-sm sm:text-base">
                  <div 
                    className="text-left font-medium"
                    style={{ color: leader === 'left' ? stat.primaryColor : 'rgb(75, 85, 99)' }}
                  >
                    {value1.toLocaleString()}
                    {leader === 'left' && <span className="ml-1 text-xs">↑</span>}
                  </div>
                  <div className="text-center text-xs text-gray-400 uppercase tracking-wider hidden sm:block">
                    Comparison
                  </div>
                  <div 
                    className="text-right font-medium"
                    style={{ color: leader === 'right' ? stat.primaryColor : 'rgb(75, 85, 99)' }}
                  >
                    {value2.toLocaleString()}
                    {leader === 'right' && <span className="mr-1 text-xs">↑</span>}
                  </div>
                </div>
                
                <div className="relative h-5 sm:h-6 bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 flex justify-end">
                      <div 
                        className="h-full transition-all duration-500"
                        style={{ 
                          width: `${(value1 / max) * 100}%`,
                          backgroundColor: stat.primaryColor
                        }}
                      />
                    </div>
                    <div className="w-0.5 h-full bg-white z-10" />
                    <div className="w-1/2">
                      <div 
                        className="h-full transition-all duration-500"
                        style={{ 
                          width: `${(value2 / max) * 100}%`,
                          backgroundColor: stat.secondaryColor
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <div className="flex items-center gap-1">
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: stat.primaryColor }}
                    />
                    <span>{players[0].name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: stat.secondaryColor }}
                    />
                    <span>{players[1].name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}