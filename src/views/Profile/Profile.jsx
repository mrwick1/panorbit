import React, { useContext, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { UsersContext } from '../../App';
import Chat from '../../components/Chat/Chat';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { Hr } from '../../components/NavigationLink/NavigationLinkStyle';
import UserChat from '../../components/UserChat/UserChat';
import { Layout, RightSection } from './ProfileStyle';

const Profile = () => {
  const users = useContext(UsersContext);
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [selectedChat, setSelectedChat] = useState({});
  const [isUserChatOpen, setIsUserChatOpen] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);
  useEffect(() => {
    const userSelected = users.filter((item) => {
      return item.username.toLowerCase().replace('.', '_') === username;
    });
    setUser(userSelected);
  }, [users, username]);
  return (
    <Layout>
      <NavigationBar />
      <RightSection>
        <Header {...user[0]} />
        <Hr />
        <Outlet context={user[0]} />
      </RightSection>
      <Chat
        isUserChatOpen={isUserChatOpen}
        setSelectedChat={setSelectedChat}
        setIsUserChatOpen={setIsUserChatOpen}
        setIsChatMinimized={setIsChatMinimized}
      />
      {isUserChatOpen && (
        <UserChat
          setIsChatMinimized={setIsChatMinimized}
          isChatMinimized={isChatMinimized}
          setIsUserChatOpen={setIsUserChatOpen}
          {...selectedChat}
        />
      )}
    </Layout>
  );
};

export default Profile;
