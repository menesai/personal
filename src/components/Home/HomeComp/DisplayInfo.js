import React from 'react'
import './DisplayInfo.scss'
import {Link} from 'react-router-dom';
import Edit from './Edit'

const DisplayInfo = (props) => {
  return (
    <div className='dispInfo-container'>
      <Edit
        update={props.update}
        id={props.id}
        newName={props.newName}
      />
      <div className='fmt-13'>
      <img className='disp-info-img' src={props.img} alt='project'/>
      <h1 className='Di-h1'>{props.name}</h1>
      <p className='Di-p1'>{props.details}</p>
      <p className='Di-p2'>{props.description}</p>  
      <hr/>  
      <div className='btm-disp'>
      <Link to={`/application/${props.id}`}><button className='vol'>Volunteer</button></Link>
        </div> 
        <div className='btm2-disp'>
        <h3 className='loc-disp'>Location:{' '}{props.location}</h3>
        <h3 className='leng-disp'>Libary: {''}{props.type}</h3>
          </div> 
      </div>
    <div className='outer-cont-2'>
    <div className='cont-2'>
      <h1 className='cont2-title'>The Right Volunteer</h1>
      <ul className='li-cont2'>
      <h3>Skills & Experience</h3>
      <li className='cont2-li'>{props.goals}</li>
      <li className='cont2-li'>{props.skills}</li>
      <h3>Availability</h3>
      <li className='cont2-li'>{props.availability}</li>
      <li className='cont2-li'>{props.length}</li>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default DisplayInfo;
