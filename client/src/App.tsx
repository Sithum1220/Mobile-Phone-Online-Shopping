import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {NavBar} from "./view/common/navbar/NavBar";

function App() {
  return (
      <div>
          <BrowserRouter>
              <NavBar />
          </BrowserRouter>
      </div>
  );
}

export default App;
