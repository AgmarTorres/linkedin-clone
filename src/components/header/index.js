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
function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt=''
        />

        <div className='header__search'>
          <Search />
          <input type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={Home} title='Home' />
        <HeaderOption Icon={SupervisorAccount} title='My Network' />
        <HeaderOption Icon={BusinessCenter} title='Jobs' />
        <HeaderOption Icon={Chat} title='Messaging' />
        <HeaderOption Icon={Notifications} title='Notifications' />
        <HeaderOption
          avatar='https://scontent.fvag3-1.fna.fbcdn.net/v/t1.0-1/p320x320/87984446_2484401225003140_7561734062881112064_n.jpg?_nc_cat=107&ccb=3&_nc_sid=7206a8&_nc_ohc=D7QFz_Q0e1MAX_Pwy48&_nc_ht=scontent.fvag3-1.fna&tp=6&oh=ef3970cf7231cf7639e5037033ac56b1&oe=60686DE7'
          title='me'
        />
      </div>
    </div>
  );
}

export default Header;
