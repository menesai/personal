import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../ducks/UsersRed';
import './Header.css'

class H1 extends Component {

  logOut = () => {
    this.props.logout()
    console.log(this.props.logOut)
  }

  render() {
    return (
      <div className='nav'>
      <div className='title'><h1>Title Of Project</h1></div>
      <ul>
        <Link className='l1' to='/' ><li className='home'>HOME</li></Link>
        <Link className='l2' to='/create' ><li className='create'>POST A PROJECT</li></Link>
        <Link className='l4' to='/register' ><li className='register'>REGISTER</li></Link>
        <button className='signOut' onClick={() => this.logOut()}>Sign Out</button>
      </ul>
      </div> 
    )
  }
}

const mapStateToProps = ({UsersRed}) => ({...UsersRed});

export default connect(mapStateToProps, {logout})(H1);