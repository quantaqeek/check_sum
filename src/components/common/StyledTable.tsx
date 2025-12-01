import React from 'react';

interface StyledTableProps {
  children: React.ReactNode;
  caption?: string;

}

export function StyledTable({ 
  children, 
  caption, 

}: StyledTableProps) {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      {caption && (
        <div className="bg-gray-50 dark:bg-gray-800 px-6 py-3 border-b border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {caption}
          </p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          {children}
        </table>
      </div>
    </div>
  );
}

// You can also create a wrapper that automatically styles markdown tables
export function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

// CSS styles to add to your global CSS or tailwind config
// Add this to your globals.css or create a table.css file:

/*
.prose table {
  @apply w-full text-sm border-collapse;
}

.prose thead {
  @apply bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700;
}

.prose thead th {
  @apply px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider border-b-2 border-gray-300 dark:border-gray-600;
}

.prose tbody tr {
  @apply border-b border-gray-200 dark:border-gray-700 transition-colors duration-150;
}

.prose tbody tr:hover {
  @apply bg-blue-50/50 dark:bg-gray-800/50;
}

.prose tbody tr:nth-child(odd) {
  @apply bg-gray-50/30 dark:bg-gray-900/30;
}

.prose tbody td {
  @apply px-6 py-4 text-gray-700 dark:text-gray-300;
}

.prose tbody td:first-child {
  @apply font-semibold text-gray-900 dark:text-gray-100;
}

.prose tbody tr:last-child {
  @apply border-b-0;
}
*/