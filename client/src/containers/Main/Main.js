import { useEffect, useState } from 'react';
import User from '../../components/User/User';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchUsers } from '../../store/actions/usersActions';
import FullWidthTextField from '../../components/InputItem/InputItem';
import { Button } from '@material-ui/core';
import './Main.css';

const Main = () => {
  const [userId, setUserId] = useState(null);
  const searchedUser = useSelector(state => state.users.searchedUser);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const OnChangeInput = (e) => {
    setUserId(e.target.value)
}

  const OnClickBtn = () => {
    dispatch(fetchUser(userId))
  }

  return (
    <div className="Main">
      <div className='search'>
        <FullWidthTextField
          OnChangeInput={OnChangeInput}
        />
      <Button variant="contained" onClick={OnClickBtn}>Search</Button>
      </div>
      {
        searchedUser ? 
        <User
        key = {searchedUser?.id}
        email = {searchedUser?.email}
        age = {searchedUser?.age}
      />
      : 
      null
      }
    </div>
  );
}

export default Main;