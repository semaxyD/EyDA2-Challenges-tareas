import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import LinkedListPage from "./pages/LinkedListPage";
import DoublyLinkedListPage from "./pages/DoublyLinkedListPage";

function App7(){
    return (
        <Router>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>🔗 React Linked Lists</h1>
            <nav>
              <Link to="/linked-list"><button>🎵 Playlist</button></Link>
              <Link to="/doubly-linked-list"><button>🌍 Historial</button></Link>
            </nav>
            <Routes>
              <Route path="/linked-list" element={<LinkedListPage />} />
              <Route path="/doubly-linked-list" element={<DoublyLinkedListPage />} />
            </Routes>
          </div>
        </Router>
      );
}

export default App7