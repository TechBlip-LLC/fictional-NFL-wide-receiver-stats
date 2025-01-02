interface TableHeaderProps {
  onSort: (key: string) => void;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
}

export function TableHeader({ onSort, sortKey, sortDirection }: TableHeaderProps) {
  const headers = [
    { key: 'name', label: 'Player' },
    { key: 'receptions', label: 'REC' },
    { key: 'targets', label: 'TGT' },
    { key: 'yards', label: 'YDS' },
    { key: 'touchdowns', label: 'TD' },
    { key: 'yardsPerCatch', label: 'YPC' },
    { key: 'gamesPlayed', label: 'GP' },
    { key: 'actions', label: '' }, // Added for compare button column
  ];

  return (
    <tr className="bg-white border-b border-gray-100">
      {headers.map((header) => (
        <th
          key={header.key}
          onClick={() => header.key !== 'actions' && onSort(header.key)}
          className={`
            px-6 py-4 text-left text-sm font-semibold text-gray-600 
            ${header.key !== 'actions' ? 'cursor-pointer hover:bg-gray-50' : ''} 
            transition-colors
            ${sortKey === header.key ? 'text-blue-600' : ''}
          `}
        >
          <div className="flex items-center space-x-1">
            <span>{header.label}</span>
            {sortKey === header.key && (
              <span className="ml-1 text-blue-600">
                {sortDirection === 'asc' ? '↑' : '↓'}
              </span>
            )}
          </div>
        </th>
      ))}
    </tr>
  );
}