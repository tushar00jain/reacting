// import React, { Component } from 'react';
//
// export default class UserInfo extends Component {
//
// 	handleNewId() {
// 		// dispatch and actions
// 		this.props.actions.createNewUserId()
// 		// console.log(this.props)
//
// 	}
//
// 	handleNewIdIfOdd() {
// 		this.props.actions.createNewUserIdIfOdd()
//
// 	}
//
// 	handleNewIdAsync() {
// 		this.props.actions.createNewUserIdAsync()
//
// 	}
//
// 	render() {
// 		return (
// 			<div>
// 				<div>username: {this.props.user.username}</div>
// 				<div>id: {this.props.user.id}</div>
// 				<div class="btn-group">
// 					<button class="btn btn-primary" onClick={this.handleNewId.bind(this)}>Update with random id</button>
// 					<button class="btn btn-primary" onClick={this.handleNewIdIfOdd.bind(this)}>Update only if odd</button>
// 					<button class="btn btn-primary" onClick={this.handleNewIdAsync.bind(this)}>Update async</button>
// 				</div>
// 			</div>
// 		)
// 	}
// }
