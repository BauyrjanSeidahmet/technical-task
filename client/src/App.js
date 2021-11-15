import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from './containers/Main/Main';
import Register from './containers/Register/Register';

// const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
//   return isAllowed ?
//       <Route {...props} /> :
//       <Redirect to={redirectTo}/>
// };

function App() {

  return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route exact path='/register' element={<Register/>}/>
                  {/* <Route exact path='/register' render={() => <Register/>}/>
                  <Route exact path='/login' render={() => <Login/>}/>               
                  <ProtectedRoute
                        isAllowed={user}
                        redirectTo={"/login"}
                        path="/add"
                        exact
                        component={AddProduct}
                  />       */}
        </Routes>
  );
}

export default App;
