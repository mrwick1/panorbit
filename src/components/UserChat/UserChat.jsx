import React from 'react';
import Text from '../Text/Text';
import {
  FlexL,
  Name,
  UserAvatar,
  UserChatBox,
  ChatHeader,
  Button,
  ChatArea,
  Send,
} from './UserChatStyle';

const UserChat = ({
  profilepicture,
  name,
  isChatMinimized,
  setIsChatMinimized,
  setIsUserChatOpen,
}) => {
  //providing dummy text data
  const textData = [
    {
      id: 1,
      time: '09:06 PM',
      text: [
        {
          message: 'Hi bro',
          status: 'sent',
        },
        {
          message: 'Hey There',
          status: 'received',
        },
      ],
    },
    {
      id: 2,
      time: '09:10 PM',
      text: [
        {
          message: 'What r u doing',
          status: 'sent',
        },
      ],
    },
    {
      id: 3,
      time: '09:12 PM',
      text: [
        {
          message: 'nothing ',
          status: 'received',
        },
      ],
    },
    {
      id: 4,
      time: '09:14 PM',
      text: [
        {
          message: 'What is ur name',
          status: 'sent',
        },
      ],
    },
    {
      id: 5,
      time: '09:15 PM',
      text: [
        {
          message: 'John kurishingal',
          status: 'received',
        },
      ],
    },
    {
      id: 6,
      time: '09:18 PM',
      text: [
        {
          message: 'Nice name',
          status: 'sent',
        },
      ],
    },
    {
      id: 7,
      time: '09:20 PM',
      text: [
        {
          message: 'Thanks bro',
          status: 'received',
        },
        {
          message: 'See you',
          status: 'received',
        },
        {
          message: 'See you too',
          status: 'sent',
        },
        {
          message: 'Bye',
          status: 'sent',
        },
        {
          message: 'Bye',
          status: 'received',
        },
      ],
    },
  ];
  return (
    <UserChatBox isChatMinimized={isChatMinimized ? isChatMinimized : ''}>
      <ChatHeader>
        <FlexL>
          <UserAvatar src={profilepicture} />
          <Name>{name}</Name>
        </FlexL>
        <FlexL>
          <Button
            rotate={isChatMinimized.toString()}
            onClick={(e) => setIsChatMinimized(!isChatMinimized)}
            src="/public/assets/images/arrow.svg"
          />
          <Button
            onClick={(e) => setIsUserChatOpen(false)}
            rotate={isChatMinimized.toString()}
            src="/public/assets/images/close.svg"
          />
        </FlexL>
      </ChatHeader>
      <ChatArea>
        <Text textData={textData} />
      </ChatArea>
      <Send>
        <input type="text" />
        <img src="/public/assets/images/send.svg" alt="" />
      </Send>
    </UserChatBox>
  );
};

export default UserChat;
