function selectedTodo(state = 'reactjs', action) {
  switch (action.type) {
    case 'SELECT_TODO':
      return action.todo
    default:
      return state
  }
}
