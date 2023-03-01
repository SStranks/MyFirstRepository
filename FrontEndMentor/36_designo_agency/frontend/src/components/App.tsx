import Home from '#Pages/Home';
import { Route, Routes } from 'react-router-dom';

// TODO:  Updates all img src attributes

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
