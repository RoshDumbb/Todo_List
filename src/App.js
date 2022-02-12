import React from 'react';
import './App.css';
// import TododForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
 
       {/* <TododForm/> */}
       <TodoList/>
    
    </div>
  );
}

export default App;
