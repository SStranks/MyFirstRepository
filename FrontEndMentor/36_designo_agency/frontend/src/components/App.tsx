import Home from '#Pages/Home';
import { Route, Routes } from 'react-router-dom';

// TODO:  Add all z-index to control manager
// TODO:  Updates all img src attributes

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
