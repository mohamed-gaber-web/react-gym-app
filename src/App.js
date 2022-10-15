import './App.css';

import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }}> 
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

/**
 * read topic 
 * Material UI - MUI
 * Box is wraper component for most css style is need
 * Stack Component Like Navbar
 * sx is a custom style css
 */