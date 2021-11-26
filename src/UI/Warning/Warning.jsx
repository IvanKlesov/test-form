import React from 'react';
import styles from './Warning.module.css';

export const Warning = ({children, name}) => {    
        switch(name) {
            case 'text': return <div className={styles.warningText}>{children}</div>;
            case 'checkbox': return <div className={styles.warningCheckbox}>{children}</div>;
            case 'select': return <div className={styles.warningSelect}>{children}</div>;
            default: return <></>;
        }    

};