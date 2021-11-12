import { useEffect, useState } from 'react';
import axios from './axiosApi'
import './App.css';
import { GET_USERS_QUERY } from './constants';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post('/', {
          query: GET_USERS_QUERY
        })
        setUsers(response.data.data.getAllUsers)
      } catch(e) {
        console.log(e);
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="App">
        {users.map(user => {
         return <User
            key = {user.id}
            email = {user.email}
            age = {user.age}
          />
        })}
    </div>
  );
}

export default App;
