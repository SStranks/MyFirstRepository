import Home from '#Pages/home/Home';
import { Route, Routes } from 'react-router-dom';

// // ✔ // ✖
// ✖ // DEBUG:  Various resizing on Home page: grid images max out at 1110px.

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
