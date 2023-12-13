import './App.css';
import Table from './components/Table';
import React, { useState, useEffect } from 'react';
import Table2 from './components/Table2';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [axiosData, setAxiosData] = useState([]);


  const fetchData = async () => {
    fetch('https://dummyjson.com/quotes')
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setError(error);
        }
      )
  }

  const axiosFun = async () => {
    let items = await axios.get('https://dummyjson.com/quotes');
    setAxiosData(items.data);
    // console.log(items.data.quotes);
  }

  useEffect(()=>{
    fetchData();
    axiosFun();
  },[])

  return (
    <div>
      <h2>API Calling Examples using fetch</h2>
      <Table tableData={data}/>
      <h2>API Calling Examples using Axios</h2>
      <Table2 tableData={axiosData}/>
    </div>
  );
}

export default App;
