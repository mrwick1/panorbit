import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { UsersContext } from '../../App';
import { ImageDiv, ProfileText } from '../../views/Profile/ProfileStyle';
import ProfilePopUp from '../ProfilePopUp/ProfilePopUp';
import { Name, ProfileImage } from '../singleUserItem/SingleUserItemStyle';
import { HeaderFlex, HeaderSection } from './HeaderStyle';

const Header = ({ name, profilepicture, email }) => {
  const [isOpen, setIsOpen] = useState(false);
  const users = useContext(UsersContext);
  const [loc, setLoc] = useState('');
  const { username } = useParams();

  const menuRef = useRef();
  const location = useLocation();

  // for closing menu chen clicking outside
  useEffect(() => {
    const outsideClickHandler = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', outsideClickHandler);
    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  }, [isOpen]);

  useEffect(() => {
    const locArray = location.pathname.split('/');
    setLoc(locArray[locArray.length - 1]);
  }, [location]);
  var title = '';
  if (loc === username) {
    title = 'Profile';
  } else if (loc === 'posts') {
    title = 'Posts';
  } else if (loc === 'gallery') {
    title = 'Gallery';
  } else if (loc === 'todo') {
    title = 'ToDo';
  }

  return (
    <HeaderSection ref={menuRef}>
      <HeaderFlex>
        <ProfileText>{title}</ProfileText>
        <ImageDiv onClick={(e) => setIsOpen(!isOpen)}>
          <Name>{name}</Name>
          <ProfileImage src={profilepicture} alt={`${name} profile picture`} />
        </ImageDiv>
      </HeaderFlex>
      {isOpen && (
        <ProfilePopUp
          setIsOpen={setIsOpen}
          profilepicture={profilepicture}
          users={users}
          email={email}
          name={name}
        />
      )}
    </HeaderSection>
  );
};

export default Header;
