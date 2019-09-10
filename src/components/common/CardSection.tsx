import React from 'react';
import './css/Card.css';

interface IOwnProps {
  styles?: React.CSSProperties;
  className?: string;
  wrapped?: boolean;
  fullWidth?: boolean;
}

export const CardSection: React.FC<IOwnProps> = (props) => {
  const className =
    `${props.className || ''} ${props.fullWidth ? 'full-width' : ''} ${props.wrapped ? 'flex-wrapped' : ''}`;

  return (
    <div style={props.styles || {}} className={className}>
      {props.children}
    </div>
  );
}
