function getId(state) {
	return state.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1 // looping through  all the todos and finding the max id
	// reduce gets initialized with -1
	// add one to the answer
}

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return { // don't have to return an object anymore
				// addig new todo at the top of the list
				// this will overwrite the todos in state that is passed in
				text: action.text,
				completed: false,
				id: getId(state) // to know the next id that is unique
			}

		case 'COMPLETE_TODO':
			return state.id === action.id ? Object.assign({}, state, {completed: !state.completed}) : state

		case 'DELETE_TODO':
			return state.id !== action.id

		case 'INVALIDATE_TODO':
			return Object.assign({}, state, {
				didInvalidate: true
			})

		case 'REQUEST_POSTS':
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})

		case 'RECEIVE_POSTS':
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.posts,
				lastUpdated: action.receivedAt
			})

		default:
			return state;
	}
}

let todoReducer = function(state = { isFetching: false, didInvalidate: false, items: [] }, action) {
	switch (action.type) {
		case 'GET_TODO':
			return {
				isFetching: state.isFetching,
				didInvalidate: state.didInvalidate,
				items: state.items.concat(action.todo)
			}

		case 'ADD_TODO':
		// combines objects into one object
		// takes the prooperties of other objects to the first object
		// taking the current state todos and appends
			return {
				isFetching: state.isFetching,
				didInvalidate: state.didInvalidate,
				items: [todo(state.items, action), ...state.items]
			}

			case 'COMPLETE_TODO':
				return {
					isFetching: state.isFetching,
					didInvalidate: state.didInvalidate,
					items: state.items.map((t) => { return todo(t, action) })
				}

			case 'DELETE_TODO':
				return {
					isFetching: state.isFetching,
					didInvalidate: state.didInvalidate,
					items: state.items.filter((t) => { return todo(t, action) })
				}

			case 'INVALIDATE_TODO':
			case 'RECEIVE_POSTS':
			case 'REQUEST_POSTS':
				return Object.assign({}, state, todo(state, action))
	      // return Object.assign({}, state, {
	      //   [action.todo]: todo(state[action.todo], action)
	      // }) // todo(state, action)
		default:
			return state;
	}
}

export default todoReducer
