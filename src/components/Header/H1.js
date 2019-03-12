import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout, getUser} from '../../ducks/UsersRed';
import './Header.scss'
import SideBar2 from './SideBar2';
import logo2 from './logo2.svg'

class H1 extends Component {
  constructor(){
    super();
    this.state ={
      showSlideMenu: false
    }
  }
  
  componentDidMount(){
    this.props.getUser()
  }
  
  
  showSlide = () => {
    this.setState({showSlideMenu: !this.state.showSlideMenu})
  }
  
  render() {

    return (
      <div className='nav'>
        <div className='ham'>
          <img src={logo2} className='logosvg' alt='hamburger'/>
          <button onClick={this.showSlide} className='slidebar'>thus si sis</button>
          {this.state.showSlideMenu ?(
                        <SideBar2
                        signOut={this.props.logout}
                        show={this.showSlide}
                        />):(null)}
          </div>
      <div className='title'><h1>CodeTribute</h1></div>
      <ul className='nav-ul'>
        <Link className='l1' to='/' ><li className='home'>HOME</li></Link>
        <Link className='l2' to='/create' ><li className='create'>POST A PROJECT</li></Link>
        {/* <Link className='l2' to='/profile/:id'><li>PROFILE</li></Link> */}
        <button className='signOut' onClick={() => this.props.logout()}>Sign Out</button>
      </ul>
      </div> 
    )
  }
}

const mapStateToProps = ({UsersRed}) => ({...UsersRed});

export default connect(mapStateToProps, {logout, getUser})(H1);