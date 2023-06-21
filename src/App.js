import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import FeedbackList from './component/FeedbackList';
import FeedbackStats from './component/FeedbackStats';
import FeedbackForm from './component/FeedbackForm';

import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Card from './component/shared/Card';
import AboutPage from './component/pages/About';

import React from 'react'
import AboutIconLink from './component/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
    <Header text = "FeedBack UI" bgColor='red' textColorr='#ff6a59' />
      <div className='container'>
        <Routes>
          <Route exact path='/' element= {
            <>
            <FeedbackForm/>
            <FeedbackStats/>
            <FeedbackList />
            </>
          }>
          </Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
        </Card>
        <AboutIconLink />
      </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;