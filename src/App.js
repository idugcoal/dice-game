import React, { useState, useEffect } from 'react'
import './App.css'
import UserInputs from './components/user_inputs'
import Factory from './components/factory'
import Results from './components/results'
import Game from './components/game'
import { getWorkcenters } from './components/fabricator'

function App() {
  /** State */
  const [workcenters, setWorkcenters] = useState()
  const [settings, setSettings] = useState()
  const [step, setStep] = useState(0)
  const [results, setResults] = useState()

  /** Initial config */
  useEffect(() => {
    const _workcenters = !!settings ? getWorkcenters(settings) : []
    setWorkcenters(_workcenters)
  }, [settings])

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
        {settings && step <= settings.numWorkdays ? (
          <Game
            workcenters={workcenters}
            step={step}
            setStep={setStep}
            results={results}
            setResults={setResults}
          />
        ) : null}
        {settings && step === settings.numWorkdays ? (
          <Results results={results} />
        ) : null}
      </div>
    </div>
  )
}

export default App
