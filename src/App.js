import React,{useState,useEffect,useCallback} from 'react';
import Display from './Display';

const App=()=>{
  let [responseData, setResponseData] = useState([]);
  const fetchData=async  ()=>{
    let response= await fetch("https://restcountries-v1.p.rapidapi.com/all",{"headers":{ "x-rapidapi-key": "253c4f9891mshfe135b08cfb2f3ep1aea0ajsn3288f51d1d46",
    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com"},"method":"GET"}
    ); 
    let Response=await response.json()
    setResponseData(Response)
    console.log(Response)
    // console.log(responseData[0].name)
  }
    
  
  return (<div className="App">
     <h1>displaying fetched data</h1>
     <button type='button' onClick={fetchData}>Click for Data</button>
    <table style={{"width":"90%","margin":"auto","border":"1px solid #ccc"}}>
      <thead>
         <tr >
         <th style={{"width":"100px"}}>Name</th>
         <th style={{"width":"100px"}}>population</th>
         <th style={{"width":"100px"}}>capital</th>
         <th style={{"width":"100px"}}>region</th>
         </tr>
      </thead>
      <tbody >
        {responseData.map((data,i)=><Display data={data}/>)}
      </tbody>
    </table>
    </div>
  );
}

export default App;


