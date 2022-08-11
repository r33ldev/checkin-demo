import React from 'react';
import styled from 'styled-components';
function CaretRight({active}) {
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
// display: flex;
// justify-content: flex-end;
// align-items: center;
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
export default CaretRight;
