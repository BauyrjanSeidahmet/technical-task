import { useEffect } from 'react';
import User from '../../components/User/User';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/actions/usersActions';

const Main = () => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="Main">
        {users?.map(user => {
         return <User
            key = {user.id}
            email = {user.email}
            age = {user.age}
          />
        })}
    </div>
  );
}

export default Main;