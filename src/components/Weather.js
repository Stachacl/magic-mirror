import React, { useEffect } from 'react'
import { useState } from 'react';


   function Weather() {
    const [data,setData]=useState([]);

    const getData=()=>{
      fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect (()=>{
      getData()
    },[])
    return (
      <div className="App">
       {
         data && data.length>0 && data.map((name)=><p>{name}</p>)
       }
      </div>
    );
  }
  
  export default Weather;

  