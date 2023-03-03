import AppDesign from '#Pages/app-design/AppDesign';
import GraphicDesign from '#Pages/graphic-design/GraphicDesign';
import Home from '#Pages/home/Home';
import WebDesign from '#Pages/web-design/WebDesign';
import { Route, Routes } from 'react-router-dom';

// TODO:  Add all z-index to control manager
// TODO:  Updates all img src attributes
// TODO:  // ✔  Solve aliasing for CSS
// ✔
// ✖

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/webdesign" element={<WebDesign />} />
      <Route path="/appdesign" element={<AppDesign />} />
      <Route path="/graphicdesign" element={<GraphicDesign />} />
    </Routes>
  );
}

export default App;
