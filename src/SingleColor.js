import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({color}) => {
  const[colorHex, setColorHex] = useState('');

  useEffect(() => {
    setColorHex(rgbToHex(...color.rgb))
  }, [color])
  

  let colorClass = color.type === 'tint' ? 'false' : 'color-light';

  return (
    <article className={`color ${colorClass}`} style={{backgroundColor: `rgb(${color.rgb.join()})`}}>
      <p className='percent-value'>{color.weight}%</p>
      <p className='color-value'>{colorHex}</p>
    </article>
  );
}

export default SingleColor
