import React from 'react';
import './css/common.css';
import './css/Input.css';

interface IOwnProps {
  styles?: React.CSSProperties;
  className?: string;
  type: string;
  id?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<IOwnProps> = (props) => {
  const classes = `common-input ${props.className || ''} ${props.fullWidth ? 'full-width' : ''}`;

  return (
    <div className='form-row'>
      <input style={props.styles || {}} className={classes} id={props.id || ''} type={props.type} />
    </div>
  );
}
