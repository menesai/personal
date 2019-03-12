import React, { Component } from 'react'
import './Application.scss'
import axios from 'axios';
import Apply from './Apply/Apply';
import {connect} from 'react-redux';
import {getUser} from '../../../ducks/UsersRed';
import { Link} from 'react-router-dom';

class Application extends Component {
    constructor(){
        super();
        this.state ={
            applyInfo: []
        }
    }

    componentDidMount(){
        axios
        .get(`/api/project/${this.props.match.params.id}`)
        .then(res => {
          this.setState({applyInfo: res.data})
        })
        this.props.getUser();
      }

  render() {
    

    // console.log(this.props)
        let prerequisites = this.state.applyInfo.map((el, i) => {
          return(
              <Apply
                key={i}
                skills={el.skills} 
                goals={el.goals}
                name={el.name} 
              />
          )
        })
        return this.props.user.username ?(
            <div>
              {prerequisites}
            </div>
          ) : (
            <div className='app-alert'>
              <h1 className='app-h1'>You Need To Be Logged In To Volunteer</h1>
              <div className='user-auth-links'>
              <Link to='/signup' ><button className='links-auth'>Sign In</button></Link>
              <Link to='/register'><button className='links-auth'>Regeister</button></Link>
              </div>
            </div>
          );
    }
  }

const mapStateToProps = ({UsersRed}) => ({...UsersRed});


export default connect(mapStateToProps, {getUser})(Application);
