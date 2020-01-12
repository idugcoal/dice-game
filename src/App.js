import React, { useState } from 'react'
import './App.css'
import UserInputs from './components/user_inputs'
import Factory from './components/factory'
import { getWorkcenters } from './components/fabricator'

function App() {
  /** State */
  const [runNumber, setRunNumber] = useState(4)
  const [numWorkdays, setNumWorkdays] = useState(20)
  const [numWorkcenters, setNumWorkcenters] = useState(6)
  const [wipPerWorkcenter, setWipPerWorkcenter] = useState(4)
  const [numConstraints, setNumConstraints] = useState(1)
  const [wipPerConstraint, setWipPerConstraint] = useState(12)

  /** Initial config */
  const setup = { numWorkcenters, wipPerWorkcenter, wipPerConstraint }
  const workcenters = getWorkcenters(setup)
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
        <Factory className='Factory' workcenters={workcenters} />
      </div>
    </div>
  )
}

export default App
