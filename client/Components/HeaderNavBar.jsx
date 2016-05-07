// import React from 'react';
//
// /* MUI lib files */
// import AppBar from 'material-ui/lib/app-bar';
// import IconButton from 'material-ui/lib/icon-button';
// import Avatar from 'material-ui/lib/avatar';
// import IconMenu from 'material-ui/lib/menus/icon-menu';
// import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
// import MenuItem from 'material-ui/lib/menus/menu-item';
// import RaisedButton from 'material-ui/lib/raised-button';
//
// export default class HeaderNavBar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   _handleLoginClick (e) {
//     e.preventDefault();
//     console.log('clicked');
//     let username = this.refs.username;
//     let password = this.refs.password;
//
//   }
//   render() {
//     const style = {
//       margin: 12,
//     };
//
//     return (
//       <AppBar
//     title="Title"
//
//     iconElementLeft={
//       <div>
//         <IconButton>
//           <Avatar
//             src='https://lh5.ggpht.com/0WtsR4_NKcbftR5KvnlQ9YYpkBsfglEKhsvBbe-PSOgWkuDWIw2DIUnkmbuWy7DYFQ=w300-rw'
//             backgroundColor='Color.1A237E' />
//         </IconButton>
//         <form action='https://slack.com/oauth/authorize'>
//           Login <input type='text' ref='username' placeholder='User Name' />
//           Password <input type='password' ref='password' placeholder='this is your password' />
//           <button type='submit'>Login</button>
//         </form>
//       </div>
//     }
//     iconElementRight={
//       <div>
//         <a href="https://slack.com/oauth/authorize?scope=incoming-webhook&client_id=11495581584.40629389573">
//           <img alt="Add to Slack" height="40" width="139"
//             src="https://platform.slack-edge.com/img/add_to_slack.png"
//             srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
//         </a>
//         <RaisedButton label="Signup" primary={true} style={style} />
//         <RaisedButton label="Login" onClick={this._handleLoginClick} primary={true} style={style} />
//         <RaisedButton label="Logout" primary={true} style={style} />
//       </div>
//     }
//   />
//     )
//   }
// }
// //
// // class LoginForm extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       username: '',
// //       password: ''
// //     }
// //   }
// //   render() {
// //     return (
// //
// //     )
// //   }
// // }
// // {<form onSubmit={(e) => e.preventDefault()}>
// //   <TextField
// //     hintText="Username"
// //     value={this.state.username}
// //     onChange={this.onUsernameChange}
// //   ><br />
// //   <TextField
// //     hintText="Password"
// //     type="password"
// //     value={this.state.password}
// //     onChange={this.onPasswordChange}
// //   ><br />
// //   <RaisedButton
// //     type="submit"
// //     label="Sign Up"
// //     onClick={this.onSignupSubmit}
// //   >
// // </form>
// // }
