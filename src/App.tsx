import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Login} from './components/Login/Login';
import Error404 from './components/page 404/Error404';
import {Profile} from './components/Profile/Profile';
import {Registration} from './components/Registration/Registration';
import {Password} from './components/Password/Password';
import {PasswordNew} from './components/PasswordNew/PasswordNew';
import {Test} from './components/Test/Test';
import {Navigate} from './components/Navigate/Navigate';


function App() {
  return (
    <div className="App">
      <Navigate/>
      <Routes>
        <Route path={'/'} element={<Profile/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/registration'} element={<Registration/>}/>
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/password'} element={<Password/>}/>
        <Route path={'/passwordNew'} element={<PasswordNew/>}/>
        <Route path={'/test'} element={<Test/>}/>
        <Route path={'/*'} element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
