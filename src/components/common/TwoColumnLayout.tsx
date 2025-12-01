import React from 'react'

type TwoColumnLayoutProps = {
  children: React.ReactNode
}

export function TwoColumnLayout({ children }: TwoColumnLayoutProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 my-8">
      {children}
    </div>
  )
}