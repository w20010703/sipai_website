import logo from './logo.svg';
import './App.css';

import React from 'react'
import {
 BrowserRouter as Router,
 Routes,
 Route
} from "react-router-dom";

import MainPage from './containers/MainPage'
import InputWordPage from './containers/InputWordPage'
import LoadVideoPage from './containers/LoadVideoPage'
// import SharePostPage from './containers/SharePostPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/InputWordPage" element={<InputWordPage />} />
          <Route path="/LoadVideoPage" element={<LoadVideoPage />} />
          {/*<Route path="/SharePostPage" element={<SharePostPage />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
