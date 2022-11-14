import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import RegisterPage from './Components/Register/RegisterPage';
import Admin from './Components/Admin/Admin'
import Home from './Components/Home/Home'


import Navigation from './Components/Nav/Navigation';
import AddBook from './Components/AddBook/AddBook';
import Edit from './Components/Admin/Edit';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navigation />
      <Routes>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='signup' element={<RegisterPage/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='addbook' element={<AddBook/>}/>
      <Route path='edit' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
        </div>
  );
}

export default App;
