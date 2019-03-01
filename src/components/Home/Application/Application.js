import React, { Component } from 'react'
import './Application.scss'
import axios from 'axios';
import Apply from './Apply/Apply';
import {connect} from 'react-redux';
import {getUser} from '../../../ducks/UsersRed';
// import {Link} from 'react-router-dom';

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
        return(
          <div>
            {prerequisites}
          </div>
        )
        // return this.props.UsersRed.user.username ?(
        //     <div>
        //       {prerequisites}
        //     </div>
        //   ) : (
        //     <div className='app-alert'>
        //       <h2>You Need To Be Logged In To Volunteer</h2>
        //       <Link to='/signup'>Sign up</Link>
        //       <Link to='/register'>Regeister</Link>
        //     </div>
        //   );
    }
  }

const mapStateToProps = state => state;


export default connect(mapStateToProps, {getUser})(Application);
