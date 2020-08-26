import React from 'react';

import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

const App = () =>{
    const todoList = [
        {label:"Drink Coffe", important:false,id:1},
        {label:"Build React App", important:true,id:2},
        {label:"Drink Tea", important:false,id:3}
    ]
  return(
  <div className="todo-app">
      <AppHeader toDo = {1} done = {3}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>  
      <TodoList todos = {todoList}/>
      <ItemAddForm />
  </div>
  )
}

export default App;