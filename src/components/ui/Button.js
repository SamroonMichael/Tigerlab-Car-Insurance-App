import React from 'react';
import PropTypes from 'prop-types'

/* style-compontent */
import styled from 'styled-components';

const ButtonWaper = styled.button`
  width: 50%;
  padding: 1rem;
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
  border: none;

  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }

  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;

const Button = (props) => {
  return (
    <ButtonWaper onClick={props.onClick} className={props.className}>
      {props.children}
    </ButtonWaper>
  );
};

Button.prototype = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default Button;
