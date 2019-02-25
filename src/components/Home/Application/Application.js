import React, { Component } from 'react'
import './Application.scss'
import axios from 'axios';

class Application extends Component {
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
          console.log(res)
          this.setState({projectInfo: res.data})
        })
      }

  render() {
    return (
      <div>
        <h1>This is a applicatiion</h1>
      </div>
    )
  }
}

export default Application;
