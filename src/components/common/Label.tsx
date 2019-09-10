import React from 'react';
import './css/Label.css';

interface IOwnProps {
  styles?: React.CSSProperties;
  className?: string;
  text: string;
  labelFor?: string;
}

export const Label: React.FC<IOwnProps> = ({ styles, className, text, labelFor }) => {
  return (
    <div className='form-row'>
      <label
        style={styles || {}}
        className={`common-label ${className || ''}`}
        htmlFor={labelFor || ''}>
        {text}
      </label>
    </div>
  );
}
