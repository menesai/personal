import React, { Component } from 'react'
import './HomeHeader.css';

class HomeHeader extends Component {


  render() {
    return (
      <div className='homePg'>
        <div className='home-img'/>
          <div className='home-filter'>
            <div className='home-title'>
             <h1 className='home-head-h1'>Title Of Project </h1>
               <p className='home-head-p'>A collection of websites and applications using the React or React Native JavaScript library.</p>
            </div>
          <div className='home-select'>
            <select >
              <option>What are you good?</option>
              <option>Vue</option>
              <option>React</option>
              <option>Angular</option>
              <option>Other</option>
            </select>
            <button className='h-header-btn'>Search</button>
          </div>
        </div>
        
       </div>
    )
  }
}

export default HomeHeader;
