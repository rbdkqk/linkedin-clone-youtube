import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='app'>
      {/* <h1>Let's build a LinkedIn CLONE</h1> */}
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
