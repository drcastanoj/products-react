import React from 'react';
import PropTypes from 'prop-types';
import { FontIcon } from 'react-md';

function Icon({ icon }) {
    return (<FontIcon>{icon}</FontIcon>)
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired
};

export default Icon;
