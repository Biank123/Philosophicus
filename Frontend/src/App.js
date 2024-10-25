import React, { useState } from 'react';
import Landing from './components/LandingPage/Landing';
import LoginRegister from './components/UserPage/LoginRegister';
import Navbar from './components/LandingPage/Navbar';
import { Routes, Route } from 'react-router-dom';  
import AboutPage from './components/AboutPage/AboutPage';
import UserProfile from './components/UserPage/UserProfile';
import SelectProblem from './components/BooksPage/SelectProblem';
import SelectedProblemPage from './components/BooksPage/SelectProblemPage';
import PublishedEssays from './components/BooksPage/PublishEssays';
import FilterPage from './components/StudyPage/FilterPage';
import SpecificFilter from './components/StudyPage/SpecificFilter';
import ContentPage from './components/StudyPage/ContentPage';
import AlterPage from './components/StudyPage/AlterPage';
import ForumPage from './components/ForumPage/ForumPage';
import DirectoryPage from './components/DirectoryPage/DirectoryPage';
import ForgotPassword from './components/UserPage/ForgotPassword';
import ChangePasswordForm from './components/UserPage/ChangePasswordForm';

function App() {
  const [selectedProblem, setSelectedProblem] = useState(null);

  const handleSelectProblem = (problemId, navigate) => {
    fetch(`http://localhost:3001/problems/${problemId}`)
      .then(response => response.json())
      .then(data => {
        setSelectedProblem(data);
        navigate('/write');  // Navegación se maneja en SelectProblem
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
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/filter/:tipo" element={<SpecificFilter />} />
        <Route path="/content/:tipo/:valor" element={<ContentPage />} />
        <Route path="/filosofia" element={<AlterPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route 
          path="/select-problem" 
          element={<SelectProblem onSelect={handleSelectProblem} />} 
        />
        <Route 
          path="/write" 
          element={<SelectedProblemPage problem={selectedProblem} />} 
        />
        <Route path="/essays/published" element={<PublishedEssays />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePasswordForm />} />
      </Routes>
    </>
  );
}

export default App;
