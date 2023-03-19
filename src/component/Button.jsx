import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  children,
  type = 'button',
  handleClick,
}) {
  return (
    <button
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  handleClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  handleClick() {
  },
  children: '',
  type: 'button',
};