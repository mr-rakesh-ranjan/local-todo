import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './Components/AddTodo';
import { About } from './Components/About';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {Switch } from "react-router-dom";

function App() {
  // for checking json file is empty or not 
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }


  // fuctions for delete a todo log
  const onDelete = (todo) => {
    console.log("I am onDelete of todo ", todo); //debugging purpose
    // Deleting in React is not working in this way 
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    //for deleting in React 
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // localStorage.getItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  // function for add a todo  log
  const addTodo = (title, desc) => {
    console.log(" I am adding this todo ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title=" Todo Logs" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
{/* 
<--------------------------------- My Notes ------------------------------------->
    jsx - Javascript syntax extension

  className - keyword for jsx
  In react two types of component 
  i. class based component 
  ii. function based component   
  
*/}



