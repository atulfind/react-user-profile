import React from 'react';
import './index.scss';

const LeftSideBar = () => {
  return (
    <div className="left-bar">
      <div className="profile">
        <div className="img-wrap">
          <img src="./images/2_2x.jpg" alt="dd"/>
        </div>
        <div className="profile-details">
          <div className="title">
            Atul Kumar
          </div>
          <div className="sub-title">
            Front-End Developer
          </div>
          <div className="status">
            <i className="icon icon-travel"/>
            <span className="caption">focusing</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar
