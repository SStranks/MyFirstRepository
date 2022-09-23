import { Route, Routes } from 'react-router-dom';
import { Home, Feedback, Roadmap } from '../pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
}

export default App;
