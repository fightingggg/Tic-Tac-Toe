import { useState } from 'react';
import './App.css';
import Board from './components/Board'
import Test from './Test';
import Square from './components/Square'
function App() {
  const [history,setHistory] = useState([{squares: Array(9).fill(null)}])
  const [stepNext, setStepNext] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  
const calculationWinner = (squares) => {
  const lines= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  for(let i=0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a]===squares[b]&&squares[a]===squares[c]){
      return squares[a];
    }
  }
  return null;
}
const current = history[stepNext];
const winner = calculationWinner(current.squares);

let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next player: ' + ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick =(i) => {

    const newHistory = history.slice(0, stepNext+1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();
    // 이미 선택된 칸이거나 게임에 승자가 있으면 클릭 무시
    if (current.squares[i] || calculationWinner(current.squares)) {
    return;
  }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...history, {squares: newSquares}]);
    setXIsNext(current => !current);
    setStepNext(newHistory.length)
  };

  const moves = history.map((step,move)=>{
    const desc = move ?
    'Go to move # ' + move :
    'Go to game start';
    return(
      <li key={move}>
        <button className='move_button' onClick={()=>jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  const jumpTo = (step) => {
    setStepNext(step);
    setXIsNext((step % 2) === 0);
  }
  

  return (
   <div className="game">
   
    <div className="game-boaed">
    <Board squares={current.squares} onClick={(i) => handleClick(i)}  />
    </div>
    <div className="game-info">
      <div className='status'>{status}</div>
      <ol className='gamebutton'>{moves}</ol>
      {/* <Square/> */}
      <div></div>
      
    </div>
   </div>
  )
}

export default App;
