import React, { useState, useEffect } from 'react'
import './App.css'
import UserInputs from './components/user_inputs'
import Factory from './components/factory'
import { getWorkcenters } from './components/fabricator'

function App() {
  /** State */
  const [workcenters, setWorkcenters] = useState()
  const [settings, setSettings] = useState()

  /** Initial config */
  useEffect(() => {
    const _workcenters = !!settings ? getWorkcenters(settings) : []
    setWorkcenters(_workcenters)
  }, [settings])

  /** Helper functions */
  const startGame = () => {
    console.log('settings before', settings)
  }

  /** Template */
  return (
    <div className='App'>
      <div className='App-header'>Dice Game</div>
      <div className='Body'>
        <UserInputs className='User-Inputs' setSettings={setSettings} />
        {workcenters && settings && (
          <Factory
            className='Factory'
            workcenters={workcenters}
            settings={settings}
          />
        )}
        {settings && <div onClick={startGame}>Start game</div>}
      </div>
    </div>
  )
}

export default App
