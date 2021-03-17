import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from '@material-ui/icons';
import React from 'react';
import HeaderOption from '../HeaderOption';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import { auth } from '../../firebase';
import { selectUser } from './../../features/user/userSlice';
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt=''
        />

        <div className='header__search'>
          <Search />
          <input placeholder='Search' type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={Home} title='Home' />
        <HeaderOption Icon={SupervisorAccount} title='My Network' />
        <HeaderOption Icon={BusinessCenter} title='Jobs' />
        <HeaderOption Icon={Chat} title='Messaging' />
        <HeaderOption Icon={Notifications} title='Notifications' />
        <HeaderOption avatar={user.photoUrl} title='me' onClick={logoutApp} />
      </div>
    </div>
  );
}

export default Header;
