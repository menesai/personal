import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getInfo} from '../../../ducks/crudRed';
import {Link} from 'react-router-dom'
import './Card.css'

 class Card extends Component {
     

    componentDidMount(){
        this.props.getInfo();
        // console.log(this.props.getInfo())
    }

  render() {
      let displayCard = this.props.info.map((card, i) => {
          return(
            <Link to={`/projects/${card.projects_id}`}>
              <div key={i}>
                <img className='card-img' src={card.img} alt='project'/>
                <h3>{card.name}</h3>
                <p>See More</p>
              </div>
            </Link>
          )
      })
    return (
      <div className='cards'>
        {displayCard}
        <h1>hello</h1>
      </div>
    )
  }
}

const mapStateToProps = ({crudRed}) => ({...crudRed});

export default connect(mapStateToProps, {getInfo})(Card)
