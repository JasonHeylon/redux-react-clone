import React from "react";

import { connect } from "redux-react-clone";
import { addTodo, removeTodo } from "./actions";

const Todo = ({ todo, onDelete }) => {
  return (
    <div>
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>x</button>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoTitle: ""
    };
  }

  handleAddButtonClick = () => {
    const { newTodoTitle } = this.state;
    const { addTodo } = this.props;

    addTodo(newTodoTitle);
    this.setState({ newTodoTitle: "" });
  };

  render() {
    const { title, todos, removeTodo } = this.props;
    const { newTodoTitle } = this.state;

    return (
      <div>
        <h1>{title}</h1>

        <div>
          <input
            type="text"
            value={newTodoTitle}
            onChange={e => this.setState({ newTodoTitle: e.target.value })}
          />
          <button onClick={this.handleAddButtonClick}>add</button>
        </div>

        <section>
          <ul>
            {todos.map(todo => (
              <Todo key={todo.id} todo={todo} onDelete={removeTodo} />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default connect(App)(
  (state, ownProps) => {
    return {
      ...ownProps,
      todos: state.todos
    };
  },
  {
    addTodo,
    removeTodo
  }
);
