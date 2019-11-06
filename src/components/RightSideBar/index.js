import React from 'react';
import './index.scss';

const RightSideBar = () => {
  return (
    <div className="right-bar">
      <div className="card">
        <h4>Social Links</h4>
        <ul className="list-items">
          <li className="item">
            <i className="icon icon-travel"/> 
            <span className="title">Linkedin</span>
          </li>
          <li className="item">
            <i className="icon icon-travel"/> 
            <span className="title">Facebook</span>
          </li>
          <li className="item">
            <i className="icon icon-travel"/> 
            <span className="title">Codepen</span>
          </li>
          <li className="item">
            <i className="icon icon-travel"/> 
            <span className="title">Gighub</span>
          </li>
        </ul>
      </div>
      <div className="card">
        <h4>Projects</h4>
        <ul className="list-items">
        <li className="item">
            <div className="img-wrap">
              <img src="./images/1_4x.jpg" alt=""/>
            </div>
            <span className="details">
              <div className="heading">
                frilio.com
              </div>
              <div className="sub-heading">Zoabe Technologies</div>
              <div className="caption">Jan 19 - Present</div>
            </span>
          </li>
          <li className="item">
            <div className="img-wrap">
              <img src="./images/2_4x.jpg" alt=""/>
            </div>
            <span className="details">
              <div className="heading">
                Smarts Schools
              </div>
              <div className="sub-heading">Zoabe Technologies</div>
              <div className="caption">Sep 18 - Jan 19</div>
            </span>
          </li>
          <li className="item">
            <div className="img-wrap">
              <img src="./images/3_4x.jpg" alt=""/>
            </div>
            <span className="details">
              <div className="heading">
                Fee Collection and Payment System
              </div>
              <div className="sub-heading">Webkanpur Software Services</div>
              <div className="caption">Aug 17 - Feb 18</div>
            </span>
          </li>
          <li className="item">
            <div className="img-wrap">
              <img src="./images/4_4x.jpg" alt=""/>
            </div>
            <span className="details">
              <div className="heading">
                webkanpur.com
              </div>
              <div className="sub-heading">Webkanpur Software Services</div>
              <div className="caption">Feb 18 - Aug 18</div>
            </span>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default RightSideBar;
