import About from '#Pages/about/About';
import AppDesign from '#Pages/app-design/AppDesign';
import Contact from '#Pages/contact/Contact';
import GraphicDesign from '#Pages/graphic-design/GraphicDesign';
import Home from '#Pages/home/Home';
import Locations from '#Pages/locations/Locations';
import WebDesign from '#Pages/web-design/WebDesign';
import { Navigate, Route, Routes } from 'react-router-dom';

// TODO:  Add 'skip-to' functionality - see proj#37
// TODO:  Sort out circles on backgrounds on mobile sized layout
// TODO:  Add all z-index to control manager
// TODO:  Complete tasks on readme: locations API. form error status.
// TODO:  // ✔  Sort form functionality and hover affecting vertical alignment of elements
// TODO:  // ✔  Updates all img src attributes
// TODO:  // ✔  Check all resizing/overflow on blocks
// TODO:  // ✔  Fix the images on locations page (zoom and crop for smaller screen sizes)
// TODO:  // ✔  Sort out hero mobile image
// TODO:  // ✔  Sort out mobile hamburger menu
// TODO:  // ✔  Sort out 'qualities' - has different grid layout on tablet home vs about pages
// TODO:  // ✔  Solve aliasing for CSS
// ✔
// ✖

// NOTE:  Could refactor some of the SASS for shared hero elements and layout potential.
// NOTE:  Could refactor negative margin on about page / make variable to hold -24px for use elsewhere

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
