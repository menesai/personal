import React, { Component } from 'react'
import './Apply.scss'
import AddExp from './AddExp';
import {connect} from 'react-redux';
import {createApply} from '../../../../ducks/ApplyRed'

class Apply extends Component {
  constructor(){
    super();
    this.state ={
      experienceMenu: false,
      bio_one: '',
      bio_two: '',
      job_title: '',
      organization_name: '',
      from_month: '',
      from_year:'',
      to_month: '',
      to_year: '',
      bio_three: ''
    }
  }

  displayMenu = () => {
    this.setState({experienceMenu: !this.state.experienceMenu})
  }

  addApplyInfo = (bio_one, bio_two, job_title, organization_name, from_month, from_year, to_month, to_year, bio_three) => {
    this.props.createApply(bio_one, bio_two, job_title, organization_name, from_month, from_year, to_month, to_year, bio_three);
}

handleApplyInput = (e) => {
  this.setState({[e.target.name]: e.target.value})
  console.log(e.target.name)
}

  render() {
  const {bio_one, bio_two, job_title, organization_name, from_month, from_year, to_month, to_year, bio_three} =this.state;

    return (
      <div>
          <div className='apply-header'>
          <h1 className='apply-header-h1'>Your Application</h1>
          </div>
          <div className='apply-cont'>
            <div className='apply-cont-box'>
                <h2 className='apply-items'>Prerequisites</h2>
                <p className='apply-items'>This opportunity has the following suggested prerequisites:</p>
                <ul className='apply-li'>
                    <li>{this.props.skills}</li>
                    <li>{this.props.goals}</li>
                </ul>

                    <div>
                     <h2 className='apply-items'>Tell us About Your Qualifications</h2>
                     <p className='apply-name'>How does your professional experience and background qualify you to work on a <strong>{this.props.name} </strong>?</p>
                     <textarea
                     className='apply-textarea'
                     name='bio_one'
                     onChange={this.handleApplyInput}
                     />
                    </div>

                    <div>
                      <h2 className='apply-items'>Tell The Organization Why You're Interested</h2>  
                      <p className='apply-name'>Describe why your passionte about this particular cause.</p>
                      <textarea
                      className='apply-textarea'
                      name='bio_two'
                      onChange={this.handleApplyInput}
                      />
                    </div>

                    <div>
                    <button onClick={this.displayMenu} className='menu'>Add Experince</button>
                    {this.state.experienceMenu
                      ?(
                        <AddExp
                        disp={this.displayMenu}
                        applyIpt={this.handleApplyInput}
                        />
                      )
                      :(
                     null
                    )
                    }
                    </div>
                    <button className='apply-sbmit' onClick={() => this.addApplyInfo(bio_one, bio_two, job_title, organization_name, from_month, from_year, to_month, to_year, bio_three)}>Submit</button>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({ApplyRed}) => ({...ApplyRed})

export default connect(mapStateToProps, {createApply})(Apply);
