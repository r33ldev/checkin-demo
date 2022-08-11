import React from 'react';
import styled from 'styled-components';
function Text({ color, width, text, size, children, hovered, capitalize }) {
  return (
    <TextWrapper
      hovered={hovered}
      color={color}
      width={width}
      size={size}
      capitalize={capitalize}
    >
      {text}
      {children}
    </TextWrapper>
  );
}

const TextWrapper = styled.p`
  font-family: 'Cabin' !important;
  width: ${(props) => (props.width ? props.width : '100%')};
  color: ${(props) => (props.color ? props.color : '#C9C9D7')};
  text-transform: ${(props) => (props.capitalize ? 'capitalize' : '')};
  font-size: ${(props) => (props.size ? props.size : '1.5rem')};
  margin: 0;
  font-weight: '400';
  &:hover {
    color: ${(props) => (props.hovered ? 'white' : '')};
  }
  & > span {
    color: 'white';
    opacity: '.33';
    fontsize: '1.2rem';
  }
  & > p {
    color: 'white';
    font-weight: '100';
    display: 'inline';
  }
  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
`;
export default Text;
