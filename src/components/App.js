import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getData } from '../redux/sportsSlice/sportsSlice';
import { getDetails } from '../redux/detailSlice/detailSlice';
import Sports from './Sports';
import Details from './Details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    dispatch(getDetails());
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Sports />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
