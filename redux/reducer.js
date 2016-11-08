// function getId(state) {
// 	return state.todos.reduce((maxId, todo) => {
// 		return Math.max(todo.id, maxId)
// 	}, -1) + 1 // looping through  all the todos and finding the max id
// 	// reduce gets initialized with -1
// 	// add one to the answer
// }
//
// let reducer = function(state, action) {
// 	switch (action.type) {
// 		case 'ADD_TODO':
// 		// combines objects into one object
// 		// takes the prooperties of other objects to the first object
// 			return Object.assign({}, state, {
// 				todos: [{
// 					// addig new todo at the top of the list
// 					// this will overwrite the todos in state that is passed in
// 					text: action.text,
// 					completed: false,
// 					id: getId(state) // to know the next id that is unique
// 				}, ...state.todos] // taking the current state todos and appends
// 			})
//
// 			case 'COMPLETE_TODO':
// 				return Object.assign({}, state, {
// 					todos: state.todos.map((todo) => {
// 						return todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo
// 					})
// 				})
//
// 			case 'DELETE_TODO':
// 				return Object.assign({}, state, {
// 					todos: state.todos.filter((todo) => {
// 						return todo.id !== action.id
// 					})
// 				})
//
// 			case 'CREATE_USER_ID':
// 				return Object.assign({}, state, {
// 					user: {
// 						username: state.user.username,
// 						id: action.id
// 					}
// 				})
//
// 		default:
// 			return state;
// 	}
// }
//
// export default reducer
