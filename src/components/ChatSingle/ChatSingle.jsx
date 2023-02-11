import React from 'react';
import { ImageDiv } from '../../views/Profile/ProfileStyle';
import { Name } from '../singleUserItem/SingleUserItemStyle';
import { ChatAvatar, Dot, UserItem } from './ChatSingleStyle';

const ChatSingle = ({
  profilepicture,
  name,
  setSelectedChat,
  chat,
  setIsUserChatOpen,
  status,
  setIsChatMinimized,
}) => {
  return (
    <UserItem
      onClick={(e) => {
        setIsUserChatOpen && setIsUserChatOpen(true);
        setIsChatMinimized && setIsChatMinimized(false);
        setSelectedChat && setSelectedChat(chat);
      }}
    >
      <ImageDiv>
        <ChatAvatar src={profilepicture} loading="lazy" />
        <Name>{name}</Name>
      </ImageDiv>
      <Dot choice={status} />
    </UserItem>
  );
};

export default ChatSingle;
