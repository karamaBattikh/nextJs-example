import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 50px;
`;

const Input = ({
  type,
  inputValue,
  id,
  name,
  placeholder,
  labelInput,
  error,
  errorMessage,
  onBlur,
  minLength,
  maxLength,
  size,
  required,
  className,
}) => {
  return (
    <InputWrapper>
      {labelInput && <label htmlFor={id}>{labelInput}</label>}
      <input
        id={id}
        type={type}
        name={name}
        value={inputValue}
        className={className}
        onBlur={onBlur}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        size={size}
        placeholder={placeholder}
      />
      {error && <spam>{errorMessage}</spam>}
    </InputWrapper>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  labelInput: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  size: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBlur: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  name: '',
  labelInput: '',
  error: false,
  errorMessage: '',
  minLength: '0',
  maxLength: '100',
  size: '16',
  required: false,
  placeholder: '',
  inputValue: null,
};

export default Input;
