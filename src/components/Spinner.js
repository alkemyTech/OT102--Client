import React from 'react'
import PropTypes from 'prop-types';

import { spinner } from './Spinner.module.css'

const Spinner = ({ size, speed, ...props }) => (
  <div className={spinner} {...props}>
    <div
      style={{
        borderTop: '0px solid transparent',
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `solid ${size}px #ec4c4c`,
        animation: `spinner ${speed}s ease-in-out infinite`,
      }}
    />
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#f8fc74',
        border: 'solid 0px transparent',
        animation: `spinner ${speed}s -${
          (speed / 3) * 2
        }s ease-in-out infinite`,
      }}
    />
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#8dcaff',
        border: 'solid 0px transparent',
        borderRadius: '50%',
        animation: `spinner ${speed}s -${speed / 3}s ease-in-out infinite`,
      }}
    />
  </div>
)

Spinner.propTypes = {
  size: PropTypes.string,
  speed: PropTypes.string,
};

Spinner.defaultProps = {
  size: '50',
  speed: '1.5',
};

export default Spinner
