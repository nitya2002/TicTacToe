import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import Newstatus from "./components/Newstatus";

import { calculateWinner } from "./components/helper";
import "./styles/Root.scss";

const NEW_GAME=[{board:Array(9).fill(null),isNext:true}]
const app=()=>{
  const [history,setHistory]=useState(NEW_GAME);
  const [currentMove,setcurrentMove]=useState(0);
  const current=history[currentMove];
  console.log('history',history)
  const {winner,winningsquares}=calculateWinner(current.board);
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
 const newgame=()=>{
  setHistory(NEW_GAME);
  setcurrentMove(0);
 }
  return (
<div className="app">
    <h1>TICTACTOE!</h1>
    {/* <h2>{message}</h2> */}
    <Newstatus winner={winner} current={current}/>
    <Board board={current.board} handleonclick={handleonclick} winningsquares={winningsquares}/>
    <button type='button' onClick={newgame} className={`btn-reset ${winner?'active':'normal'}`}>Start New Game</button>
    <h2>Current Game History</h2>
    <History history={history} toMove={toMove} currentMove={currentMove} />
    <div className="bg-balls"/>
  </div>
  )
}
export default app;