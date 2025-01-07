import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Illustrate difference between named and default exports
import { Button1, Button2 } from './Buttons.js'
import Button3NamedWhatIWant from './Buttons.js'

import Person from './Person.js'
import Message from './Message.js'
import Counter from './Counter.js'
import RequestTracker from './RequestTracker.js'
import Sculptors from './Sculptors.js'
import ArtBucketList from './ArtBucketList.js'
import CityQuiz from './CityQuiz.js'
import TravelPlan from './TravelPlan.js'
import Accordion from './Accordian.js'
import TaskApp from './tasks/TaskApp.js'

function App() {

  const people: Array<Person> = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <br /><hr />
      <h1>Button events</h1>
      <div className="card">
        <Button1 startHover={1} />
        <Button2 startHover={2} />
        <Button3NamedWhatIWant startHover={3} people={people} />
      </div>

      <br /><br />
      <hr />
      <h1>Message</h1>
      <div className="card">
        <Message />
      </div>

      <br /><br />
      <hr />
      <h1>Counter</h1>
      <div className="card">
        <Counter />
      </div>

      <br /><br />
      <hr />
      <h1>Request Tracker</h1>
      <div className="card">
        <RequestTracker />
      </div>

      <br /><br />
      <hr />
      <div className="card">
        <Sculptors />
      </div>

      <br /><br />
      <hr />
      <div className="card">
        <ArtBucketList />
      </div>

      <br /><br />
      <hr />
      <div className="card">
        <CityQuiz />
      </div>

      <br /><br />
      <hr />
      <div className="card">
        <Accordion />
      </div>

      <br /><br />
      <hr />
      <div className="card">
        <TaskApp />
      </div>

      <br /><br />
      <hr />
      <div className="card">
        <TravelPlan />
      </div>
    </>
  )
}

export default App
