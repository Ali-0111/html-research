import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Routing from './components/Navigation/Routing';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // ****** Default page ******
    navigate('/');
  }, []);

  return (
    <>
      {/* *********** main-head ***** */}
      <Header />

      {/* *********** content for main ****** */}

      <main>
        <Routing />
      </main>
    </>
  );
}

export default App;
