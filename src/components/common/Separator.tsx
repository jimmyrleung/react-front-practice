import React from 'react';
import './css/Separator.css';

interface IOwnProps {
  styles?: React.CSSProperties;
  className?: string;
  text?: string;
}

export const Separator: React.FC<IOwnProps> = ({ text }) => {
  return (
    <>
      <span className='common-separator'></span>
      {text && <span className='common-separator-character'>{text}</span>}
      <span className='common-separator'></span>
    </>
  );
}
