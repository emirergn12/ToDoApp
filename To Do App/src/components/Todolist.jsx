import React from 'react'
import Todo from './To.Do'

function Todolist({todos, setTodos, filteredTodos}) {
  return (
    <div>
        <div className="todo-container"></div>
        <ul className ="todo-list"></ul>
            {todos.map((todo) => (
                <Todo
                text= {todo.text}
                key ={todo.id}   
                todos={todos}   
                setTodos={setTodos}  
                todo={todo}      
                />
            ))}


          
    </div>
  )
}

export default Todolist