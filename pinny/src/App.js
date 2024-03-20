import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

import LoginPage from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App;
