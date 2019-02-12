import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

class Header extends Component {

  render() {
    return (
      <div className='nav'>
      <div className='title'><h1>Title Of Project</h1></div>
      <ul>
        <Link className='l1' to='/' ><li className='home'>HOME</li></Link>
        <Link className='l2' to='/create' ><li className='create'>POST A PROJECT</li></Link>
        <Link className='l3' to='signup' ><li className='signup'>SIGN IN</li></Link>
        <Link className='l4' to='/register' ><li className='register'>REGISTER</li></Link>
      </ul>
      </div> 
    )
  }
}

export default Header;
