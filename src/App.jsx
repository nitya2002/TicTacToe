import React,{useState} from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/helper";
import "./styles/Root.scss";
const app=()=>{
  const [board,setVAlues]=useState(Array(10).fill(null));
  const [isNext,setNext]=useState(false);
  const winner=calculateWinner(board);
  const message=winner?`Winner is ${winner}`:`Next player is ${isNext?'X':'O'}`;
  const handleonclick=(position)=>{
    setVAlues(prev =>{
     
      return prev.map((square,pos)=>{
        if(board[position]||winner)return square;
        if(pos===position){
          return isNext?'X':'O';
        }
        return square;
      });
    });
    setNext((prev)=>!prev)
}
  return (
<div className="app">
    <h1>TICTACTOE!</h1>
    <h2>{message}</h2>
    <Board board={board} handleonclick={handleonclick}/>
  </div>
  )
}
export default app;