import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import axios from 'axios';
import { getUsersURL } from './consts/api';
import UserDetails from './components/UserDetails/UserDetails';
import ComingSoon from './components/ComingSoon/ComingSoon';

export const UsersContext = createContext();

const App = () => {
  const [users, setUsers] = useState([]);
  // fetch user data
  const getUsers = async () => {
    const data = await axios.get(getUsersURL);
    setUsers(
      data.data.users.map((item) => {
        return {
          ...item,
          status: Math.random() < 0.5,
        };
      })
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  // using context APi because the profile data doesn't need to be fetched again
  return (
    <UsersContext.Provider value={users}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Profile />}>
            <Route index element={<UserDetails />} />
            <Route path="posts" element={<ComingSoon />} />
            <Route path="gallery" element={<ComingSoon />} />
            <Route path="todo" element={<ComingSoon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UsersContext.Provider>
  );
};

export default App;
