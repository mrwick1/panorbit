import React from 'react';
import { Link } from 'react-router-dom';
import SingleUserItem from '../singleUserItem/SingleUserItem';
import { Hr } from '../singleUserItem/SingleUserItemStyle';
import {
  Email,
  PopUp,
  PopUpContent,
  PopUpName,
  ProfilePicture,
  ScrollArea,
  SignOut,
} from './ProfilePopUpStyle';

const ProfilePopUp = ({ profilepicture, name, email, users, setIsOpen }) => {
  return (
    <PopUp>
      <PopUpContent>
        <ProfilePicture src={profilepicture} alt={`${name} profile picture`} />
        <PopUpName>{name}</PopUpName>
        <Email>{email}</Email>

        <ScrollArea>
          {users.map((item) => {
            return (
              <div key={item.id}>
                <Hr />
                <SingleUserItem setIsOpen={setIsOpen} last={true} {...item} />
              </div>
            );
          })}
        </ScrollArea>

        <SignOut>
          <Link to="/">Sign out</Link>
        </SignOut>
      </PopUpContent>
    </PopUp>
  );
};

export default ProfilePopUp;
