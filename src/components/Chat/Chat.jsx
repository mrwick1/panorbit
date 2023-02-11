import { useContext, useState } from 'react';
import { UsersContext } from '../../App';
import ChatSingle from '../ChatSingle/ChatSingle';
import { Arrow, ChatBox, ChatFlex, ChatHeader, ChatScroll } from './ChatStyle';

const Chat = ({ setSelectedChat, setIsUserChatOpen, setIsChatMinimized }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const users = useContext(UsersContext);

  return (
    <ChatBox>
      <ChatHeader onClick={(e) => setIsChatOpen(!isChatOpen)}>
        <ChatFlex>
          <img src="/public/assets/images/chat-icon.svg" alt="" />
          Chats
        </ChatFlex>
        <Arrow
          rotate={isChatOpen.toString()}
          src="/public/assets/images/arrow.svg"
          alt=""
        />
      </ChatHeader>
      <ChatScroll isOpen={isChatOpen.toString()}>
        {users?.map((item) => {
          return (
            <ChatSingle
              setSelectedChat={setSelectedChat}
              key={item?.id}
              setIsUserChatOpen={setIsUserChatOpen}
              setIsChatMinimized={setIsChatMinimized}
              {...item}
              chat={item}
            />
          );
        })}
      </ChatScroll>
    </ChatBox>
  );
};

export default Chat;
