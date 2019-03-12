// import React, { Component } from 'react'
// import {connect} from 'react-redux';
// import {getUser} from '../../../ducks/UsersRed';
// import axios from 'axios'
// import './Profile.css';

// class Profile extends Component {
//     constructor(){
//         super();
//         this.state = {
//             userPro: []
//         }
//     }

   

//   render() {
//       const showUser = this.state.userPro.map((el, i) => {
//           return (
//               <div key={i}> 
//                   <h1>{el.first_name}</h1>
//               </div>
//           )
//       })
//     return (
//       <div>
//        <div className='pro-pending'>
//           <h1>Pending Applications</h1>
//           <div className='proj-cont'>
//             <h3>React Project</h3>
            
//           </div>
//        </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = ({UsersRed}) => ({...UsersRed});

// export default connect(mapStateToProps, {getUser})(Profile);
