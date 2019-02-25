import React, { Component } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import {connect} from 'react-redux'
import {create} from '../../ducks/crudRed';
import './Create.scss'

class Create extends Component {
  constructor(){
    super();
    this.state = {
      step: 1,
      length: '', 
      location: '', 
      type: '', 
      goals: '', 
      description: '',
      details: '', 
      skills: '', 
      availability: '', 
      name: '', 
      img: ''
    }
  }


  createPost = (name, type, length, location, details, img, description, goals, availability, skills) => {
    this.props.create(name, type, length, location, details, img, description, goals, availability, skills)
  }

  nextStep = () => {
    const {step}=this.state;
    this.setState({
      step: step +1
    })
  }

  prevStep = () => {
    const {step}=this.state;
    this.setState({
      step: step -1
    })
  }

  handleInputss = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    const {step}=this.state;
    const {name, type, length, location, details, img, description, goals, availability, skills} = this.state;
    switch(step){
      case 1:
        return(
          <Step1
            nextStep={this.nextStep}
            name={name}
            type={type}
            length={length}
            location={location}
            details={details}
            prevStep={this.prevStep}
            handleInputss={this.handleInputss}
          />
        )
        case 2: 
          return(
            <Step2
            nextStep={this.nextStep}
            handleInputss={this.handleInputss}
            prevStep={this.prevStep}
            img={img}
            description={description}
            goals={goals}
            availability={availability}
            skills={skills}
            />
          )
          case 3: 
            return(
              <Step3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              img={img}
              description={description}
              goals={goals}
              availability={availability}
              skills={skills}
              name={name}
              type={type}
              length={length}
              location={location}
              details={details}
              add={this.createPost}
              />
            )
            default:
    }
  }
}

const mapStateToProps = ({crudRed}) => ({...crudRed});

export default connect(mapStateToProps, {create})(Create)
