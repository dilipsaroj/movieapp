import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './style.css';
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Playlist from './Pages/Playlist';
import Movie from './Pages/Movie';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/movie" element={<Movie />} />
          </Routes>
        </Sidebar>  
      </BrowserRouter>
    </div>
  );
}

export default App;
