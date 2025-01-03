import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Illustrate difference between named and default exports
import { Button1, Button2 } from './Buttons.js'
import Button3NamedWhatIWant from './Buttons.js'

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
        <Button3NamedWhatIWant startHover={3} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
