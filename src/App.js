import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    //      ****** Default page ******
    navigate('/');
  }, []);

  return (
    <>
      {/* *********** main-head ***** */}
      <Header />

      {/* *********** content for main ****** */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-2" element={<h3>Page-2</h3>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
