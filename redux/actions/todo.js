import { polyfill } from 'es6-promise';
import request from 'axios';
import { push } from 'react-router-redux';
import * as types from '../../constants';
import md5 from 'spark-md5';
import { getTodos } from '../../api/todos';
import fetch from 'isomorphic-fetch';
import promiseMiddleware from '../../api/promiseMiddleware';

let actions = {

	// select the todo to display
	selectTodo: function(todo) {
	  return {
	    type: 'SELECT_TODO',
	    todo: todo
	  }
	},

	// refresh button to update
	invalidateTodo: function(todo) {
		return {
			type: 'INVALIDATE_TODO',
			todo: todo
		}
	},

	// fetch the todo
	requestPosts: function(todo) {
		return {
			type: 'REQUEST_POSTS',
			todo: todo
		}
	},

	// network request comes through
	receivePosts: function(todo, json) {
		return {
			type: 'RECEIVE_POSTS',
	    todo: todo,
	    posts: json,
			// json.data.children.map(child => child.data),
	    receivedAt: Date.now()
		}
	},

	getTodo: function(todo) {
		// console.log(todo)
		return {
			type: 'GET_TODO',
			todo: todo
		}
	},

	addTodo: function(text) {
		return {
			type: 'ADD_TODO',
			text: text
		}
	},

	completeTodo: function(id) {
		return {
			type: 'COMPLETE_TODO',
			id: id
		}
	},

	deleteTodo: function(id) {
		return {
			type: 'DELETE_TODO',
			id: id
		}
	},

	fetchPosts: function(todo) {
  	return function (dispatch) {
    	dispatch(actions.requestPosts(todo))
	    return fetch(`http://localhost:3000/api/${todo}`)
	      .then(response => response.json())
	      .then(json =>
	        dispatch(actions.receivePosts(todo, json)
	      )
			)
	  }
	}
}
export default actions;
// store.dispatch(addTodo('some text'))
