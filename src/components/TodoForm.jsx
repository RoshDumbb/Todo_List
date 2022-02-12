// import React,{useState} from 'react'

// function TododForm(props)
// {
//     const[input,setInput] = useState('');

//     const handlechange = e =>{
//       setInput(e.target.value);
//     }

//     const handleSubmit = e =>{
//         e.preventDefault();

//         // props.onSubmit({
//         //     id:Math.floor(Math.random()*10000),
//         //     text: input
//         // });
//         setInput('')
//     }
//     return(
//       <form className='todo-form' onSubmit={handleSubmit}>
//          <input type="text" placeholder='Add a todo' value={input}
//          name='text'
//          className='todo-input'
//          onChange={handlechange}
//          />
//          <button className='button'>Add tudo</button>
//       </form>
//     )
    
// }
// export default TododForm

import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;