import React, { Component } from 'react'
// import {connect} from 'react-redux';
// import {getProject} from '../../../ducks/crudRed';
import axios from 'axios';
// import { get } from 'https';

class Details extends Component {
    constructor(){
      super();
      this.state ={
        projectInfo: []
      }
    }

    componentDidMount(){
      axios
      .get(`/api/project/${this.props.match.params.id}`)
      .then(res => {
        this.setState({projectInfo: res.data})
      })
    }

  render() {
    return (
      <div>
        <p>this is more details about project</p>
      </div>
    )
  }
}

// const mapStateToProps = ({crudRed}) => ({...crudRed});

export default Details
