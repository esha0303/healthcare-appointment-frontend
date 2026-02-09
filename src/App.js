import React, { Suspense } from 'react';
   // import logo from './logo.svg';
   import './App.css';
   import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import Sign from './components/signup';
   import About from './about.js';
   // import Home from './home';
   import Main from './main';
   import Department from './components/department.js';
   import Contact from './components/contact.js';
   const Login=React.lazy(()=>import('./components/login.js'))
   const App=()=>{
   return(

   <>

   <div>
      <Router>
         <Suspense fallback={<h2>LOADING THE PAGE.................</h2>}>
         <Routes>
            

            {/* <Route path='/' element={<Home/>}></Route> */}
            <Route path='/' element={<Main/>}></Route>
            
            <Route path='/login' element={<Login/>}></Route>
            <Route path="/signup" element={<Sign/>}></Route>
            <Route path='/department' element={<Department />}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/home' element={<Main />}></Route>

            </Routes>

         </Suspense>
      </Router>
   </div>
   </>

   )}

   export default App;
