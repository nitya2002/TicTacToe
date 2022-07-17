import React from 'react'

const History = ({history,toMove,currentMove}) => {
  return (
    <ul>
    {history.map((_,move)=>{
        return(
            <li key={move}><button style={{fontWeight:move===currentMove?'bold':'normal'}} type="button" onClick={()=>{toMove(move)}}>{move===0?"Go to play":`Go to move #${move}`}</button></li>
        )
    })}
   </ul>
  )
}

export default History