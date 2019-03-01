import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import logo2 from './logo2.svg'
import SideBar from './SideBar'


class H2 extends Component{
  constructor(){
    super();
    this.state ={
      showSlideMenu: false
    }
  }

  showSlide = () => {
    this.setState({showSlideMenu: !this.state.showSlideMenu})
  }


    render(){

      return (
        <div className='nav'>
          <div className='ham'>
          <img src={logo2} className='logosvg' alt='hamburger'/>
          <button onClick={this.showSlide} className='slidebar'>thus si sis defjwf</button>
          {this.state.showSlideMenu ?(
                        <SideBar
                        show={this.showSlide}
                        />):(null)}
          </div>
        <div className='title'><h1>Title Of Project</h1></div>
        <ul className='nav-ul'>
          <Link className='l1' to='/' ><li className='home'>HOME</li></Link>
          <Link className='l2' to='/create' ><li className='create'>POST A PROJECT</li></Link>
          <Link className='l3' to='/signup' ><li className='signup'>SIGN IN</li></Link>
          <Link className='l4' to='/register' ><li className='register'>REGISTER</li></Link>
        </ul>
        </div> 
      )
    }
}

export default H2
