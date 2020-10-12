import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin: 20px auto;
  .input__label {
    display: block;
    margin: 5px;
  }

  input {
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.colors.silver};
    width: 100%;
    padding: 10px;
  }
`;

const Input = ({
  type,
  value,
  id,
  name,
  placeholder,
  label,
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
      {label && (
        <label className="input__label" htmlFor={id}>
          {label} :
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
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
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  className: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  size: PropTypes.string,
  required: PropTypes.bool,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  name: '',
  size: '16',
  required: false,
  placeholder: '',
  minLength: '0',
  maxLength: '100',
};

export default Input;
