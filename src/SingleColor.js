import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({color}) => {
  console.log(color)

  let colorClass = color.type === 'tint' ? 'false' : 'color-light';
  
  return (
    <article className={`color ${colorClass}`}>
      <p className='percent-value'>{color.weight}%</p>
      <p className='color-value'></p>
    </article>
  );
}

export default SingleColor
