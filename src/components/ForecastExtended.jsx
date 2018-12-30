import React from 'react';
import * as styles from './styles.css';

const ForecastExtended = ({ city }) => {
    return (
        <div className={styles.ForecastExtended}> 
            { city }
        </div>
    )
}

export default ForecastExtended;