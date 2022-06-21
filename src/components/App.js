import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getData } from '../redux/sportsSlice/sportsSlice';
import Sports from './Sports';
import Details from './Details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Sports />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
