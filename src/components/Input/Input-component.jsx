import React from 'react';
import './Input-style.scss';
const Input = props =>{
    const {size ='small', children, ...rest} = props;
    return(<input className={`input ${size}`}>{children}</input>)
}

export default Input;