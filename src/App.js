import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Code from './pages/Editor/Code';

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
          <Route exact="true" path="/" element={<Home />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
