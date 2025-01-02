import { Loader } from 'lucide-react';

export function LoadingState() {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader className="w-6 h-6 text-blue-600 animate-spin" />
      <span className="ml-2 text-gray-600">Loading stats...</span>
    </div>
  );
}