import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Routing from './components/Navigation/Routing';
import { feedDataSet } from './Redux/codeSlice';
import dataSet from './util/dataSet';

function App() {
  const store = useSelector((store) => (store));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // ****** Default page ******
    navigate('/');
    dispatch(feedDataSet(dataSet));
  }, []);
  useEffect(() => {
    // ****** Default page ******
    console.log(store.filteredBySearch);
  }, [store]);
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
