// import React, { useState } from 'react';
// import TododForm from './TodoForm';

// function TodoList() {

//  const[todos,setTodos] = useState([]);

//  const addTodo =(todo)=>{
//      if(!todo.text || /^\s*$/.test(todo.test)){
//          return
//      }

//      const newTodos = [todo, ...todos]

//      setTodos(newTodos)

//  }

//   return (
//     <div>
//     <h1>Fill the List</h1>
//     <TododForm onSubmit = {addTodo}/>
//    </div>
//   );
  
// }

// export default TodoList;
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Todo...</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;