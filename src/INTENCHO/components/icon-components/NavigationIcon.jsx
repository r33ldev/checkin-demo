// import dash from '../assets/dash.svg'
import styled from 'styled-components';
function NavigationIcon() {
  return (
    <MoreWrapper>
      <span>&nbsp;</span>
    </MoreWrapper>
  );
}
const MoreWrapper = styled.div`
  position: relative;
  border: 2px solid #d0d5da;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;

  span {
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 9px;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      width: 1rem;
      height: 3px;
      background-color: #d0d5da;
      display: inline-block;
    }
    &::before {
      top: 0.8rem;
    }
    &::after {
      top: 1.2rem;
    }
  }

  &:hover {
    span {
      &::before {
        top: 0.5rem;
      }
      &::after {
        top: 1.5rem;
      }
    }
  }
`;
export default NavigationIcon;
