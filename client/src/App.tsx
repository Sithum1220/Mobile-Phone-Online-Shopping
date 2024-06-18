import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./view/common/header/Header";

function App() {
  return (
   <BrowserRouter>
    <Header/>
   </BrowserRouter>
  );
}

export default App;
