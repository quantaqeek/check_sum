

type TextProps = {
  children: React.ReactNode
}

export function HighlightedText ({ children }:TextProps) {
  return (
    <span className="font-bold text-BrandPrimary-dark dark:text-BrandFancy-dark underline">
     {children}
    </span>
  )
}

