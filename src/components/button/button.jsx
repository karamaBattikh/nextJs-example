import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: 1px solid;
  padding: 10px 15px;
  border-radius: 15px;
`;

const Button = ({ label, type }) => {
  return <ButtonWrapper type={type}>{label}</ButtonWrapper>;
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
};

export default Button;
