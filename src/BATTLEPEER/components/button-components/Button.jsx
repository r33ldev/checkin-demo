import React from 'react';
import styled from 'styled-components';
function Button({ text, onClick }) {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
}
const ButtonWrapper = styled.button`

    background-color: white;
    border: none;
    border-radius: 3rem;
    color: #000;
    font-size: 14px;
    height: 2.5rem;
    width: 10rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
`
export default Button;
