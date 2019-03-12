import React, { Component } from 'react'
import './SignUp.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../ducks/UsersRed';
import {Redirect} from 'react-router-dom';

class SignUp extends Component {
  constructor(){
    super();
    this.state ={
      username: '',
      password: '',
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
    if (this.props.user.username) {
      return <Redirect push to="/" />;
    }
    const {username, password}= this.state

      // if(this.props.login){}
    return (
      <div className='container'>
        <div className='signUp'>
          <h1>Sign In</h1>
          <p>Log In Back to Your Account</p>
          <input className='ipt1' required placeholder='Enter Username' name='username' onChange={this.handleInput}/>
          <input className='ipt2' required placeholder='Enter Password' name='password' type='password' onChange={this.handleInput}/>
          <button className='btn-login' onClick={() => this.signIn(username, password)}>Log In</button>
        </div>
        <div className='display-reg'>
          <h1 className='pjname'>New to CodeTribute?</h1>
          <p>CodeTribute matches talented professionals with nonprofits to help them increase their capacity and achieve their missions.</p>
          <Link to='/register'><button className='btn-reg'>Create An Account</button></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({UsersRed}) => ({...UsersRed});

export default connect(mapStateToProps, {login})(SignUp)
