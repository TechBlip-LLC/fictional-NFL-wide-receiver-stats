import { Search } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function PageHeader({ title, subtitle, searchValue, onSearchChange }: PageHeaderProps) {
  return (
    <div className="relative pb-4 sm:pb-6">
      <div className="flex flex-col space-y-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-gray-500">{subtitle}</p>
        </div>
        <div className="relative w-full sm:max-w-xs">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search players or teams..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-white border border-gray-200 
              focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  );
}