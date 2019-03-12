import React from 'react'
import {Link} from 'react-router-dom';
import './Header.scss';

const SideBar2 = (props) => {
  console.log(props)
  return (
    <div className='slidebar-1 animated slideInLeft'>
            <button className='white' onClick={props.show}>X</button>
          <Link className='l1' to='/' ><h4 className='home'>HOME</h4></Link>
          <Link className='l2' to='/create' ><h4 className='create'>POST A PROJECT</h4></Link>
          <button className='white' onClick={() => props.signOut()}>Sign Out</button>
    </div>
  )
}

export default SideBar2
