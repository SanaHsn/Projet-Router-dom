import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Pays from './components/Pays.jsx';


function App() {
  

  const[data, setData]= useState([]);
  // useEffect(() => {
  //   axios.get("https://restcountries.com/v3.1/all")
  //     .then(response => {
  //       const sortedData = response.data.sort((a, b) => {
  //         return a.name.common.localeCompare(b.name.common);
  //       });
  //       setData(sortedData);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(all =>setData(all.data))
    .catch(error => console.error(error));
},[]);


  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/'element={<Home />}/ >
        <Route path='/:id' element={<Pays data={data} />} />

      </Routes>
      
    </div>
  );
}

export default App;
