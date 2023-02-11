import axios from 'axios';
import React, { useContext } from 'react';
import SingleUserItem from '../../components/singleUserItem/SingleUserItem';
import { UsersContext } from '../../App';
import {
  HomeSection,
  ScrollableArea,
  SelectText,
  UserListCard,
} from './HomeStyle';

const Home = () => {
  const users = useContext(UsersContext);
  return (
    <div>
      <HomeSection>
        <UserListCard>
          <SelectText>Select an account</SelectText>
          <ScrollableArea>
            {
              // map the array to a list
            }
            {users.map((item) => {
              return <SingleUserItem key={item.id} {...item} />;
            })}
          </ScrollableArea>
        </UserListCard>
      </HomeSection>
    </div>
  );
};

export default Home;
