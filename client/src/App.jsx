import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "../Router/pages/Layouts";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />} />
      </Routes>
    </BrowserRouter>
  );
}
