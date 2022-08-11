import React from 'react'
import styled from 'styled-components'
function BattlePeerFeature() {
  return (
    <>
      <div style={{ padding: '3rem' }}>
        <Header />
        <MainContent>
          <JumboTron />
        </MainContent>
      </div>
      <FeaturedImage>
        <img src={featuredImage} alt='office' />
      </FeaturedImage>
    </>
  );
}
const MainContent = styled.div`
  margin-top: 2rem;
  padding-bottom: 0;
`;

const FeaturedImage = styled.div`
  margin-top: 3rem;
  width: 96%;
  position: relative;
  z-index: 4;
  border-top-right-radius: 236px;
  background: rgb(254, 237, 227);
  box-shadow: -6px 0 white, 1px 0 1px #13155a, 0 7px 5px -2px white;
  img {
    padding: 0;
    margin-bottom: -0.3rem;
    margin-top: -0.04rem;
    height: 230px;
    width: 500px;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -87px;
    right: -232px;
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    background: rgb(254, 237, 227);
    background: linear-gradient(
      246deg,
      rgb(144 140 246 / 75%) 0%,
      rgba(254, 237, 227, 71%) 100%
    );
    z-index: 10;
    -webkit-clip-path: polygon(0 0, 39% 0, 39% 73%, -4% 73%);

    @media (max-width: 1200px) {
      display: none;
    }
  }
`;
export default BattlePeerFeature