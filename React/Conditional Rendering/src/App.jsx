import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todoList,setTodoList]=useState([]);
  
  useEffect(() => { 
    const promises = []; 
    for(let i=1;i<30;i++){ 
        promises.push(fetch(`https://jsonplaceholder.typicode.com/todos/${i}`) 
        .then(response => response.json())); 
      } 
      Promise.all(promises).then(data => setTodoList(data)); 
  },[])
  const Todo=({todo})=>{
    return (
    <>
      <h4>{todo.id}</h4>
      <p>{todo.title}</p>
    </>
  )}
  return (
    <>
      <h1>Todo List</h1>
      {todoList.map(item=>{
        return (item.completed && <Todo key={item.id} todo={item}/>)
      })}
    </>
  )
}
export default App
