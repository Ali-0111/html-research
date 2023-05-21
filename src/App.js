import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      {/* ******** main-head ***** */}
      <Header />
      <Routes>
        <Route path="/" element={<h3>Home page</h3>} />
        <Route path="/page-2" element={<h3>Page-2</h3>} />
      </Routes>
    </>
  );
}

export default App;
