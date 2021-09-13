import React from 'react'
import './Board.css';
import Tile from '../Tile';
import TileSelector from '../TileSelector';

const Board = (props) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }

  const arrayOfTiles= props.tiles.map((tile)=><Tile {...props} ></Tile>)

  return (
    <div className='Board' style={gridConfig}>
      {arrayOfTiles}
    </div>
  )
}

export default Board
