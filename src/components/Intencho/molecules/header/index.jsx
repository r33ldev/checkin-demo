import React from 'react';
import styled from 'styled-components';
import NavigationIcon from '../../components/icon-components/NavigationIcon';
import logo from '../../assets/images/brand/logo.png';
function Header({ props }) {
  const navItems = [
    { title: 'Home', url: '/' },
    { title: 'Themes', url: '/themes' },
    { title: 'Products', url: '/products' },
    { title: 'About us', url: '/about' },
    { title: 'Contact us', url: '/contact' },
  ];
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={logo} alt='logo' height={20} />
      </LogoWrapper>
      <HeaderMenu>
        {navItems.map((nav, i) => (
          <HeaderItem
            key={i}
            title={nav.title}
            onClick={() => console.log('routing to ' + nav.url)}
          >
            {' '}
            {nav.title}{' '}
          </HeaderItem>
        ))}
      </HeaderMenu>
      <MoreWrapper>
        <MoreButton>
          {' '}
          <NavigationIcon />{' '}
        </MoreButton>
      </MoreWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  img {
    margin-right: 1rem;
  }
`;
const HeaderMenu = styled.div`
  display: flex;
  gap: 2rem;
`;
const MoreButton = styled.div``;
const MoreWrapper = styled.div`
  cursor: pointer;
`;
const HeaderItem = styled.div`
  color: ${(props) => (props.title == 'Home' ? '#30363A' : '#D0D5DA')};
  font-family: 'Tame' !important;
  cursor: pointer;
`;
export default Header;
