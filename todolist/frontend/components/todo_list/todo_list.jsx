import React from 'react';
// Components
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import { fetchTodos, createTodo } from '../../actions/todo_actions';

class TodoList extends React.Component {

  render() {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={ receiveTodo } />
      )
    );

    return(
      <div>
        <ul className="todo-list">
          { todoItems }
        </ul>
        <TodoForm createTodo={ createTodo }/>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
}

export default TodoList;
