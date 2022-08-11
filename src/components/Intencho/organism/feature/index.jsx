import React from 'react';
import styled from 'styled-components';
import wavy from '../../../../assets/images/wavy-line.png';
import Text from '../../atoms/text';
import Footer from '../../molecules/footer';
function Feature({ feature }) {
  return (
    <FeatureWrapper>
      <FeatureText>
        <TitleWrapper>
          <Text text={feature.title} size='2.6rem' color='#30363A' capitalize />{' '}
          <img src={wavy} alt='underline' />
        </TitleWrapper>
        <Text text={feature.subTitle} size='1rem' color='#D0D5DA' capitalize />
      </FeatureText>
      <FeatureCarousel>
        {feature.images &&
          feature.images.map((image, index) => (
            <FeatureImage
              key={index}
              src={image}
              alt={feature.title + ' ' + index}
            />
          ))}
      </FeatureCarousel>
      <Footer />
    </FeatureWrapper>
  );
}

const FeatureWrapper = styled.div`
  width: 100%;
`;
// const Title = styled.div`

const FeatureText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

  @media(max-width:600px) {
    flex-direction: column;
    gap: 1.4rem;
  }
`;
const TitleWrapper = styled.div`
  width: 100%;

  img {
    width: 42%;
  }
`;
const FeatureCarousel = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  width: 100%;
gap: 1.4rem;
  &:hover {
    img {
      opacity: 0.8;
    }
  }
`;
//   max-width: 100%;
//   max-height: 30rem;
const FeatureImage = styled.img`
  // height: auto;
  width:100%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1 !important;
  }
`;

export default Feature;
