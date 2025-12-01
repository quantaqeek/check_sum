import React from 'react'

type FirstParagraphProps = {
  children: React.ReactNode
}

export function FirstParagraph({ children }: FirstParagraphProps) {
  return (
    <div className="text-xl md:text-2xl font-serif leading-relaxed mb-4 first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
      {children}
    </div>
  )
}