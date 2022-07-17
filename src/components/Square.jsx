import React from 'react'

const square = ({value,onClick,iswinning}) => {
return <button className={`square ${iswinning?'winning':''} ${value=='X'?'text-green':'text-orange'}`} type="button"  onClick={onClick}>{value}</button>;

}

export default square