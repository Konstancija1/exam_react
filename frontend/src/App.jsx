//app//
import React, { useState } from 'react';
import './App.css';
import RegistrationForm from '../RegistrationForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className='App'>
      <RegistrationForm setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
