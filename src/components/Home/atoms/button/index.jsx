import React from 'react'
import styled from 'styled-components'
export function Button({children}) {
  return (
     <ButtonWrapper>{children}</ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  width: fit-content;
  height: 40px;
  background: #fff;
  border: none;
  border: 1px solid #000;
  margin: 10px;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #000;

    a {
      color: #fff;
    }
  }
  & a {
    color: #000;
    text-decoration: none;
  }
`;
