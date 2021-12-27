import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, type }) => {
  const [colorHex, setColorHex] = useState('');
  const [isCopyColor, setIsCopyColor] = useState(false);

  useEffect(() => {
    setColorHex(rgbToHex(...rgb))
  }, [rgb])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopyColor(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isCopyColor])

  const copyColor = () => {
    navigator.clipboard.writeText(colorHex);
    setIsCopyColor(true);
  }

  return (
    <article
      className={`color ${type === 'tint' ? 'false' : 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgb.join()})` }}
      onClick={() => copyColor()}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{colorHex}</p>
      {isCopyColor && <p className='alert'>copied to clipboard</p>}
    </article>
  );
}

export default SingleColor
