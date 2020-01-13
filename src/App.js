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

  /** Initial config */
  useEffect(() => {
    const _workcenters = !!settings ? getWorkcenters(settings) : []
    setWorkcenters(_workcenters)
  }, [settings])

  /** Helper functions */
  const startGame = () => {
    step === 0 || step === settings.numWorkdays ? setStep(1) : setStep(step + 1)
    // console.log('\nsettings when game starts:', settings)
    while (step <= settings.numWorkdays) {
      //const currentRound = calculateCurrentRound()
      //setStep(step + 1)
    }
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
        {settings && <div onClick={startGame}>{`Start game`}</div>}
        {settings && step <= settings.numWorkdays ? (
          <Game step={step} setStep={setStep} />
        ) : null}
        {settings && step === settings.numWorkdays ? <Results /> : null}
      </div>
    </div>
  )
}

export default App
