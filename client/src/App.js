import React from 'react';
import { useSelector } from 'react-redux';
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Login from './containers/Login/Login';
import Main from './containers/Main/Main';
import Register from './containers/Register/Register';


function App() {

  const PrivateRoute = () => {
    const user = useSelector(state => state.users.user);
    return user ? <Outlet /> : <Navigate to="/login" />;
  }

  return (
    <Layout>
        <Routes>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/login' element={<Login/>}/>               
            <Route exact path='/' element={<PrivateRoute/>}>
              <Route exact path='/' element={<Main/>}/>
            </Route>  
        </Routes>
    </Layout>
  );
}

export default App;
