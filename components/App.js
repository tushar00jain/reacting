import React, { Component } from 'react';
// import axios from 'axios';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect } from 'react-redux'; // creates a fucntion that can take in the component that we want to connect ot the store
// returns a new connected component
// listen to the changes in the provider
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/todo';
import { getTodos } from '../api/todos';
import 'babel-polyfill'

import UserInfo from './UserInfo';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.fetchPosts('todo');
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.selectedTodo !== this.props.selectedTodo) {
      const { dispatch, selectedTodo } = nextProps
      dispatch(fetchPosts(selectedTodo))
    }
  }

	componentWillUnmount() {
		// abort
	}

	render() {
		return (
			<div>
				<h1>My Todos</h1>
				{/*<UserInfo user={this.props.user} createNewUserId={this.props.actions.createNewUserId}/>*/}
				{/*<UserInfo user={this.props.user} actions={this.props.actions}/>*/}
				{/*<TodoInput dispatch={this.props.dispatch}/>*/}
				<TodoInput addTodo={this.props.actions.addTodo}/>
				{/*<TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>*/}
				<TodoList actions={this.props.actions} todos={this.props.todos}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state; // could only send a particular part of the state
}

// don't have to call dispatcher all the time
// all the actions get passed down as actions - don't have to call them with the dispatcher
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

// state gets passed down to all the child components
export default connect(mapStateToProps, mapDispatchToProps)(App)

// can also pass the dispatcher down to the children
