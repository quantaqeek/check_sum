// components/FadingLineTitle.tsx
import React from 'react';

interface FadingLineTitleProps {
  title: string;
  className?: string;
  lineColor?: string;
  textColor?: string;
}

const FadingLineTitle: React.FC<FadingLineTitleProps> = ({
  title,
  className = '',
  lineColor = 'border-gray-300',
  textColor = 'text-gray-900'
}) => {
  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      {/* Left fading line */}
      <div 
        className={`flex-grow h-px ${lineColor} bg-gradient-to-r from-transparent to-current`}
      />
      
      {/* Title text */}
      <span className={`px-4 text-3xl font-anton font-bold  whitespace-nowrap ${textColor}`}>
        {title}
      </span>
      
      {/* Right fading line */}
      <div 
        className={`flex-grow h-px ${lineColor} bg-gradient-to-l from-transparent to-current`}
      />
    </div>
  );
};

export default FadingLineTitle;