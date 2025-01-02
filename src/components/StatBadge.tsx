import { type ReactNode } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatBadgeProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  description: string;
  trend?: 'positive' | 'negative' | 'neutral';
}

export function StatBadge({ icon, label, value, description, trend }: StatBadgeProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'positive':
        return 'text-emerald-600 bg-emerald-50';
      case 'negative':
        return 'text-rose-600 bg-rose-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'positive':
        return <TrendingUp className="w-3 h-3" />;
      case 'negative':
        return <TrendingDown className="w-3 h-3" />;
      default:
        return <Minus className="w-3 h-3" />;
    }
  };

  return (
    <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
      <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-500">{label}</div>
        <div className="text-lg font-semibold text-gray-900">{value}</div>
        <div className="text-xs text-gray-500 mt-0.5">{description}</div>
      </div>
      {trend && (
        <div className={`p-1.5 rounded-full ${getTrendColor()}`}>
          {getTrendIcon()}
        </div>
      )}
    </div>
  );
}