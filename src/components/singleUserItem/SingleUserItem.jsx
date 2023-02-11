import React from 'react';
import { Link } from 'react-router-dom';
import { Hr, Item, ListItem, Name, ProfileImage } from './SingleUserItemStyle';

const SingleUserItem = ({
  name,
  profilepicture,
  username,
  last,
  setIsOpen,
}) => {
  return (
    <Link
      onClick={(e) => setIsOpen(false)}
      to={`/${username.toLowerCase().replace('.', '_')}`}
    >
      <Item>
        <ListItem>
          <ProfileImage
            src={profilepicture}
            alt={`${username} profile picture`}
          />
          <Name>{name}</Name>
        </ListItem>
        {!last && <Hr />}
      </Item>
    </Link>
  );
};

export default SingleUserItem;
