import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../ducks/UsersRed';
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

  logOut = () => {
    this.props.logout()
    console.log(this.props.logOut)
  }

  showSlide = () => {
    this.setState({showSlideMenu: !this.state.showSlideMenu})
  }

  render() {
    return (
      <div className='nav'>
        <div className='ham'>
          <img src={logo2} className='logosvg' alt='hamburger'/>
          <button onClick={this.showSlide} className='slidebar'>thus si sis defjwf</button>
          {this.state.showSlideMenu ?(
                        <SideBar2
                        signOut={this.logOut}
                        show={this.showSlide}
                        />):(null)}
          </div>
      <div className='title'><h1>Title Of Project</h1></div>
      <ul className='nav-ul'>
        <Link className='l1' to='/' ><li className='home'>HOME</li></Link>
        <Link className='l2' to='/create' ><li className='create'>POST A PROJECT</li></Link>
        {/* <Link className='l4' to='/register' ><li className='register'>REGISTER</li></Link> */}
        <button className='signOut' onClick={() => this.logOut()}>Sign Out</button>
      </ul>
      </div> 
    )
  }
}

const mapStateToProps = ({UsersRed}) => ({...UsersRed});

export default connect(mapStateToProps, {logout})(H1);



  


//     render(){

//       return (
//         <div className='nav'>
//           <div className='ham'>
//           <img src={logo2} className='logosvg' alt='hamburger'/>
//           <button onClick={this.showSlide} className='slidebar'>thus si sis defjwf</button>
//           {this.state.showSlideMenu ?(
//                         <SideBar
//                         show={this.showSlide}
//                         />):(null)}
//           </div>
//         <div className='title'><h1>Title Of Project</h1></div>
//         <ul className='nav-ul'>
//           <Link className='l1' to='/' ><li className='home'>HOME</li></Link>
//           <Link className='l2' to='/create' ><li className='create'>POST A PROJECT</li></Link>
//           <Link className='l3' to='/signup' ><li className='signup'>SIGN IN</li></Link>
//           <Link className='l4' to='/register' ><li className='register'>REGISTER</li></Link>
//         </ul>
//         </div> 
//       )
//     }
// }

// export default H2