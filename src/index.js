import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from "./Card";
import Brands from "./Brands";

import {BrowserRouter, Link,Switch,Route} from "react-router-dom";




console.log(Brands[0])

// const About = () =>{
//   return(
//       <h1>hello</h1>
//   );
// };

// const Home = () =>{
//   return(
//       <h1>Home</h1>
//   );
// };


const icon={
  fontSize:"5remm"
}











ReactDOM.render(

  <BrowserRouter>
  <>
  

  
  
  <div className="link1">
  <Link to="/about" >Show my all polls </Link> <br />
  <Link to="/hello">Home</Link>
</div>

  <div className="mainDiv">
  
  <Switch>
  <Route path="/about">

  {Brands.map((val)=>{
    return(
      <Card name={val.name}
    model = {val.model}
    desc = {val.desc}
  />
    );
  })};
  </Route>

  <Route exact path="/hello">
 <h1    class="animate__animated animate__zoomInDown" id="head">hello <br /> welcome to my poll system  </h1>
 

  </Route>

  </Switch>

  </div>

  
   </>
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
