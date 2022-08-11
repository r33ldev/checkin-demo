import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Button } from '../atoms/button';
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
export default HomePage;
