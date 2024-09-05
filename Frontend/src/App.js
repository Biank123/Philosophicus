// import Landing from './components/LandingPage/Landing';
// import EssayTemplate from './components/BooksPage/EssayTemplate';
// import LoginRegister from './components/UserPage/LoginRegister';
// import Navbar from './components/LandingPage/Navbar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserProfile from "./components/UserPage/UserProfile";


function App() {
  return (
  //   <Router>
  //   <Navbar />
  //     <Routes>
  //       <Route path="/" element={<Landing />} />
  //       <Route path="/login" element={<LoginRegister />} />
  //       {/* <Route path="/profile" element={<UserProfile />} /> */}
  //       <Route path="/write" element={<EssayTemplate/>} />
  //     </Routes>
  // </Router>
  <UserProfile />
  );
}

export default App;
