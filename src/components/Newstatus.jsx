import React from 'react'

const Newstatus = ({winner,current}) => {
    const check=current.board.every(el=>el!==null);
  return (
    // const message=winner?`Winner is ${winner}`:`Next player is ${current.isNext?'X':'O'}`;
    
    <h2>{winner && `Winner is ${winner}`}{!winner&&!check&&`Next player is ${current.isNext?'X':'O'}`}{!winner&&check&&"O and X is tied"}</h2>
  )
}

export default Newstatus