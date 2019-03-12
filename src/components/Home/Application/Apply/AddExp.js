import React, { Component } from 'react'
import './AddExp.scss';
// import {connect} from 'react-redux';
// import {getUser} from ''

class AddExp extends Component {
    // componentDidMount(){
    //     th
    // }

  render() {
      console.log(this.props.org)
    return (
        <div className='outer-cont-exp'>
          <div className='cont-exp animated slideInUp'>
            <button className='exp-cancel' onClick={this.props.disp}>X</button>
            <h2 className='exp-title'>Add Experince</h2>
            <div className='exp-input1'>
                <small>Job Title or Degree</small>
             <input
              className='exp-ipt' 
              placeholder='Job Title or Degree'
              name='job_title'
              onChange={this.props.applyIpt}
              />
                <small> Organization Name</small>
             <input 
             className='exp-ipt' 
             placeholder='Organization Name' 
             name='organization_name'
             onChange={this.props.applyIpt}
             />   
            </div>
                 <small className='exp-small'>From</small>
            <div className='exp-input2'>
                <select className='exp-select' onChange={this.props.applyIpt} name='from_month'>
                    <option value='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                </select>
                <select className='exp-select' onChange={this.props.applyIpt} name='from_year'>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2013'>2013</option>
                    <option value='2012'>2012</option>
                    <option value='2011'>2011</option>
                    <option value='2010'>2010</option>
                    <option value='2009'>2009</option>
                    <option value='2008'>2008</option>
                    <option value='2007'>2007</option>
                    <option value='2006'>2006</option>
                    <option value='2005'>2005</option>
                    <option value='2004'>2004</option>
                    <option value='2003'>2003</option>
                    <option value='2002'>2002</option>
                    <option value='2001'>2001</option>
                    <option value='2000'>2000</option>
                </select>
            </div>
                 <small className='exp-small'>To</small>
            <div className='exp-input2'>
                <select className='exp-select' onChange={this.props.applyIpt} name='to_month'>
                    <option value='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                </select>
                <select className='exp-select' onChange={this.props.applyIpt} name='to_year'> 
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2013'>2013</option>
                    <option value='2012'>2012</option>
                    <option value='2011'>2011</option>
                    <option value='2010'>2010</option>
                    <option value='2009'>2009</option>
                    <option value='2008'>2008</option>
                    <option value='2007'>2007</option>
                    <option value='2006'>2006</option>
                    <option value='2005'>2005</option>
                    <option value='2004'>2004</option>
                    <option value='2003'>2003</option>
                    <option value='2002'>2002</option>
                    <option value='2001'>2001</option>
                    <option value='2000'>2000</option>
                </select>
            </div>
            <div className='exp-input3'>
                <small className='exp-des'>Description</small>
                <textarea 
                    className='exp-textarea'
                    name='bio_three'
                    onChange={this.props.applyIpt}
                />
            </div>
            <div className='addForm-exp'>
            <button className='exp-add' onClick={this.props.disp}>Add</button>
            </div>
         </div>
        </div>
    )
  }
}


export default AddExp;
