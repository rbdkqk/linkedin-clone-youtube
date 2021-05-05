import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

export default function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className='sidebar__recentItem'>
        <div className='sidebar__hash'>#</div>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-3840x2160-1455.jpg'
          alt=''
        />
        <Avatar className='sidebar__avatar' src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
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
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}
