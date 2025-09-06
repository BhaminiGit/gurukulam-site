import React from 'react'

const MultiBoxTitle = ({innerText, width}) => {
  return (
    <>
      <div style={{width: `${width + 40}px`}}  className=' multiBoxContainer'>

        <div style={{width: `${width}px`}} className='box_under_high '></div>

        <div style={{width: `${width}px`}} className='box_under_low'></div>

        <div style={{width: `${width}px`}} className=' flex box_top text-4xl font-belanosima font-semibold font-stretch-75% justify-center items-center'> {innerText}</div>
      </div>
    </>
  )
}

export default MultiBoxTitle