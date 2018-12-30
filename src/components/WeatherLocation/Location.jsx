import React from 'react';
import * as styles from './styles.css';

const Location = ({ city }) => {
    return <div className={styles.Location}> { city } </div>
}

export default Location;