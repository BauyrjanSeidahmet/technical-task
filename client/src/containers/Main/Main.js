import { useEffect } from 'react';
import User from '../../components/User/User';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/actions/usersActions';
import FullWidthTextField from '../../components/InputItem/InputItem';
import { Button } from '@material-ui/core';
import './Main.css';

const Main = () => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const OnChangeInput = (e) => {
    console.log('value', e.target.value)
}

  return (
    <div className="Main">
      <div className='search'>
        <FullWidthTextField
          OnChangeInput={OnChangeInput}
        />
      <Button className="btn" variant="contained">Search</Button>
      </div>
      <div>
        {users?.map(user => {
          return <User
              key = {user.id}
              email = {user.email}
              age = {user.age}
            />
          })}
      </div>
    </div>
  );
}

export default Main;