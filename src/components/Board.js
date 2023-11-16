import React, { Component, useState } from 'react'
import Square from './Square'
import "./board.css";

const Board = ({squares,onClick, status}) => {
  
 
 
  
 const renderSquare = (i) => {
    return( 
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
      />
 )
};

   return (
     <div>
       <div className='statue'>{status}</div>
       <div className='board-row'>
         {renderSquare(0)}
         {renderSquare(1)}
         {renderSquare(2)}
  
       </div>
       <div className='board-row'>
       {renderSquare(3)}
       {renderSquare(4)}
       {renderSquare(5)}
       </div>
       <div className='board-row'>
       {renderSquare(6)}
       {renderSquare(7)}
       {renderSquare(8)}
  
       </div>
     </div>
   )
};

  export default Board
    
    // render(){
    //   return {
        
    //   }
    // }



// const Board = () => {
//   const statue = "Next player: X,0"
//   const [square, setSquares] = useState(Array(9).fill(null))
//   const [xIsNext, setxIsNext] = useState(true);

//   const status = `Next player$(xIsNext ? 'X':'0'}`;
//   const handleClick =(i) => {
//     const newSquares = squares.slice();
//     newSquares[i] = xIsNext
//   }
// }
    


