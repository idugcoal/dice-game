import React, { useState } from 'react'
import './App.css'
import UserInputs from './components/user_inputs'
import Factory from './components/factory'

function App() {
  /** State */
  const [runNumber, setRunNumber] = useState(4)
  const [numWorkdays, setNumWorkdays] = useState(20)
  const [numWorkcenters, setNumWorkcenters] = useState(6)
  const [wipPerWorkcenter, setWipPerWorkcenter] = useState(4)
  const [numConstraints, setNumConstraints] = useState(1)
  const [wipPerConstraint, setWipPerConstraint] = useState(12)

  /** Initial config */

  /** Template */
  return (
    <div className='App'>
      <div className='App-header'>Dice Game</div>
      <div className='Body'>
        <UserInputs
          className='User-Inputs'
          setRunNumber={setRunNumber}
          setNumWorkdays={setNumWorkdays}
          setNumWorkcenters={setNumWorkcenters}
          setWipPerWorkcenter={setWipPerWorkcenter}
          setNumConstraints={setNumConstraints}
          setWipPerConstraint={setWipPerConstraint}
        />
        <Factory
          className='Factory'
          runNumber={runNumber}
          numWorkdays={numWorkdays}
          numWorkcenters={numWorkcenters}
          wipPerWorkcenter={wipPerWorkcenter}
          numConstraints={numConstraints}
          wipPerConstraint={wipPerConstraint}
        />
      </div>
    </div>
  )
}

export default App
