import {Route, Routes, Navigate } from 'react-router-dom';

import Landing from './pages/landing';
import Signup from './componants/signup';
import Login from './componants/login';
import Questions from './pages/Questions';

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
        <Route path='/question' element={<Questions/>}/>
      </Routes>
    </div>
  );
}

export default App;
