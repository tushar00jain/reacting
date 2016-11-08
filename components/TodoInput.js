import React, { Component } from 'react';
// import actions from '../redux/actions' // because we passed down the dispatcher

export default class TodoInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			inputText: ''
		}
	}

	handleChange(event) {
		this.setState({
			inputText: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault() // prevent the page from refreshing on us
		// fire off an action
		// this.props.dispatch(actions.addTodo(this.state.inputText))
		this.props.addTodo(this.state.inputText)
	}

	render() {
		return (
			<div class="form-group">
				<form onSubmit={this.handleSubmit.bind(this)}>
						<input class="form-control input-lg" type="text" placeholder="What to do" value={this.state.inputText} onChange={this.handleChange.bind(this)}/>
						{/*<input class="form-control btn btn-danger btn-lg" type="submit" text="Submit"/>*/}
				</form>
			</div>
		)
	}
}
