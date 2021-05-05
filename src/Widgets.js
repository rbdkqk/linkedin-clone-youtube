import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('PaPa React is Back', 'Top news - 9,099 readers')}
      {newsArticle('Coronavirus: UK updates', 'Top news - 886 readers')}
      {newsArticle('Tesla hits new highs', 'Cars $ auto - 300 readers')}
      {newsArticle('Bitcoin Breaks $22k', 'Crypto - 13,425 readers')}
      {newsArticle('Is Redux too good?', 'Code - 1,736 readers')}
    </div>
  );
}
