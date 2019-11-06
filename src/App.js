import React from 'react';
import './App.scss';

import LeftSideBar from './components/LeftSideBar';
import Main from './components/Main';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <div className="container">
      <LeftSideBar/>
      <Main/>
      <RightSideBar/>
    </div>
  );
}

export default App;
