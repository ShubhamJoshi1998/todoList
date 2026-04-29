
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveToDoList = (e) => {
    let todoName = e.target.todoName.value;
    if (!todolist.includes(todoName)) {
      let finaltodoList = [...todolist, todoName];
      setTodolist(finaltodoList);
    } else {
      alert('Task Already Exist...')
    }

    e.preventDefault();
  }

  let list = todolist.map((value,index) => {
    return (
      <TodoListItems value={value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist}/>
    )
  })

  return (
    <div className="App">
      <h1> ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='todoName' /> <button>Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function TodoListItems({value,indexNumber,todolist,setTodolist}){
  let [status,setStatus] = useState(false);
  let checkStatus=()=>{
   setStatus(!status)
  }
  let deleteRow=()=> {
    let finalData = todolist.filter((v,i) => i !== indexNumber)
    setTodolist(finalData)
  }
  return(
    <li className={(status)?"completetodo" : ""} onClick={checkStatus}>{value}<span onClick={deleteRow}>&times;</span></li>
  )
}
