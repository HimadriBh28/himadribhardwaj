import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import GameWorld from "./pages/GameWorld";
import StagePage from "./pages/StagePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<GameWorld />} />
        <Route path="/stage/:stageId" element={<StagePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
