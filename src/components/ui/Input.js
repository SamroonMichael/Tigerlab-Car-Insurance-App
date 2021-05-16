import React from 'react';
import PropTypes from 'prop-types';

/* style-compontent */
import { createGlobalStyle } from 'styled-components';

/* Style for inputs */
const GlobalStyle = createGlobalStyle`
    input[type=text], input[type=email], input[type=password], input[type=date] {
    /* margin-right: 2rem; */
    width: 100%;
    display: block;
    height: 60px;
    padding: 0 1.5rem;
    margin: 0 auto;
    box-sizing: border-box;
    box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.4),
      inset -1px -1px 1px rgba(12, 13, 18, 0.04), inset 0 0 0 2px #ecf0f5,
      inset -2px -2px 2px 2px rgba(255, 255, 255, 0.4),
      inset -4px -4px 4px 2px rgba(255, 255, 255, 0.4),
      -1px -1px 4px 0px rgba(255, 255, 255, 0.4),
      -2px -2px 8px 0px rgba(255, 255, 255, 0.4),
      inset 2px 2px 2px 2px rgba(12, 13, 18, 0.04),
      inset 4px 4px 4px 2px rgba(12, 13, 18, 0.04),
      1px 1px 4px 0px rgba(12, 13, 18, 0.04),
      2px 2px 8px 0px rgba(12, 13, 18, 0.04);

    border: none;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;

        &:focus {
            box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
            outline: none;
        }
    }
`;

const FormInput = (props) => {
  const handleChange = (e) => {
    if (props.onChange) props.onChange(e);
  };
  return (
    <>
      <GlobalStyle />
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleChange}
        className={props.className}
        required={props.required}
        name={props.name}
      />
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string
};

export default FormInput;
