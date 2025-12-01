import React from 'react'

type CodeBlockProps = {
  children: React.ReactNode
  title?: string
  language?: string
}

export function CodeBlock({ children, title, language }: CodeBlockProps) {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {title && (
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-mono text-gray-700 dark:text-gray-300 flex items-center justify-between">
          <span>{title}</span>
          {language && (
            <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
              {language}
            </span>
          )}
        </div>
      )}
      <div className="bg-gray-50 dark:bg-gray-900 p-4 overflow-x-auto">
        {children}
      </div>
    </div>
  )
}