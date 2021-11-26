import React from 'react';
import styles from './Button.module.css';

export const Button = ({children, ...props}) => {
   return (
       <button onClick={props.onClick} className={styles.btn}>{children}</button>
   )
}