import React from 'react';
import './css/common.css';
import './css/Button.css';

interface IOwnProps {
  styles?: React.CSSProperties;
  className?: string;
  wrapped?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  color?: string;
  onClick?(): void;
}

export const Button: React.FC<IOwnProps> = (props) => {
  const className = `common-button ${props.color || 'default'} ${props.className || ''} ${props.fullWidth ? 'full-width' : ''}`;

  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <button onClick={onClick} disabled={props.disabled || false} className={className}>
      {props.children}
    </button >
  );
}
