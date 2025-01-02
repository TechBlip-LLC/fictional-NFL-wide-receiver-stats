import { useState } from 'react';
import { ChevronDown, ChevronUp, Target } from 'lucide-react';
import { type Receiver } from '../data/receivers';
import { PlayerDetails } from './PlayerDetails';
import { AdvancedStats } from './AdvancedStats';

interface PlayerRowProps {
  receiver: Receiver;
  index: number;
  onCompare: (receiver: Receiver) => void;
  isSelected?: boolean;
}

export function PlayerRow({ receiver, index, onCompare, isSelected }: PlayerRowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const catchRate = ((receiver.receptions / receiver.targets) * 100).toFixed(1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const handleRowClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button')) {
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <tr 
        className={`hover:bg-gray-50/80 transition-colors group cursor-pointer
          ${isSelected ? 'bg-blue-50/50' : ''}`}
        onClick={handleRowClick}
        onKeyDown={handleKeyDown}
        style={{ animationDelay: `${index * 50}ms` }}
        role="row"
        aria-expanded={isOpen}
        tabIndex={0}
        aria-label={`${receiver.name} - ${receiver.team}`}
      >
        <td className="px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 shadow-sm">
              {receiver.team}
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-gray-900">{receiver.name}</div>
              <div className="text-xs text-gray-500 flex items-center mt-0.5">
                <Target className="w-3 h-3 mr-1" aria-hidden="true" />
                <span aria-label={`Catch rate: ${catchRate}%`}>{catchRate}% catch rate</span>
              </div>
            </div>
            <div className="ml-2 text-gray-400 hover:text-gray-600 transition-colors" aria-hidden="true">
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="font-medium text-gray-900" aria-label={`${receiver.receptions} receptions`}>
            {receiver.receptions}
          </div>
          <div className="text-xs text-gray-500">receptions</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-gray-600" aria-label={`${receiver.targets} targets`}>
            {receiver.targets}
          </div>
          <div className="text-xs text-gray-500">targets</div>
        </td>
        <td className="px-6 py-4">
          <div className="font-medium text-gray-900" aria-label={`${receiver.yards} total yards`}>
            {receiver.yards.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">total yards</div>
        </td>
        <td className="px-6 py-4">
          <div className="inline-flex items-center space-x-1">
            <span className="font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full" 
              aria-label={`${receiver.touchdowns} touchdowns`}>
              {receiver.touchdowns}
            </span>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-gray-900" aria-label={`${receiver.yardsPerCatch} yards per catch`}>
            {receiver.yardsPerCatch}
          </div>
          <div className="text-xs text-gray-500">per catch</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-gray-600" aria-label={`${receiver.gamesPlayed} games played`}>
            {receiver.gamesPlayed}
          </div>
          <div className="text-xs text-gray-500">games</div>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCompare(receiver);
            }}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
              ${isSelected 
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'}`}
            aria-pressed={isSelected}
            aria-label={`${isSelected ? 'Remove' : 'Add'} ${receiver.name} from comparison`}
          >
            {isSelected ? 'Selected' : 'Compare'}
          </button>
        </td>
      </tr>
      {isOpen && (
        <tr className="bg-gray-50/80">
          <td colSpan={8} className="px-6 py-4 border-t border-gray-100">
            <div className="space-y-6">
              <PlayerDetails receiver={receiver} />
              <AdvancedStats receiver={receiver} />
            </div>
          </td>
        </tr>
      )}
    </>
  );
}