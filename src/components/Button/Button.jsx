import React from 'react';
import './Button-style.scss';
const Button = props =>{
    const {variant ='primary', children, ...rest} = props;
    return(<button className={`button ${variant}`}>{children}</button>)
}

export default Button;