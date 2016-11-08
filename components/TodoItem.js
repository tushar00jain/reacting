import React, { Component } from 'react';
// import actions from '../redux/actions'

export default class TodoItem extends Component {

	handleComplete() {
		// this.props.dispatch(actions.completeTodo(this.props.todo.id))
		this.props.actions.completeTodo(this.props.todo.id)
	}

	handleDelete() {
		// this.props.dispatch(actions.deleteTodo(this.props.todo.id))
		this.props.actions.deleteTodo(this.props.todo.id)
	}

	render() {
		return (
				<tr>
					<td style={{textDecoration: this.props.todo.completed ? 'line-through' : 'none'}}>
						{this.props.todo.text}
					</td>
					<td>
						<div class="btn-group">
							<button class="btn btn-success" onClick={this.handleComplete.bind(this)}>Completed</button>
							<button class="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
						</div>
					</td>
				</tr>
		)
	}
}
