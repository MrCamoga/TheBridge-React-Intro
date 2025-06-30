import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
// import './App.css'

import { Person, PersonClass } from './components/Person.jsx'

const persons = [
  { name: "Emmy", surname: "Noether", age: 29},
  { name: "John", surname: "Conway", age: 37},
  { name: "Évariste", surname: "Galois", age: 20},
]

function App() {
  return (
    <>
      <Header />
      <Home />

      {persons.map((person,i) =>
        <Person key={i} {...person} />
      )}
      {persons.map((person,i) =>
        <PersonClass key={i} {...person} />
      )}
    </>
  )
}

export default App
