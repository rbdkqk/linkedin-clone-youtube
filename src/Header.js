import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className='header'>
      {' '}
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1620048731~hmac=1770ad40f04594fd61e80e91fff57be2'
          alt=''
        />
        <div className='header__search'>
          <SearchIcon />
          <input type='text'></input>
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption
          avatar='https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg'
          title='me'
        />
      </div>
    </div>
  );
}

export default Header;
