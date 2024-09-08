import React, { useState } from 'react';
import Landing from './components/LandingPage/Landing';
import LoginRegister from './components/UserPage/LoginRegister';
import Navbar from './components/LandingPage/Navbar';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import UserProfile from "./components/UserPage/UserProfile";
import SelectProblem from './components/BooksPage/SelectProblem';
import SelectedProblemPage from './components/BooksPage/SelectProblemPage';

function App() {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const navigate = useNavigate();

  const handleSelectProblem = (problemId) => {
    // Fetch the problem details
    fetch(`http://localhost:3001/problems/${problemId}`)
      .then(response => response.json())
      .then(data => {
        setSelectedProblem(data);
        navigate('/write'); 
      })
      .catch(error => console.error('Error fetching problem:', error));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about" element={<AboutPage />} />
        <Route 
          path="/select-problem" 
          element={<SelectProblem onSelect={handleSelectProblem} />} 
        />
        <Route 
          path="/write" 
          element={<SelectedProblemPage problem={selectedProblem} />} 
        />
      </Routes>
    </>
  );
}

export default App;