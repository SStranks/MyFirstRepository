import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import useRequests from '../hooks/useGetAllRequests';
import { Feedback, Home, Roadmap } from '../pages';

function App() {
  const [requests, isLoading, error] = useRequests();

  return (
    <UserProvider>
      <Routes>
        <Route
          path="/"
          element={<Home requests={requests} isLoading={isLoading} />}
        />
        <Route path="/feedback" element={<Feedback requests={requests} />} />
        <Route path="/roadmap" element={<Roadmap requests={requests} />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
