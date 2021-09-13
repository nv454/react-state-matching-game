import React from "react";

const GameContext = React.createContext(

    {
        numTiles:36,
        playing:false,
        handleNumTileCHange:()=>{},
        startPlaying:()=>{}

    }
);

export default GameContext;