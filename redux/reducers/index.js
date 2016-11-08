import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';
import message from './message';
import selectedTodo from './selectedTodo';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
	// map the prooperties to state
	todos: todoReducer,
	user: userReducer,
	message: message,
	routing: routerReducer,
	selectedTodo: selectedTodo
})

export default rootReducer
