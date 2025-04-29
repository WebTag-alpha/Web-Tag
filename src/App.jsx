import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import CreateProfile from './pages/CreateProfile.jsx';
import Profile from './pages/Profile.jsx';
import Analytics from './pages/Analytics.jsx';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route index    element={<Home/>}          />
        <Route path="create"  element={<CreateProfile/>}/>
        <Route path="profile" element={<Profile/>} />
        <Route path="analytics" element={<Analytics/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

