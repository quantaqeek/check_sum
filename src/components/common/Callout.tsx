import React from 'react'

type CalloutProps = {
  children: React.ReactNode
  type?: 'info' | 'warning' | 'success' | 'error'
  title?: string
}

export function Callout({ children, type = 'info', title }: CalloutProps) {
  const styles = {
    info: {
      container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-900 dark:text-blue-100',
      title: 'text-blue-900 dark:text-blue-100'
    },
    warning: {
      container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 text-yellow-900 dark:text-yellow-100',
      title: 'text-yellow-900 dark:text-yellow-100'
    },
    success: {
      container: 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-900 dark:text-green-100',
      title: 'text-green-900 dark:text-green-100'
    },
    error: {
      container: 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-900 dark:text-red-100',
      title: 'text-red-900 dark:text-red-100'
    }
  }

  return (
    <div className={`border-l-4 p-4 my-6 rounded-r-lg ${styles[type].container}`}>
      {title && <div className={`font-bold mb-2 ${styles[type].title}`}>{title}</div>}
      <div>{children}</div>
    </div>
  )
}