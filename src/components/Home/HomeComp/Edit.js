import React, { Component } from 'react'
import './Edit.scss'
// import Axios from 'axios';
import {connect} from 'react-redux';
import {updateInfo} from '../../../ducks/crudRed'

export class Edit extends Component {
    constructor(){
        super();
        this.state={
            showEdit: false,
            updtName: '',
            updtType: '',
            updtLength: '', 
            updtLocation: '', 
            updtDetails: '', 
            updtImg: '', 
            updtDescription: '', 
            updtGoals: '', 
            updtAvailability: '', 
            updtSkills: ''
        }
    }

    displayEdit = () => {
        this.setState({showEdit: !this.state.showEdit})
      }

      updateProject = (e) => {
        const {updtName, updtType, updtLength, updtLocation, updtDetails, updtImg, updtDescription, updtGoals, updtAvailability, updtSkills} =this.state
        e.preventDefault();
            this.props.updateInfo(this.props.id, updtName, updtType, updtLength, updtLocation, updtDetails, updtImg, updtDescription, updtGoals, updtAvailability, updtSkills)
            console.log(this.props)
      }
      
      handleUpdate = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
    
  render() {
      console.log(this.props)
    return (
      <div className=''>
        <button onClick={this.displayEdit}>.</button>
       {this.state.showEdit
       ?(
       <div className='outer-edit'>
        <div className='inner-edit'>
            <button onClick={this.displayEdit}>X</button>
            <form onSubmit={(e) => this.updateProject(e)}>
                <input
                placeholder='Name'
                name='updtName'
                required
                // value={this.props.newName}
                onChange={this.handleUpdate}
                />
                <input
                required
                placeholder='Type'
                name='updtType'
                // value={this.state.updtType}
                onChange={this.handleUpdate}
                />
                 <input
                required
                placeholder='Length'
                name='updtLength'
                // value={this.state.updtType}
                onChange={this.handleUpdate}
                />
                 <input
                required
                placeholder='Location'
                name='updtLocation'
                // value={this.state.updtType}
                onChange={this.handleUpdate}
                />
                <input
                required
                placeholder='Details'
                name='updtDetails'
                // value={this.state.updtType}
                onChange={this.handleUpdate}
                />
                 <input
                required 
                placeholder='Img'
                name='updtImg'
                // value={this.state.updtType}
                onChange={this.handleUpdate}
                />
                 <input
                required 
                placeholder='Description'
                name='updtDescription'
                // value={this.state.updtType}
                onChange={this.handleUpdate}
                />
                 <input
                required 
                placeholder='Goals'
                name='updtGoals'
                // value={this.state.updtType}
                onChange={this.handleUpdate}
                />
                  <input
                required  
                placeholder='Availability'
                name='updtAvailability'
                // value={this.state.updtType}
                onChange={this.handleUpdate}
                />
                 <input
                required 
                placeholder='Skills'
                name='updtSkills'
                // value={this.state.updtType}
                onChange={this.handleUpdate}
                />
                <input type='submit' value="Submit"/>
            </form>
        </div>
       </div>
        ):(null)}
      </div>
    )
  }
}

const mapStateToProps = ({crudRed}) => ({...crudRed});


export default connect(mapStateToProps, {updateInfo})(Edit);
