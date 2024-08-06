import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./view/common/navbar/NavBar";
import {DefaultLayout} from "./view/common/DefaultContent/DefaultLayout";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/*"
                         Component={DefaultLayout}>
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
