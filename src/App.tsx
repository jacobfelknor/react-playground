import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// This apparently is preferred by TypeScript because my typing is complete
interface Button1Props {
  startClick?: number;
  startHover: number
}
const Button1: React.FC<Button1Props> = ({ startClick = 0, startHover }) => {
  const [count, setCount] = useState({ click: startClick, hover: startHover })
  if (count.click == 10) {
    return <>You clicked too many times! <br></br> </>
  } else {

    return (
      <>
        <button
          onMouseEnter={() => { setCount({ click: count.click, hover: count.hover + 1 }) }}
          onClick={() => { setCount({ click: count.click + 1, hover: count.hover }) }}
        >
          clicked {count.click} times
          <br></br>
          hovered {count.hover} times
        </button>
        <br />
      </>
    )
  }
}

// This is a bit easier to read to my eye, and still Typed. 
// I moved the default value from the function args to the variable assignment
function Button2(props: Button1Props) {
  const [count, setCount] = useState({ click: props.startClick ?? 0, hover: props.startHover })
  if (count.click == 10) {
    return <>You clicked too many times! <br></br> </>
  } else {

    return (
      <>
        <button
          onMouseEnter={() => { setCount({ click: count.click, hover: count.hover + 1 }) }}
          onClick={() => { setCount({ click: count.click + 1, hover: count.hover }) }}
        >
          clicked {count.click} times
          <br></br>
          hovered {count.hover} times
        </button>
        <br />
      </>
    )
  }
}

// This is easiest to write (no interface), but I can't provide a type for `startHover` without giving it a default
// value. If I want to require this prop, I have to leave it untyped which TypeScript isn't happy about (but works)
function Button3({ startClick = 0, startHover }) {
  const [count, setCount] = useState({ click: startClick, hover: startHover })
  if (count.click == 10) {
    return <>You clicked too many times! <br></br> </>
  } else {

    return (
      <>
        <button
          onMouseEnter={() => { setCount({ click: count.click, hover: count.hover + 1 }) }}
          onClick={() => { setCount({ click: count.click + 1, hover: count.hover }) }}
        >
          clicked {count.click} times
          <br></br>
          hovered {count.hover} times
        </button>
        <br />
      </>
    )
  }
}

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button1 startHover={1} />
        <Button2 startHover={2} />
        <Button3 startHover={3} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
