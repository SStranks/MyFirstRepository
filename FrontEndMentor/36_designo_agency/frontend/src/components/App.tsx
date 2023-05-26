import About from '#Pages/about/About';
import AppDesign from '#Pages/app-design/AppDesign';
import Contact from '#Pages/contact/Contact';
import GraphicDesign from '#Pages/graphic-design/GraphicDesign';
import Home from '#Pages/home/Home';
import Locations from '#Pages/locations/Locations';
import WebDesign from '#Pages/web-design/WebDesign';
import { Navigate, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Home />} />
      <Route path="/webdesign" element={<WebDesign />} />
      <Route path="/appdesign" element={<AppDesign />} />
      <Route path="/graphicdesign" element={<GraphicDesign />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
