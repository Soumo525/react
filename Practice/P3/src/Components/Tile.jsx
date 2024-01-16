import React from 'react'

function Tile({className , vlaueItem , onClick,  PlayerHover }) {
  let hoverClass = null;
  if (vlaueItem == null && PlayerHover != null) {
    hoverClass = `${PlayerHover.toLowerCase()}-hover`
  }
  return (
    <div  onClick = {onClick} 
    className={`tile ${className} ${hoverClass}`}>
    {vlaueItem}</div>
  )
}

export default Tile