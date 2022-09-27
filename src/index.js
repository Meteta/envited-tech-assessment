import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import CreatePage from './pages/create';
import EventPage from './pages/event';
import NoPage from './pages/404';
import Layout from './pages/layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="event" element={<EventPage/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);