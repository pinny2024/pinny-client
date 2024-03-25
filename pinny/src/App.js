import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

import LoginPage from "./pages/login";
import HomePage from "./pages/home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </Router>
  )
}

export default App;
