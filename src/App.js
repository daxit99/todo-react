import './App.css';
import Header from "./MyComponents/header";
import  { Footer }  from "./MyComponents/Footer";
import  { Todos }  from "./MyComponents/Todos";
import  { AddTodo }  from "./MyComponents/AddTodo";
import React, { useState } from 'react';



function App() {
  const onDelete= (todo) =>{
    console.log("i am ondelete of todo",todo);

    setTodos(todos.filter((e)=>{
      return e!=todo;
    }));
  
  }
  const [todos, setTodos] = useState([

    {
      sno: 1,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum"
    },

    {
      sno: 2,
      title: "Lorem ipsum dolor sit lorem2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum2",
    },

    {
      sno: 3,
      title: "Lorem ipsum dolor sit lorem3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum3",
    },
  ])
  return (
    <>
      <Header title="MyTodosList" searchbar={false}/>
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
      
    </>
    

  );
}

export default App;
