import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';

const Location = ({ city }) => {
    return <div className={styles.Location}> { city } </div>
}

Location.propTypes = {
    city: PropTypes.string
}

export default Location;