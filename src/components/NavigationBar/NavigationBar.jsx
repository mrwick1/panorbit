import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { UsersContext } from '../../App';
import NavigationLink from '../NavigationLink/NavigationLink';

import { Navigation } from './NavigationBarStyle';

const NavigationBar = () => {
  const users = useContext(UsersContext);
  const { username } = useParams();
  const [user, setUser] = useState();
  const location = useLocation();
  useEffect(() => {
    const userSelected = users.filter((item) => {
      return item.username.toLowerCase() === username;
    });
    setUser(userSelected);
  }, []);
  const [loc, setLoc] = useState('');

  useEffect(() => {
    const locArray = location.pathname.split('/');
    setLoc(locArray[locArray.length - 1]);
  }, [location]);
  return (
    <div>
      <Navigation>
        <div>
          <NavigationLink
            classname={loc === username ? 'active-url' : ''}
            to={`/${username}`}
            text="Profile"
          />
          <NavigationLink
            classname={loc === `posts` ? 'active-url' : ''}
            to={`/${username}/posts`}
            text="Posts"
          />
          <NavigationLink
            classname={loc === `gallery` ? 'active-url' : ''}
            to={`/${username}/gallery`}
            text="Gallery"
          />
          <NavigationLink
            classname={loc === `todo` ? 'active-url' : ''}
            to={`/${username}/todo`}
            text="ToDo"
            last={true}
          />
        </div>
      </Navigation>
    </div>
  );
};

export default NavigationBar;
