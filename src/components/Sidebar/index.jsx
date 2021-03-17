import { Avatar } from '@material-ui/core';

import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import { selectUser } from './../../features/user/userSlice';

function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      {topic}
      <span className='sidebar__hash'>#</span>
    </div>
  );

  const user = useSelector(selectUser);

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://assets.b9.com.br/wp-content/uploads/2019/08/everest-b9.jpg'
          alt=''
        />
        <Avatar avatar={user.photoUrl} className='sidebar__avatar'>
          {user.email[0]}
        </Avatar>

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewedyou</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,448</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programing')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
