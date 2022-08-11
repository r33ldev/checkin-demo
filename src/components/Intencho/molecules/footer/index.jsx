import React from 'react'
import styled from 'styled-components'
import Text from '../../atoms/text';
import { CaretLeft, CaretRight } from '../../atoms/icon';
import wavy2 from '../../../../assets/images/wavy-line-2.png';
function Footer() {
  return (
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
  );
}

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
export default Footer