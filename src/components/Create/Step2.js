import React, { Component } from 'react'
import './Step2.css'

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
            <input
            // type='file'
            className='ipt-img'
            placeholder='img'
            value={img}
            onChange={handleInputss}
            name='img'
            />
            <textarea
            className='ipt-description'
            placeholder='description'
            value={description}
            onChange={handleInputss}
            name='description'
            />
            <input
            className='ipt-goals'
            placeholder='goals'
            value={goals}
            onChange={handleInputss}
            name='goals'
            />
            <input
            className='ipt-availability'
            placeholder='availability'
            value={availability}
            onChange={handleInputss}
            name='availability'
            />
            <input
            className='ipt-skills'
            placeholder='skills'
            value={skills}
            onChange={handleInputss}
            name='skills'
            />
            
            <button className='stp-prev' onClick={this.back}>Previous</button>
            <button className='stp1-next' onClick={this.continue}>nextStep</button>
        </div>
    </div>
    )
  }
}

export default Step2
