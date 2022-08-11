import React from 'react';
import styled from 'styled-components';
import underline from '../../../../assets/images/underline.png';
function Text({
  color,
  width,
  text,
  size,
  children,
  hovered,
  capitalize,
  type,
}) {
  return (
    <TextWrapper
      hovered={hovered}
      color={color}
      width={width}
      size={size}
      capitalize={capitalize}
      type={type}
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
  font-weight: 400;
  &:hover {
    color: ${(props) => (props.hovered ? 'white' : '')};
  }
  & > span {
    position: relative;
    &:after {
      display: block;
      width: 100%;
      height: 1px;
      background-image: url('');
      background-color: ${(props) => (props.color ? props.color : '#C9C9D7')};
      margin-top: 0.5rem;
      position: absolute;
    }
  }
  & > p {
    color: 'white';
    font-weight: 100;
    display: inline;
  }
  @media (max-width: 1200px) {
    font-size: ${(props) => (props.type == 'title' ? '2rem' : '1rem')};
  }
`;
export default Text;
