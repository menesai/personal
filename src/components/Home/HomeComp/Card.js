import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getInfo, deleteInfo} from '../../../ducks/crudRed';
import {Link} from 'react-router-dom'
import './Card.scss';
import HomeHeader from './HomeHeader'

 class Card extends Component {
     constructor(){
       super();
       this.state ={
         search: ''
       }
     }

    componentDidMount(){
        this.props.getInfo();
    //     this.props.getUser();
    //     console.log(this.props.getUser())
    }

    handleSearch = (filter) => {
      this.setState({search: filter})
    }

  render() {
      let displayCard = this.props.info.filter((el, i) => {
        return el.type.includes(this.state.search)
      }).map((card, i) => {
          return(
              <div key={i} className='card-info'>
                <Link className='card-link' to={`/projects/${card.projects_id}`}><img className='card-img' src={card.img} alt='project'/></Link>
                <div className='card-container'>
                <Link className='card-link' to={`/projects/${card.projects_id}`}><h2 className='card-text'>{card.name}</h2></Link>
                <Link className='card-link' to={`/projects/${card.projects_id}`}><p className='card-text'>See More</p></Link>
                </div>
                <button onClick={() => this.props.deleteInfo(card.projects_id)}></button>
              </div>            
          )
        })
        return (
        <div>
         <HomeHeader
          search={this.handleSearch}
         />
        <div className='cards'>
          {displayCard}
        </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  const {info} = state.crudRed
  // const {user}= state.UsersRed
    return{info};
 };

export default connect(mapStateToProps, {getInfo, deleteInfo})(Card)
