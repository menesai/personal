import React, { Component } from 'react'
import axios from 'axios';
import DisplayInfo from './DisplayInfo';


class Details extends Component {
    constructor(){
      super();
      this.state ={
        projectInfo: [],
        newNamwe: ''
      }
    }

    componentDidMount(){
      axios
      .get(`/api/project/${this.props.match.params.id}`)
      .then(res => {
        console.log(res)
        this.setState({projectInfo: res.data})
      })
    }

    updateProject = (projects_id, newName) => {
      // e.preventDefault();
      //     this.props.updateInfo(this.props.project_id, this.state.updtName)
      //     console.log(this.props)
      axios
      .put(`/api/update/${projects_id}`, {newName})
      .then(res => {
        this.setState({projectInfo: res.data})
      })
    }

  render() {
    let moreDisplay = this.state.projectInfo.map((fact, i) => {
      return (
      <DisplayInfo
        key={i}
        name={fact.name}
        type={fact.type}
        length={fact.length}
        location={fact.location}
        details={fact.details}
        img={fact.img}
        description={fact.description} 
        goals={fact.goals}
        availability={fact.availability}
        skills={fact.skills}
        id={fact.projects_id} 
        update={this.updateProject}
        newName={this.state}
      />)
    })
    return (
      <div>
        {moreDisplay}
      </div>
    )
  }
}

export default Details
