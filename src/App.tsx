import { Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import AllAnimes from './pages/AllAnimes/AllAnimes';
import { Route, Routes } from 'react-router-dom';
import SelectRandomAnime from './pages/SelectRandomAnim/SelectRandomAnime';

function App() {
  return (
    <>
      <Box>
        <NavBar />
        <Routes>
          <Route path="/random" element={<SelectRandomAnime />} />
          <Route path="/" element={<AllAnimes />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
