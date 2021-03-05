import { Avatar } from '@material-ui/core';
import React from 'react';
import './styles.css';

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && <Avatar className='headerOption__avatar' src={avatar} />}
      {title}
    </div>
  );
}

export default HeaderOption;
