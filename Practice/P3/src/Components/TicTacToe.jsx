import React, { useState, useEffect } from 'react'
import Borad from './Borad'
import GameOver from './GameOver'
import GameState from "./GameState"
import Reset from "./Reset"
const Play_X = "X";
const Play_O = "O";

const winningCombinations = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(titles,setStrikeClass,setGameState){
for (const { combo, strikeClass } of winningCombinations){
   const tileValue1 = titles[combo[0]];
   const tileValue2 = titles[combo[1]];
  const tileValue3 = titles[combo[2]];

  if (tileValue1 !== null &&
    tileValue1 === tileValue2 &&
    tileValue1 === tileValue3 ) {
    setStrikeClass(strikeClass)
    if (tileValue1 === Play_X) {
      setGameState(GameState.playerXWins);
    } else {
      setGameState(GameState.playerOWins);
    }
    return;
  }
}

const areAllTilesFilledIn = titles.every((titles) => titles !== null);
  if (areAllTilesFilledIn) {
    setGameState(GameState.draw);
  }



}

function TicTacToe() {
  const [titles, setTitles] = useState(Array(9).fill(null));
  const [playerTrun, setPlayerTrun] = useState(Play_X)
  const [strikeClass , setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);


  const handleTileClick = (index) => {

    if (gameState !== GameState.inProgress) {
      return;
    }

    if (titles[index] !== null) {
      return;
    }
    const newTile = [...titles];
    console.log(newTile);
    newTile[index] = playerTrun;
    setTitles(newTile)
    console.log(newTile[index]);
    if (playerTrun === Play_X) {
      setPlayerTrun(Play_O)
    } else {
      setPlayerTrun(Play_X)
    }
  }
  


  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTitles(Array(9).fill(null));
    setPlayerTrun(Play_X);
    setStrikeClass(null);
  };






useEffect(() => {
 checkWinner(titles,setStrikeClass,setGameState)
  
}, [titles])






  return (
    
    <>
    <div>TicTacToe</div>
    <Borad Player = {playerTrun} 
    titles ={titles} 
    onTileClick = {handleTileClick} 
    strikeClassPro = {strikeClass}  
    />
    <GameOver gameState = {gameState}/>
    <Reset gameState = {gameState} onReset={handleReset}/>
    </>
  )
}

export default TicTacToe