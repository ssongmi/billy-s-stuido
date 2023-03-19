import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-image: ${({ icon }) => `url(${process.env.PUBLIC_URL}/icon/${icon})`}
`;
export default function Button({
  children,
  type = 'button',
  handleClick,
  icon,
  className,
}) {
  return (
    <StyledButton
      onClick={handleClick}
      type={type}
      icon={icon}
      className={`btn ${className}`}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  handleClick: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  handleClick() {
  },
  children: '',
  type: 'button',
  icon: null,
  className: '',
};
