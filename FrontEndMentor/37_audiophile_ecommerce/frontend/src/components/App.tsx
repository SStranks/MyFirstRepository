import Headphones from '#Pages/headphones/Headphones';
import Home from '#Pages/home/Home';
import { Route, Routes } from 'react-router-dom';

// // ✔ // ✖
// ✖ // DEBUG:  Various resizing on Home page: grid images max out at 1110px.
// ✖ // TODO:  Adjust various tags (p) into correct semantic header tags etc.
// ✖ // TODO:  Consolidate border-radius into variables definition.

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headphones" element={<Headphones />} />
    </Routes>
  );
}

export default App;
