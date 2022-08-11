import styled from 'styled-components';
import Feature from '../INTENCHO/components/feature-component/Feature.jsx';
import Header from '../INTENCHO/components/header-components/Header.jsx';
import feature1 from '../INTENCHO/assets/images/feature-one/feature-1-1.png';
import feature2 from '../INTENCHO/assets/images/feature-one/feature-1-2.png';
import feature3 from '../INTENCHO/assets/images/feature-one/feature-1-3.png';
import '../INTENCHO/assets/styles/styles.css';

function IntenchoPage() {
  const feature = {
    title: 'Best Interior Design for Your Happy Place!',
    subTitle:
      'Comfort is our priority to satisfy our customers, and we provide all the furniture that you can easily and quickly use.',
    images: [feature1, feature2, feature3],
  };
  return (
    <PageWrapper className='Intencho'>
      <Header />
      <MainContent>
        <Feature feature={feature} />
      </MainContent>
    </PageWrapper>
  );
}

// cursor: url(imageCursor), auto !important;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 6rem;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 45%;
    right: 10%;
    width: 1rem;
    height: 1rem;
    background: rgba(237, 221, 196, 1);
    box-shadow: -9px 10px 112px 168px rgba(237, 221, 196, 1);
    -webkit-box-shadow: -9px 10px 112px 168px rgba(237, 221, 196, 1);
    -moz-box-shadow: -9px 10px 112px 168px rgba(237, 221, 196, 1);
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    top: 45%;
    left: 10%;
    width: 1rem;
    height: 1rem;
    background: rgba(225, 243, 245, 1);
    box-shadow: -9px 10px 112px 166px rgba(225, 243, 245, 1);
    -webkit-box-shadow: -9px 10px 112px 166px rgba(225, 243, 245, 1);
    -moz-box-shadow: -9px 10px 112px 166px rgba(225, 243, 245, 1);
    z-index: -1;
  }
`;

const MainContent = styled.div`
  margin-top: 4rem;
`;

export default IntenchoPage;
