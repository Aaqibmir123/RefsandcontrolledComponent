import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import UsersList from './UsersList';
import { useState } from 'react';
function App() {

  const [userList,setUserList]=useState([]);
  const addUserHandler=(ename,eage,collagen)=>{
    
    setUserList((preUserList)=>{
      return [...preUserList, {name:ename,age:eage, collage:collagen}]
    })
  }



  return (
    <div className="App">
     <AddUser ondata={addUserHandler}/>
     <UsersList userss={userList} />
    </div>
  );
}

export default App;
