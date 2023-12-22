import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState, useEffect } from "react";  
import React from 'react';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(result => {
        setUsers(result.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);  

  return (
    <div className="App">
      {users.map(user => (<UserList key={user.id} user={user} />))}
    </div>
  );
}

export default App;
