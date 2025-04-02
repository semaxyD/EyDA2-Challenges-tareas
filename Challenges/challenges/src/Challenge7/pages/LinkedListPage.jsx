import React, { useState } from "react";
import playlist from "../LinkedList"

const LinkedListPage = () =>{
    const [currentSong,setCurrentSong] = useState(playlist.current?.value || "No hay canciones en la playList")

    const handleNext = () =>{
        const nextSong = playlist.next();
        if (nextSong) setCurrentSong(nextSong);
    }

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1>🎵 Playlist</h1>
          <h2>{currentSong}</h2>
          <button onClick={handleNext}>⏭ Siguiente Canción</button>
        </div>
      );
}

export default LinkedListPage