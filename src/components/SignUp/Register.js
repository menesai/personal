import React, { Component } from 'react';
import './Register.css';
// import axios from 'axios';
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
        accCreate: false
      }
    }

    handleChange = (username, password, email, first_name, last_name) => {
      console.log(email, last_name, first_name)
      this.props.register(username, password, email, first_name, last_name)
      this.clearInputs();
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
        <div className='reg-title'>
          <h1 className='reg-h1'>Create Your TITLE Account</h1>
        </div>
        <div className='reg-inputs'>
          <input className='reg-name' placeholder='Name' name='first_name' onChange={this.updateInput}/>
          <input className='reg-Lname' placeholder='Last Name' name='last_name' onChange={this.updateInput}/>
          <input className='reg-email' placeholder='Email' name='email' onChange={this.updateInput}/>
          <input className='reg-user' placeholder='Username' name='username' onChange={this.updateInput}/>
          <input className='reg-pas' placeholder='Password' name='password' onChange={this.updateInput}/>
          <button className='reg-button' onClick={() => this.handleChange(username, password, email, first_name, last_name)}>Submit</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({UsersRed}) => ({...UsersRed});

export default connect(mapStateToProps, {register})(Register);
