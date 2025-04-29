import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Profile from './pages/Profile';
import Create from './pages/Create';
import { Web3Provider } from './context/Web3Context';

export default function App() {
  return (
    <Web3Provider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer />
      </Router>
    </Web3Provider>
  );
}

