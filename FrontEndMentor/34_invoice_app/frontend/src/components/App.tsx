import { Route, Routes } from 'react-router-dom';

function App (): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default App;