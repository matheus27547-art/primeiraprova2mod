import React from 'react';

const Input = (props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <label htmlFor={props.id}>{props.label}</label>
      <input 
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;