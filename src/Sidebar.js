import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';

export default function Sidebar() {
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
          src='https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg'
          alt=''
        />
        <Avatar className='sidebar__avatar' />
        <h2>Sonny Sangha</h2>
        <h4>sonny.sangha@gmail.com</h4>
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