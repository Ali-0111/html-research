import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Code from '../../pages/Editor/Code';

export default function Routing() {
  return (
    <Routes>
      <Route exact="true" path="/" element={<Home />} />
      <Route path="/code" element={<Code />} />
    </Routes>
  );
}
