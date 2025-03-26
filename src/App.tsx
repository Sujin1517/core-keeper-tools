import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MapPage from "./pages/map/MapPage.tsx";

const App = () => {  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/map"/>} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
