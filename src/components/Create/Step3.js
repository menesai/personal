import React, { Component } from 'react'
import './Step3.css';

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
      <div className='stp3-conf'>
        <div className='stp3-outer'>
        <ul className='post-ul'>
            <li className='stp-li'>{name}</li>
            <li className='stp-li'>{type}</li>
            <li className='stp-li'>{length}</li>
            <li className='stp-li'>{location}</li>
            <li className='stp-li'>{details}</li>
            <li className='stp-li'>{img}</li>
            <li className='stp-li'>{description}</li>
            <li className='stp-li'>{goals}</li>
            <li className='stp-li'>{availability}</li>
            <li className='stp-li'>{skills}</li>
        </ul>
        </div>
        <button className='stp-prev' onClick={this.back}>Previous</button>
        <button onClick={() => add(name, type, length, location, details, img, description, goals, availability, skills)}>Add Post</button>
      </div>
    )
  }
}

export default Step3
