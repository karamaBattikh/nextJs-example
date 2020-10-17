import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  display: block;
  padding: 10px;
  margin: 30px auto;
  text-transform: uppercase;
  width: ${({ size }) => (size === 'large' ? '330px' : 'auto')};
  font-size: 15px;
  line-height: 30px;
  border-radius: 30px;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  color: ${({ color, theme }) => (color ? theme[`${color}`] : theme.black)};
  background-color: ${({ bgColor, theme }) => (bgColor ? theme[`${bgColor}`] : theme.white)};
  overflow: hidden;

  i {
    float: right;
    &::before {
      display: inline-block;
      vertical-align: middle;
    }
  }
`;

const Button = ({ children, color, type, bgColor, size, icon, handleClick }) => (
  <ButtonWrapper
    type={type}
    bgColor={bgColor}
    color={color}
    size={size}
    onClick={(e) => handleClick(e)}
  >
    {children}
    {icon && <i className={icon} />}
  </ButtonWrapper>
);

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  bgColor: PropTypes.string,
  icon: PropTypes.string,
};

export default Button;
