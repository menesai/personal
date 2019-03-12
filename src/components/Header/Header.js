import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getUser} from '../../ducks/UsersRed';
import './Header.scss';
import H1 from './H1';
import H2 from './H2';

class Header extends Component {

  componentDidMount(){
    this.props.getUser();
  }

  render() {
    return this.props.user.username?(
        <H1
        />
        ) : (
          <div>
            <H2/>
          </div>
    )
  }
}

const mapStateToProps = ({UsersRed}) => ({...UsersRed});

export default connect(mapStateToProps, {getUser})(Header);
