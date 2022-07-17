import React from 'react'

const Newstatus = ({winner,current}) => {
    const check=current.board.every(el=>el!==null);
  return (
    // const message=winner?`Winner is ${winner}`:`Next player is ${current.isNext?'X':'O'}`;
    
    <h2>{winner && (
        <>
        Winner is <span className={winner==='X'?'text-green':'text-orange'}>
        {winner}
        </span>
        </>
    )}{!winner&&!check&&(<>
    Next player is {' '}
    <span className={current.isNext?'text-green':'text-orange'}>
    {current.isNext?'X':'O'}
    </span>
    </>)}
    {!winner&&check&&(
        <>
        <span className='text-green'>X</span> and <span className='text-orange'>O</span> tied
        </>
    )}</h2>
  )
}

export default Newstatus