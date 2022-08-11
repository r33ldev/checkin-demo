import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
function HomePage() {
  return (
    <HomepageWrapper>
      <Button>
        <Link to='/intencho'>INTENCHO</Link>
      </Button>
      <Button>
        <Link to='/battlepeer'>BATTLEPEER</Link>
      </Button>
      <Outlet />
    </HomepageWrapper>
  );
}
const HomepageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const Button = styled.button`
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
export default HomePage;
