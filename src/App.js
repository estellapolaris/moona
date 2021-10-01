import React, {useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Song from './components/pages/Song';
import Fanart from './components/pages/Fanart';
import Footer from './components/Footer';
import Loader from './components/loader';
import { Helmet } from 'react-helmet';
import SchedulePage from './components/pages/SchedulePage';
import NewsPage from './components/pages/NewsPage';
import StreamPage from './components/pages/StreamPage';
function App() {
  
  return (
    
    <>
    <Helmet>
        <title>Moona Hoshinova Hololive-ID</title>
      </Helmet>
    <Router>
    <Navbar />
      <Switch>
        <Route path='/' exact component=
        {Home}/>
        <Route path='/fanart' exact component=
        {Fanart}/>
        <Route path='/song' exact component=
        {Song}/>
        <Route path='/schedule' exact component=
        {SchedulePage}/>
        <Route path='/news' exact component=
        {NewsPage}/>
        <Route path='/stream' exact component=
        {StreamPage}/>
      </Switch>
      <Footer />
      </Router>
      <Loader />
    </>
  );
}

export default App;
