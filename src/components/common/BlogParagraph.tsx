import React from 'react'

type BlogParagraphProps = {
  children: React.ReactNode
}

export function BlogParagraph({ children }: BlogParagraphProps) {
  return (
    <div className="text-xl md:text-2xl font-serif mb-4">
      {children}
    </div>
  )
}