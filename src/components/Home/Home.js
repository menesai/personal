import React, { Component } from 'react'
import HomeHeader from './HomeComp/HomeHeader';
import Card from './HomeComp/Card';

class Home extends Component {

  
  render() {
    return (
      <div>
        <HomeHeader/>
        <Card/>
       </div>
    )
  }
}

export default Home
