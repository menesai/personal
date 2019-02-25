import React, { Component } from 'react'
import './Step3.scss';
import {Link} from 'react-router-dom';

class Step3 extends Component {

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    

  render() {
    const {name, type, length, location, details, img, description, goals, availability, skills} = this.props;
    // console.log(this.props)
    const {add} = this.props;
    return (
      <div className='stp3-cont'>
        <div className='stp3-outer'>
        <ul className='post-ul'>
            <img className='stp-li-img' src={img} alt='preview'/>
            <div className='li-step3'>
            <li className='stp-li'>{name}</li>
            <li className='stp-li'>{type}</li>
            <li className='stp-li'>{length}</li>
            <li className='stp-li'>{location}</li>
            <li className='stp-li'>{goals}</li>
            <li className='stp-li'>{availability}</li>
            <li className='stp-li'>{skills}</li>
            </div>
            <li className='stp-li'>{description}</li>
            <li className='stp-li'>{details}</li>
        </ul>
        <div className='stp3-btns'>
        <button className='stp-prev' onClick={this.back}>Previous</button>
        <Link to='/'><button className='stp3-add' onClick={() => add(name, type, length, location, details, img, description, goals, availability, skills)}>Add Post</button></Link>
        </div>
        </div>
      </div>
    )
  }
}

export default Step3
