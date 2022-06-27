import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.scss';
import LatestNews from "./pages/LatestNews";
import Home from "./pages/Home";
import LatestTopNews from "./pages/LatestTopNews"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/LatestMovies' element={<LatestNews/>} />
        <Route path='/LatestTopNews' element={<LatestTopNews/>} />
        <Route>404 page not found</Route>
      </Routes>
    </Router>
  );
}

export default App;
