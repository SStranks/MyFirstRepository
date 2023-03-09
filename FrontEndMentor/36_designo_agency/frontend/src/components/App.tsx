import About from '#Pages/about/About';
import AppDesign from '#Pages/app-design/AppDesign';
import Contact from '#Pages/contact/Contact';
import GraphicDesign from '#Pages/graphic-design/GraphicDesign';
import Home from '#Pages/home/Home';
import Locations from '#Pages/locations/Locations';
import WebDesign from '#Pages/web-design/WebDesign';
import { Route, Routes } from 'react-router-dom';

// TODO:  ! Sort out hero mobile image; maybe crop the original to extents of phone - has large wasted border, interfers with placement
// TODO:  Sort out mobile hamburger menu
// TODO:  Sort out 'qualities' - has different grid layout on tablet home vs about pages
// TODO:  Add all z-index to control manager
// TODO:  Updates all img src attributes
// TODO:  Check all resizing/overflow on blocks
// TODO:  // ✔  Solve aliasing for CSS
// ✔
// ✖

// NOTE:  Could refactor some of the SASS for shared hero elements and layout potential.

function App(): JSX.Element {
  return (
    <Routes>
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
