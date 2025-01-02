import { type Receiver } from '../data/receivers';
import { TableHeader } from './TableHeader';
import { PlayerRow } from './PlayerRow';

interface StatsTableProps {
  receivers: Receiver[];
  onSort: (key: string) => void;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  onCompare: (receiver: Receiver) => void;
  selectedPlayers?: Receiver[];
}

export function StatsTable({ 
  receivers, 
  onSort, 
  sortKey, 
  sortDirection, 
  onCompare,
  selectedPlayers = []
}: StatsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead>
            <TableHeader 
              onSort={onSort}
              sortKey={sortKey}
              sortDirection={sortDirection}
            />
          </thead>
          <tbody className="divide-y divide-gray-100">
            {receivers.map((receiver, index) => (
              <PlayerRow 
                key={receiver.id} 
                receiver={receiver} 
                index={index}
                onCompare={onCompare}
                isSelected={selectedPlayers.some(p => p.id === receiver.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}