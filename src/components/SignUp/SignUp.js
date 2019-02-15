import React, { Component } from 'react'
import './SignUp.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../ducks/UsersRed';
// import Header from '../Header/Header'

class SignUp extends Component {
  constructor(){
    super();
    this.state ={
      username: '',
      password: ''
    }
  }

  signIn = ( username, password) => {
    // e.preventDefault()
    this.props.login(username, password)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({username: "", password: ""})
  }
  
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const {username, password}= this.state
      // if(this.props.login){}
    return (
      <div className='container'>
        <div className='signUp'>
          <h1>Sign In</h1>
          <p>Log In Back to Your Account</p>
          <input className='ipt1' placeholder='Enter Username' name='username' onChange={this.handleInput}/>
          <input className='ipt2' placeholder='Enter Password' name='password' onChange={this.handleInput}/>
          <button className='btn-login' onClick={() => this.signIn(username, password)}>Log In</button>
        </div>
        <div className='display-reg'>
          <h1 className='pjname'>New to Title Of Project</h1>
          <p>Title Of Project matches talented professionals with nonprofits to help them increase their capacity and achieve their missions.</p>
          <Link to='/register'><button className='btn-reg'>Create An Account</button></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({UsersRed}) => ({...UsersRed});

export default connect(mapStateToProps, {login})(SignUp)
