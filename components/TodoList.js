import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

	render() {
		return (
			<div>
				<table class="table table-striped">
					<tbody>
						<tr>
							<th>Tasks</th>
							<th>Actions</th>
						</tr>
							{
								this.props.todos.items.map((todo) => {
									// return <li key={todo.id}>{todo.text}</li>
									// return <TodoItem key={todo.id} todo={todo} dispatch={this.props.dispatch}/>
									return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
								}) // react always needs a unique key here
							}
					</tbody>
				</table>
			</div>
		)
	}
}

	// <tr ng-repeat="todo in todos" class="ng-scope">
	// 		<td>
	// 			 <input type="checkbox" ng-checked="todo.isCompleted" ng-click="onCompletedClick(todo)">
	// 		</td>
	// 		<td>
	// 			<span ng-if="!todo.isEditing" class="todos__task ng-binding ng-scope" ng-class="{'todos__task--completed': todo.isCompleted}">./createTask</span>
	// 			<form ng-submit="updateTask(todo)" class="ng-pristine ng-valid">
	// 			</form>
	// 		</td>
	// 		<td>
	// 			<button ng-if="!todo.isEditing" class="btn btn-info ng-scope" ng-click="onEditClick(todo)">Edit</button>
	// 			<button ng-if="!todo.isEditing" class="btn btn-danger ng-scope" ng-click="deleteTask(todo)">Delete</button>
	// 		</td>
	// 	</tr>
