import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { selectUser } from './features/user/userSlice';
import Login from './pages/Login/index';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className='app'>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
        </div>
      )}

      {/* Footer */}
    </div>
  );
}

export default App;
