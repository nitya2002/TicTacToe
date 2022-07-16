import React from "react";
import Board from "./components/Board";
import "./styles/Root.scss";
const app=()=>{
  return (
<div className="app">
    <h1>TICTACTOE!</h1>
    <Board/>
  </div>
  )
}
export default app;