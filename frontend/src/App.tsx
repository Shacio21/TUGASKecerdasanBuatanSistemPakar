import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MachineInput from "./pages/MachineInput";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Landing Page */}
        <Route path="/input" element={<MachineInput />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


