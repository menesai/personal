import React, { Component } from 'react'
// import HomeHeader from './HomeComp/HomeHeader';
import Card from './HomeComp/Card';
import './Home.scss';

class Home extends Component {

  
  render() {
    return (
      <div className='home-bkgrd'>
        {/* <HomeHeader/> */}
        <Card/>
       </div>
    )
  }
}

export default Home
