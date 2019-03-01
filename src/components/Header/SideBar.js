import React from 'react'
import {Link} from 'react-router-dom';

const SideBar = (props) => {
  return (
    <div className='slidebar-1 animated slideInLeft'>
            <button className='white' onClick={props.show}>X</button>
          <Link className='l1' to='/' ><h4 className='home'>HOME</h4></Link>
          <Link className='l2' to='/create' ><h4 className='create'>POST A PROJECT</h4></Link>
          <Link className='l3' to='/signup' ><h4 className='signup'>SIGN IN</h4></Link>
          <Link className='l4' to='/register' ><h4 className='register'>REGISTER</h4></Link>
    </div>
  )
}

export default SideBar
