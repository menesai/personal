import React, { Component } from 'react'
import './Step1.scss';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/UsersRed';
import {Link} from 'react-router-dom';

export class Step1 extends Component {
    continue = () =>{
        // e.preventDefault();
        this.props.nextStep();
    }

    componentDidMount(){
        this.props.getUser();
      }
   

  render() {
      const {name,type, handleInputss, length, location, details } = this.props;
    //   const {add} = this.props;
    return this.props.user.username ?(
        <div className='outer-stp1'>
            <div className='step1'>
                <small className='lbl-name'>Name of The Project</small>
                <input
                className='ipt-name'
                placeholder='Name'
                value={name}
                onChange={handleInputss}
                name='name' 
                />

                <small className='lbl-type'>Libary</small>
                <select  placeholder='Type' className='ipt-type' name='type' value={type} onChange={handleInputss}>
                <option value='Default'>Default</option>
                <option value="Vue">Vue</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Other">Other</option>
                </select>
                
                <small className='lbl-type'>Length of The Project</small>
                <input
                className='ipt-length'
                placeholder='Length'
                value={length}
                onChange={handleInputss}
                name='length'
                />
                <small className='lbl-type'>Location</small>
                <input
                className='ipt-location'
                placeholder='Location'
                value={location}
                onChange={handleInputss}
                name='location'
                />
                <small className='lbl-type'>Project Details</small>
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
            </div>
        </div>
    ): (
        <div>
           <div className='app-alert'>
              <h1 className='app-h1'>You Need To Be User To Create A Project</h1>
              <div className='user-auth-links'>
              <Link to='/signup' ><button className='links-auth'>Sign In</button></Link>
              <Link to='/register'><button className='links-auth'>Regeister</button></Link>
              </div>
            </div> 
        </div>
    )
  }
}

const mapStateToProps = ({UsersRed}) => ({...UsersRed});

export default connect(mapStateToProps, {getUser})(Step1)
