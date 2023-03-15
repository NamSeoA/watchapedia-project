import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TvPage from './pages/TvPage';
import TvDetail from './pages/TvDetail';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    // 상세 페이지 개발해야함
    <Router>
      <Routes>
        <Route path='/*' Component={MainPage}/>
        <Route path='/tv' Component={TvPage}/>
        <Route path='/movie/:id' Component={MovieDetail}/>
        <Route path='/tv/:id' Component={TvDetail}/>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
