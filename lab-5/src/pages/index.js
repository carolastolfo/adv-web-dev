import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <h1>Movie list!</h1>
      <Movie/>
    </>
  );
}

function Movie(){
  var actionMovieList = ["Mad Max: Fury Road", "Drive", "Train to Busan", "Kill Bill", "Black Panther"];
  var adventureMovieList = ["The Lord of the Rings", "Dune", "The Hitchhiker's Guide to the Galaxy","The Secret Life of Walter Mitty"];
  var cyberpunkMovieList = ["Blade Runner", "The Matrix", "Ghost in the Shell", "Brazil"]
  const [currentActionMovie, setCurrentActionMovie] = useState(actionMovieList[0]); //trying to use useState from today's lecture
  const [currentAdventureMovie, setCurrentAdventureMovie] = useState(adventureMovieList[0]);
  const [currentCyberpunkMovie, setCurrentCyberpunkMovie] = useState(cyberpunkMovieList[0])
  const myBtnStyle = {backgroundColor: "#F082AC", borderStyle: "none", borderRadius: "8rem", color: "#FFFFFF", cursor: "pointer"};
 
  const updateActionMovie = () => {
    const nextActionMovie = actionMovieList.indexOf(currentActionMovie) + 1;  // here i have an issue because it won't go back to the beginning of the array. an extra click is needed
    setCurrentActionMovie(actionMovieList[nextActionMovie]);
  };

  const updateAdventureMovie = () => {
    const nextAdventureMovie = adventureMovieList.indexOf(currentAdventureMovie) + 1;  
    setCurrentAdventureMovie(adventureMovieList[nextAdventureMovie]);
  };

  const updateCyberpunkMovie = () => {
    const nextCyberpunkMovie = cyberpunkMovieList.indexOf(currentCyberpunkMovie) + 1;  
    setCurrentCyberpunkMovie(cyberpunkMovieList[nextCyberpunkMovie]);
  };

  return (
    <>
    <ul>
    <li><p>{currentActionMovie}</p><button style = {myBtnStyle} onClick = {updateActionMovie}>Get my next favorite action movie</button></li>
    <li><p>{currentAdventureMovie}</p><button style = {myBtnStyle} onClick={updateAdventureMovie}>Get my next favorite adventure movie</button></li>
    <li><p>{currentCyberpunkMovie}</p><button style = {myBtnStyle} onClick={updateCyberpunkMovie}>Get my next favorite cyberpunk movie</button></li>
    </ul>
    </>
  );
}
