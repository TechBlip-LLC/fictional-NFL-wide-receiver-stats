import { useState, useMemo, Suspense } from 'react';
import { Trophy, Target, Zap, Users } from 'lucide-react';
import { receivers } from './data/receivers';
import { StatsTable } from './components/StatsTable';
import { PageHeader } from './components/PageHeader';
import { StatCard } from './components/StatCard';
import { Pagination } from './components/Pagination';
import { PlayerComparison } from './components/PlayerComparison';
import { LoadingState } from './components/LoadingState';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';
import { usePagination } from './hooks/usePagination';
import { type Receiver } from './data/receivers';

export default function App() {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('yards');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedPlayers, setSelectedPlayers] = useState<Receiver[]>([]);

  const filteredReceivers = useMemo(() => {
    return receivers
      .filter(receiver => 
        receiver.name.toLowerCase().includes(search.toLowerCase()) ||
        receiver.team.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        const aValue = a[sortKey as keyof typeof a];
        const bValue = b[sortKey as keyof typeof b];
        const modifier = sortDirection === 'asc' ? 1 : -1;
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return aValue.localeCompare(bValue) * modifier;
        }
        return ((aValue as number) - (bValue as number)) * modifier;
      });
  }, [receivers, search, sortKey, sortDirection]);

  const { currentPage, totalPages, paginatedItems, handlePageChange } = usePagination(filteredReceivers);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('desc');
    }
  };

  const handleCompare = (receiver: Receiver) => {
    setSelectedPlayers(prev => {
      if (prev.some(p => p.id === receiver.id)) {
        return prev.filter(p => p.id !== receiver.id);
      }
      if (prev.length >= 2) {
        return [prev[1], receiver];
      }
      return [...prev, receiver];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <PageHeader 
            title="NFL Wide Receiver Stats" 
            subtitle="Track the performance of top NFL receivers in the 2023-24 season"
            searchValue={search}
            onSearchChange={setSearch}
          />
          
          <Suspense fallback={<LoadingState />}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Total Yards"
                value={filteredReceivers.reduce((sum, r) => sum + r.yards, 0).toLocaleString()}
                icon={<Trophy className="w-5 h-5 sm:w-6 sm:h-6" />}
                trend={5.2}
                variant="purple"
              />
              <StatCard
                title="Touchdowns"
                value={filteredReceivers.reduce((sum, r) => sum + r.touchdowns, 0)}
                icon={<Target className="w-5 h-5 sm:w-6 sm:h-6" />}
                trend={-2.1}
                variant="orange"
              />
              <StatCard
                title="Avg YPC"
                value={(filteredReceivers.reduce((sum, r) => sum + r.yardsPerCatch, 0) / filteredReceivers.length).toFixed(1)}
                icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6" />}
                trend={1.8}
                variant="emerald"
              />
              <StatCard
                title="Receptions"
                value={filteredReceivers.reduce((sum, r) => sum + r.receptions, 0)}
                icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
                trend={3.4}
                variant="blue"
              />
            </div>

            <div className="-mx-4 sm:mx-0">
              {filteredReceivers.length > 0 ? (
                <StatsTable 
                  receivers={paginatedItems}
                  onSort={handleSort}
                  sortKey={sortKey}
                  sortDirection={sortDirection}
                  onCompare={handleCompare}
                  selectedPlayers={selectedPlayers}
                />
              ) : (
                <EmptyState message="No receivers found matching your search" />
              )}
            </div>

            {filteredReceivers.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </Suspense>
        </div>
        <Footer />
      </div>

      {selectedPlayers.length === 2 && (
        <PlayerComparison 
          players={selectedPlayers}
          onClose={() => setSelectedPlayers([])}
        />
      )}
    </div>
  );
}