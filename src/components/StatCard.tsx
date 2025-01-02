import { type ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: number;
  variant: 'purple' | 'blue' | 'emerald' | 'orange';
}

export function StatCard({ title, value, icon, trend, variant }: StatCardProps) {
  const variants = {
    purple: {
      gradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
      icon: 'text-purple-700 bg-purple-50 ring-purple-100',
      trend: 'text-purple-700 bg-purple-50/80'
    },
    blue: {
      gradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
      icon: 'text-blue-700 bg-blue-50 ring-blue-100',
      trend: 'text-blue-700 bg-blue-50/80'
    },
    emerald: {
      gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      icon: 'text-emerald-700 bg-emerald-50 ring-emerald-100',
      trend: 'text-emerald-700 bg-emerald-50/80'
    },
    orange: {
      gradient: 'from-orange-500/10 via-orange-500/5 to-transparent',
      icon: 'text-orange-700 bg-orange-50 ring-orange-100',
      trend: 'text-orange-700 bg-orange-50/80'
    }
  };

  return (
    <div className="relative group">
      {/* Gradient background */}
      <div 
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${variants[variant].gradient} 
          opacity-50 group-hover:opacity-70 transition-all duration-300 blur-xl group-hover:blur-2xl`} 
      />
      
      {/* Card content */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/50 
        shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-gray-600">{title}</div>
          <div className={`p-2.5 rounded-xl ${variants[variant].icon} ring-1 ring-inset 
            transform group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-3xl font-bold text-gray-900">{value}</div>
          {trend !== undefined && (
            <div className="flex items-center space-x-1">
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium
                ${trend >= 0 ? 'text-emerald-700 bg-emerald-50' : 'text-rose-700 bg-rose-50'}`}>
                {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
              </span>
              <span className="text-sm text-gray-500">vs last week</span>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-px rounded-2xl border border-gray-100/20 pointer-events-none" />
        <div className={`absolute -inset-0.5 rounded-2xl ${variants[variant].gradient} opacity-0 
          group-hover:opacity-10 transition-opacity duration-300 blur-sm`} />
      </div>
    </div>
  );
}