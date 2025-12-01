import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/common/Callout'
import { CodeBlock } from '@/components/common/CodeBlock'
import { TwoColumnLayout } from './components/common/TwoColumnLayout'
import { FirstParagraph } from './components/common/FirstParagraph'
import { ImageWithCaption } from './components/common/ImageWithCaption'
import { StyledTable } from './components/common/StyledTable'

const components: MDXComponents = {
  // Make custom components available
  Callout,
  CodeBlock,
  TwoColumnLayout,
  FirstParagraph,
  ImageWithCaption,
  StyledTable,
  
  // Automatically wrap all markdown tables with styling
  table: ({ children, ...props }) => (
    <div className="table-wrapper my-8 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  
  // Style table headers
  thead: ({ children, ...props }) => (
    <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700" {...props}>
      {children}
    </thead>
  ),
  
  // Style table header cells
  th: ({ children, ...props }) => (
    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider border-b-2 border-gray-300 dark:border-gray-600" {...props}>
      {children}
    </th>
  ),
  
  // Style table body
  tbody: ({ children, ...props }) => (
    <tbody {...props}>
      {children}
    </tbody>
  ),
  
  // Style table rows with hover and striping
  tr: ({ children, ...props }) => (
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50/50 dark:hover:bg-gray-800/50 transition-colors duration-150 odd:bg-gray-50/30 dark:odd:bg-gray-900/30 last:border-b-0" {...props}>
      {children}
    </tr>
  ),
  
  // Style table data cells
  td: ({ children, ...props }) => (
    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 first:font-semibold first:text-gray-900 dark:first:text-gray-100" {...props}>
      {children}
    </td>
  ),
  
  // Style h2 with borders
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold my-8 py-4 border-t-2 border-b-2 border-gray-800 dark:border-gray-300">
      {children}
    </h2>
  ),
  
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  ),
  
  // Custom blockquote
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 py-4 rounded-r">
      {children}
    </blockquote>
  ),
  
  // Better code blocks
  pre: ({ children }) => (
    <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 rounded-lg p-4 overflow-x-auto my-6 shadow-lg">
      {children}
    </pre>
  ),
  
  code: ({ children }) => (
    <code className="bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 px-2 py-1 rounded text-sm font-mono">
      {children}
    </code>
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}