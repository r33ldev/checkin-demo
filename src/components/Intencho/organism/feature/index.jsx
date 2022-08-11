import React from 'react';
import styled from 'styled-components';
import CaretLeft from '../icon-components/CaretLeft';
import CaretRight from '../icon-components/CaretRight';
import Text from '../text-components/Text';
import wavy from '../../assets/images/wavy-line.png';
import wavy2 from '../../assets/images/wavy-line-2.png';
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
              //   style={{width: '100%', height: 'auto'}}
              alt={feature.title + ' ' + index}
            />
          ))}
      </FeatureCarousel>
      <FeatureFooter>
        <img src={wavy2} alt='wavy line' />
        <FeatureFooterDetails>
          <FeatureFooterDetailsText>
            <Text text={'Our last projects'} size='1.3rem' color='#30363A' />
            <Text text={'01/05 Coffe Shop'} size='1rem' color='#D0D5DA' />
          </FeatureFooterDetailsText>
          <FeatureFooterDetailsControls>
            <CaretLeft />
            <CaretRight active />
          </FeatureFooterDetailsControls>
        </FeatureFooterDetails>
      </FeatureFooter>
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

  &:hover {
    img {
      opacity: 0.8;
    }
  }
`;
//   max-width: 100%;
//   max-height: 30rem;
const FeatureImage = styled.img`
  height: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1 !important;
  }
`;
const FeatureFooter = styled.div`
  img {
    width: 100%;
    margin-top: 0.5rem;
  }
`;
const FeatureFooterDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const FeatureFooterDetailsText = styled.div`
  line-height: 1.3;
  text-align: left;
`;
const FeatureFooterDetailsControls = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export default Feature;
