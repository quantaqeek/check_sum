import Image from 'next/image'
import React from 'react'

type ImageWithCaptionProps = {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export function ImageWithCaption({ 
  src, 
  alt, 
  caption, 
  width = 300, 
  height = 300 
}: ImageWithCaptionProps) {
  return (
    <figure className="my-8 flex w-full items-center justify-center flex-col">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg shadow-lg w-full grayscale"
      />
      {caption && (
        <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}