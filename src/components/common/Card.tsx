import React from 'react';
import './css/Card.css';

interface IOwnProps {
  styles?: React.CSSProperties;
  className?: string;
}

export const Card: React.FC<IOwnProps> = ({ children, className, styles }) => {
  return (
    <div style={styles || {}} className={`common-card ${className || ''}`}>
      {children}
    </div>
  );
}
