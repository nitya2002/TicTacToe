import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import Newstatus from "./components/Newstatus";

import { calculateWinner } from "./components/helper";
import "./styles/Root.scss";
const app=()=>{
  const [history,setHistory]=useState([{board:Array(9).fill(null),isNext:true}]);
  const [currentMove,setcurrentMove]=useState(0);

  const current=history[currentMove];
  console.log('history',history)
  const winner=calculateWinner(current.board);
  const message=winner?`Winner is ${winner}`:`Next player is ${current.isNext?'X':'O'}`;
  const handleonclick=(position)=>{
    setHistory(prev =>{
   
     const last=prev[prev.length-1];
      const newBoard= last.board.map((square,pos)=>{
        if(last.board[position]||winner)return square;
        if(pos===position){

          return last.isNext?'X':'O';
        }
        return square;
      });
      return prev.concat({board:newBoard,isNext:!last.isNext});
    });
    setcurrentMove(prev=>prev+1);
    
}
 const toMove=(move)=>{
  setcurrentMove(move);
 }
  return (
<div className="app">
    <h1>TICTACTOE!</h1>
    {/* <h2>{message}</h2> */}
    <Newstatus winner={winner} current={current}/>
    <Board board={current.board} handleonclick={handleonclick}/>
    <History history={history} toMove={toMove} currentMove={currentMove} />
  </div>
  )
}
export default app;