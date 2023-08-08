import React from 'react'

function Text(props) {
  return (
    <div className='text'>
        <h2 className={props.cName}>{props.text}</h2>
        <p className={props.cName2}>{props.text2}</p>
    </div>
  )
}

export default Text;