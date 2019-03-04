import React, { Component } from 'react'
import './HomeHeader.scss';
import {connect} from 'react-redux'
import {getInfo} from '../../../ducks/crudRed'

class HomeHeader extends Component {
  constructor(){
    super();
    this.state ={
      typepj: ''
    }
  }

  componentDidMount(){
    this.props.getInfo();
  }

  handleType = (val) => {
    this.setState({typepj: val})
  }


  render() {
    // let filterType = this.props.getInfo.filter(name => {

    // })

    return (
      <div className='homePg'>
        {/* <div className='home-img'/> */}
          <div className='home-filter'>
            <div className='home-title'>
             <h1 className='home-head-h1'>Title Of Project </h1>
            </div>
              <div className='home-header-info'>
               <p className='home-head-p'>A collection of websites and applications using the React or React Native JavaScript library.</p>
              </div>
          <div className='home-select'>
            <select className='h-select' onChange={(e) => this.handleType(e.target.value)} >
              <option>What are you good?</option>
              <option>Vue</option>
              <option>React</option>
              <option>Angular</option>
              <option>Other</option>
            </select>
            <button className='h-header-btn'>Search</button>
          </div>
        </div>
        
       </div>
    )
  }
}

const mapStateToProps = ({crudRed}) => ({...crudRed});

export default connect(mapStateToProps, {getInfo})(HomeHeader);
