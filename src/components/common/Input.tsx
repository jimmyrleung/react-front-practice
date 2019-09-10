import React from 'react';
import './css/common.css';
import './css/Input.css';

interface IOwnProps {
  styles?: React.CSSProperties;
  className?: string;
  type: string;
  id?: string;
  fullWidth?: boolean;
  onChange?(value: any): void;
  value?: string | number | string[];
  onKeyPress?(e: React.KeyboardEvent<HTMLInputElement>): void;
}

export const Input: React.FC<IOwnProps> = (props) => {
  const classes = `common-input ${props.className || ''} ${props.fullWidth ? 'full-width' : ''}`;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.onKeyPress) {
      props.onKeyPress(e);
    }
  }

  return (
    <div className='form-row'>
      <input
        id={props.id || ''}
        type={props.type}
        value={props.value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        style={props.styles || {}} className={classes}
      />
    </div>
  );
}
