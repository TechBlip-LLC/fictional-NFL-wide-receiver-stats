import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({ message = 'No results found' }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg border border-gray-100">
      <SearchX className="w-12 h-12 text-gray-400 mb-3" />
      <p className="text-gray-600 text-center">{message}</p>
    </div>
  );
}