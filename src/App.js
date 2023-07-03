import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';

import Home from './home';
import NoPage from './Nopage';
import Register from './Register';
import Singup from './Singup';
import Login from './Loginpage';

import Dashborad from './dashborad';




import { useState } from 'react';

function App() {




  const [count, setCount] = useState({ num: 1, name: 'xyz' })



  const fun = () => {

    setCount({ num: '', name: '' })
  }


  return (
    <>









      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Singup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path='/dashboard' element={<Dashborad />} />


            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>




      {/* <p>{count.num} and {count.name}</p>

      <button onClick={fun}>button</button> */}
    </>
  );
}

export default App;
