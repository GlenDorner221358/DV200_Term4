import {Route, Routes, Navigate } from 'react-router-dom';

import Landing from './pages/landing';
import Signup from './components/signup';
import Login from './components/login';
import Profile from './pages/profile';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">
      <Routes>
        {user && <Route path='/' exact element={<Landing />} />}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' exact element={<Navigate replace to="/login" />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
