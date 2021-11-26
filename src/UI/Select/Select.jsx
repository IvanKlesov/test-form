import React from 'react';
import styles from './Select.module.css';

export const Select = ({options, id, defaultValue, onChange}) => {
    return (
        <div className={styles.selectDiv}>
            <select id={id} onChange={onChange} className={styles.select}>
                <option  value="">{defaultValue}</option>
                    {options.map((o,i) => 
                        <option key={o[i]} value={o}>
                            {o}                           
                        </option>
                    )}
            </select>
            <span className={styles.focus}></span>
        </div>
    )
};