import { Avatar } from '@material-ui/core';
import React from 'react';
import './styles.css';
import { selectUser } from './../../features/user/userSlice';
import { useSelector } from 'react-redux';

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar className='headerOption__icon' src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      {title}
    </div>
  );
}

export default HeaderOption;
