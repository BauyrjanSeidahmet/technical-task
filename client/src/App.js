import React from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Login from './containers/Login/Login';
import Main from './containers/Main/Main';
import Register from './containers/Register/Register';

// const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
//   return isAllowed ?
//       <Route {...props} /> :
//       <Redirect to={redirectTo}/>
// };

function App() {

  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/login' element={<Login/>}/>               
                  {/* <ProtectedRoute
                        isAllowed={user}
                        redirectTo={"/login"}
                        path="/add"
                        exact
                        component={AddProduct}
                  />     */}
        </Routes>
    </Layout>
  );
}

export default App;
