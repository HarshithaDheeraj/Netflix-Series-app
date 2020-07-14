import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import "./index.css";

function ncard(val){
  return(
   <Card 
   imgsrc={val.imgsrc}
   key={val.id}
   
  title={val.title}
  sname={val.sname}
  link={val.link}/>
  );


}

ReactDOM.render(
  <>
  <h1>List of top Netflix Series</h1>
  {Sdata.map(ncard)}
   </>,
  document.getElementById('root')

);