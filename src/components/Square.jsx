import React from 'react'

const square = ({value,onClick,iswinning}) => {
return <button style={{fontWeight:iswinning?'bold':'normal'}} type="button" className='square' onClick={onClick}>{value}</button>;

}

export default square