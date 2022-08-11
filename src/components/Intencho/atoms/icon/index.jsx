import React from 'react';
import styled from 'styled-components';


export function CaretLeft({active}) {
  return (
    <Wrapper>
      <svg
        width='256px'
        height='256px'
        viewBox='0 0 256 256'
        fill='#D0D5DA'
        id='Flat'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M160,212a3.98805,3.98805,0,0,1-2.82861-1.17163l-80-80a4,4,0,0,1,0-5.65674l80-80a4.00009,4.00009,0,0,1,5.65722,5.65674L85.65674,128l77.17187,77.17163A4,4,0,0,1,160,212Z' />
      </svg>
    </Wrapper>
  );
}

export function CaretRight({active}) {
  return (
    <Wrapper active>
      <svg
        width='256px'
        height='256px'
        viewBox='0 0 256 256'
        id='Flat'
        fill={`${active ? '#30363A' : '#D0D5DA'}`}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M96,212a4,4,0,0,1-2.82861-6.82837L170.34326,128,93.17139,50.82837a4.00009,4.00009,0,0,1,5.65722-5.65674l80,80a4,4,0,0,1,0,5.65674l-80,80A3.98805,3.98805,0,0,1,96,212Z' />
      </svg>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  border: ${(props) =>
    props.active ? '1px solid #30363A' : '1px solid #d0d5da'};
  cursor: pointer;
  svg {
    height: 1.2rem;
  }
`;

export function NavigationIcon() {
  return (
    <MoreWrapper>
      <span>&nbsp;</span>
    </MoreWrapper>
  );
}

const MoreWrapper = styled.div`
  position: relative;
  border: 2px solid #d0d5da;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;

  span {
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 9px;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      width: 1rem;
      height: 3px;
      background-color: #d0d5da;
      display: inline-block;
    }
    &::before {
      top: 0.8rem;
    }
    &::after {
      top: 1.2rem;
    }
  }

  &:hover {
    span {
      &::before {
        top: 0.5rem;
      }
      &::after {
        top: 1.5rem;
      }
    }
  }
`;
