import React, { Component } from 'react'
// import CrudRed from '../../ducks/crudRed';
import {connect} from 'react-redux'
import {create} from '../../ducks/crudRed';
import './Create.css'

class Create extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  // componentDidMount(){

  // }

  createPost = (length, location, type, goals, description, details, skills, availability, name, img) => {
    this.props.create(length, location, type, goals, description, details, skills, availability, name, img)
  }


  render() {
    return (
      <div className='create-pg'>
        <h1>Posting Projects</h1>
      </div>
    )
  }
}

const mapStateToProps = ({crudRed}) => ({...crudRed});

export default connect(mapStateToProps, {create})(Create)
