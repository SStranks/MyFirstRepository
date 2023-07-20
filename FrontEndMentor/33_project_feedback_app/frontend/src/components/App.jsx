import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import useRequests from '../hooks/useGetAllRequests';
import Toaster from '../lib/ReactHotToast';
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
      <Toaster />
    </UserProvider>
  );
}

export default App;
