import React, { Component } from 'react'
import './Step1.scss';

export class Step1 extends Component {
    continue = () =>{
        // e.preventDefault();
        this.props.nextStep();
    }

   

  render() {
      const {name,type, handleInputss, length, location, details } = this.props;
    //   const {add} = this.props;
    return (
        <div className='outer-stp1'>
            <div className='step1'>
                <label className='lbl-name'><strong>Name of The Project</strong></label>
                <input
                className='ipt-name'
                placeholder='Name'
                value={name}
                onChange={handleInputss}
                name='name' 
                />

                <label className='lbl-type'> <strong>Type of Project</strong></label>
                <select  placeholder='Type' className='ipt-type' name='type' value={type} onChange={handleInputss}>
                <option value='Default'>Default</option>
                <option value="Vue">Vue</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Other">Other</option>
                </select>
                
                <label className='lbl-type'><strong>Length of The Project</strong></label>
                <input
                className='ipt-length'
                placeholder='Length'
                value={length}
                onChange={handleInputss}
                name='length'
                />
                <label className='lbl-type'><strong>Location</strong></label>
                <input
                className='ipt-location'
                placeholder='Location'
                value={location}
                onChange={handleInputss}
                name='location'
                />
                <label className='lbl-type'><strong>Project Details</strong></label>
                <textarea
                className='ipt-details'
                placeholder='Details'
                value={details}
                onChange={handleInputss}
                name='details'
                />
                    <div className='stp-next-div'>

                <button className='stp1-next' onClick={this.continue}>Next</button>
                    </div>
                {/* <button onClick={() => add(name,type,length, location, details)}>Add</button> */}
            </div>
        </div>
    )
  }
}

export default Step1
