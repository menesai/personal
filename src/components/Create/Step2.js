import React, { Component } from 'react'
import './Step2.scss'

export class Step2 extends Component {

    continue = () =>{
        this.props.nextStep();
    }

    back = () =>{
        this.props.prevStep();
    }

  render() {
    const {img,description, handleInputss, goals, availability, skills } = this.props;

    return (
        <div className='outer-stp2'>
        <div className='step2'>
            <small className='stp2-img'>Image</small>
            <input
            // type='file'
            className='ipt-img'
            placeholder='img'
            value={img}
            onChange={handleInputss}
            name='img'
            />
            <small className='stp2-img'>Description</small>
            <textarea
            className='ipt-description'
            placeholder='description'
            value={description}
            onChange={handleInputss}
            name='description'
            />
            <small className='stp2-img'>Goals</small>
            <input
            className='ipt-goals'
            placeholder='goals'
            value={goals}
            onChange={handleInputss}
            name='goals'
            />
            <small className='stp2-img'>Availability</small>
            <input
            className='ipt-availability'
            placeholder='availability'
            value={availability}
            onChange={handleInputss}
            name='availability'
            />
            <small className='stp2-img'>Skills</small>
            <input
            className='ipt-skills'
            placeholder='skills'
            value={skills}
            onChange={handleInputss}
            name='skills'
            />
            <div className='step2-btns'>
            <button className='stp2-prev' onClick={this.back}>Previous</button>
            <button className='stp2-next' onClick={this.continue}>Next</button>
            </div>
        </div>
    </div>
    )
  }
}

export default Step2
