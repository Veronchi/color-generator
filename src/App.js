import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [inputColor, setInputColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  console.log(list)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputColor)
  }

  return (
    <React.Fragment>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type='text' placeholder='#f15025'
            className={error ? 'error' : 'null'}
            value={inputColor}
            onChange={(e) => setInputColor(e.target.value)}></input>
          <button type='submit' className='btn'>submit</button>
        </form>
      </section>
      <section className='colors'>
        <SingleColor />
      </section>
    </React.Fragment>
  );
}

export default App
