import React, { Component } from 'react';
import './Register.scss';
import {connect} from 'react-redux';
import {register} from '../../ducks/UsersRed';

class Register extends Component {
    constructor(){
      super();
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        accCreate: false,
        className: 'animated fadeOutRight'
      }
    }

    handleChange = (username, password, email, first_name, last_name) => {
      console.log(email, last_name, first_name)
      this.props.register(username, password, email, first_name, last_name)
      this.clearInputs();
      this.setState({accCreate: true})
      setTimeout(() => {
        this.setState({accCreate: false})
      }, 3000);
    }

    clearInputs = () => {
      this.setState({username: "", password: "", first_name: '', last_name: '', email: ''})
    }

    updateInput = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

  render() {
    const {username, password, email, first_name, last_name} =this.state
    return (
      <div className='reg-pg'>
    
      {this.state.accCreate
      ?
      <div className='alert1 animated fadeInRight' >
        <h4 className='reg-test'>Thankyou your account was created</h4>
      </div>
      :
      null
      }
        <div className='reg-title'>
          <h1 className='reg-h1'>Create your CodeTribute account</h1>
        </div>
        <div className='reg-inputs'>
          <div className='disp1'>
          <input
           className='reg-name' 
           type='text' 
           placeholder='Name' 
           name='first_name' 
           required 
           onChange={this.updateInput}/>
          <input 
          className='reg-Lname' 
          type='text' 
          placeholder='Last Name' 
          name='last_name' 
          required 
          onChange={this.updateInput}/>
          </div>
          <div className='disp2'>
          <input className='reg-email' type='text' placeholder='Email' name='email' required onChange={this.updateInput}/>
          <input className='reg-user' type='text' placeholder='Username' name='username' required onChange={this.updateInput}/>
          <input className='reg-pas' type='password' placeholder='Password' name='password' required onChange={this.updateInput}/>

          </div>
          <button className='reg-button' onClick={() => this.handleChange(username, password, email, first_name, last_name)}>Submit</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({UsersRed}) => ({...UsersRed});

export default connect(mapStateToProps, {register})(Register);
