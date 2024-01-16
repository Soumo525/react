import React from "react";
import Tile from "./Tile";
import Strike from "./Strike";

function Borad({ titles, onTileClick, Player, strikeClassPro }) {
  return (
    <div className="board">
      <Tile
        PlayerHover={Player}
        onClick={() => onTileClick(0)}
        vlaueItem={titles[0]}
        className="right-border bottom-border"
      />
      <Tile
        PlayerHover={Player}
        onClick={() => onTileClick(1)}
        vlaueItem={titles[1]}
        className="bottom-border right-border"
      />
      <Tile
        PlayerHover={Player}
        onClick={() => onTileClick(2)}
        vlaueItem={titles[2]}
        className="bottom-border"
      />
      <Tile
        PlayerHover={Player}
        onClick={() => onTileClick(3)}
        vlaueItem={titles[3]}
        className="right-border bottom-border"
      />
      <Tile
        PlayerHover={Player}
        onClick={() => onTileClick(4)}
        vlaueItem={titles[4]}
        className="right-border bottom-border"
      />
      <Tile
        PlayerHover={Player}
        onClick={() => onTileClick(5)}
        vlaueItem={titles[5]}
        className="bottom-border"
      />
      <Tile
        PlayerHover={Player}
        onClick={() => onTileClick(6)}
        vlaueItem={titles[6]}
        className="right-border "
      />
      <Tile
        PlayerHover={Player}
        onClick={() => onTileClick(7)}
        vlaueItem={titles[7]}
        className="right-border "
      />
      <Tile
        PlayerHover={Player}
        onClick={() => onTileClick(8)}
        vlaueItem={titles[8]}
      />
      <Strike strike = {strikeClassPro} />
    </div>
  );
}

export default Borad;
