import React from 'react';
import styled from 'styled-components';
import Text from '../../components/text-components/Text';
import Button from '../button-components/Button';
import user1 from '../../assets/images/users/user1.jpg';
import user2 from '../../assets/images/users/user2.jpg';
import user3 from '../../assets/images/users/user3.jpg';
import user4 from '../../assets/images/users/user4.jpg';
import user5 from '../../assets/images/users/user5.jpg';
function JumboTron() {
  const users = [user4, user1, user2, user3, user5];
  return (
    <JumboWrapper>
      <JumboText>
        <Text text={'You are not alone.'} color='white' size='4rem' />
        <Text text={'You have peers.'} color='white' size='4rem' />
      </JumboText>
      <JumboDetials>
        <Button text={'Join peers'} />
        <UserImages>
          {users.length &&
            users.map((user, index) => (
              <img src={user} alt='' key={index} width={30} height={30} />
            ))}
        </UserImages>
        <Text
          text='Join thousands of people who have walked in your shoes and survived.'
          size='14px'
          color='#1F226A'
        />
      </JumboDetials>
    </JumboWrapper>
  );
}

const JumboWrapper = styled.div`
  margin: 0 2rem;
`;
const JumboText = styled.div`
  line-height: 0.9;
  width: 80%;
  @media (max-width: 1200px) {
    width: 100%;
    text-align: center;
  }
`;
const JumboDetials = styled.div`
  width: 80%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;
const UserImages = styled.div`
  display: flex;
  & > img {
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    margin-right: -0.4rem;
  }
`;

export default JumboTron;
