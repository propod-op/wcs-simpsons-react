import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [datas, setDatas] = useState({});
  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log('Ready to quote !');
        setDatas(data[0]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="container">
      <h1>{datas.character}</h1>
      <img className="picture" src={datas.image} alt={datas.name} />
      <button onClick={getQuote}>Get a new Quote !</button>
      <p>{datas.quote}</p>
    </div>
  );
}
