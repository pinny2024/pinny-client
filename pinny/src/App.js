import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

import LoginPage from "./pages/login";
import Nav from "./pages/nav"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/nav" element={<Nav/>} />
      </Routes>
    </Router>
  )
}

export default App;
