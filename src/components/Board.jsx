import React ,{useState} from 'react'
import Square from './Square'
const Board = ({board,handleonclick}) => {
  const renderSquare=(position)=>{
  return (<Square 
    value={board[position]}
    onClick={()=>
      handleonclick(position)
    }
  
/>
  );
  }
  return (
    <div className='board'>
        <div className='board-row'>
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
        </div>
        <div className='board-row'>
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        </div>
        <div className='board-row'>
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
        </div>
    </div>
  )
}

export default Board