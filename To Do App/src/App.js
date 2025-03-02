import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, {useState, useEffect}  from 'react';
import ToDoList from './components/TodoList';

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    
       
    useEffect(() => {
        getLocalTodos();
    }, [])


     useEffect(() => {
        filterHandler(todos);
        saveLocalTodos();
    }, [todos, status]);//eslint-disable-line

     
      

    const filterHandler = () => {
       switch(status){
         case "completed":
          setFilteredTodos(todos.filter(todo => todo.completed === true));
           break;
           case "uncompleted":
               setFilteredTodos(todos.filter(todo => todo.completed === false));
          
          default:
            setFilteredTodos(todos);
            break;
       }
    }

      //save a local storage
      const saveLocalTodos = () => {
         localStorage.setItem('todos', JSON.stringify(todos));
      }

      const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]));
      
        }else{
          setTodos(JSON.parse(localStorage.getItem('todos')));
        }
      }

  return (
    <div className="App">
     <header>
      <h1>My ToDo List</h1>
     </header>
     <Form
     inputText ={inputText}
     setInputText={setInputText}
     todos = {todos}
     setTodos ={setTodos}
     setStatus={setStatus}
     />
     <ToDoList 
     todos={todos}
     setTodos={setTodos}
     filteredTodos={filteredTodos}
     />
    </div>
  );
}

export default App;
