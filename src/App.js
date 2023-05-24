import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import StoreShower from './util/storeShower';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Page2 from './pages/page2/page2';

function App() {
  const navigate = useNavigate();
  StoreShower();
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
          <Route path="/page-2" element={<Page2 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
