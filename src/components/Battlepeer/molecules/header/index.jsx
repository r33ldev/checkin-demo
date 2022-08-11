import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/brand/logo.png';
function Header() {
  return (
    <Wrapper>
      <Logowrapper>
        <img src={logo} alt='battle peer logo' />
      </Logowrapper>
      <Navigation>
        <span>&nbsp;</span>
      </Navigation>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Logowrapper = styled.div``;
//   transform: rotate(90deg);
const Navigation = styled.div`
  position: relative;
  span {
    height: 2px;
    width: 2rem;
    display: block;
    &,
    &:before,
    &:after {
      background-color: #fff;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      right: 0;
      height: 2px;
    }

    &:after {
      top: 0.5rem;
      width: 1.1rem;
    }
    &:before {
      top: -0.5rem;
      width: 1.6rem;
    }
  }
`;
export default Header;
