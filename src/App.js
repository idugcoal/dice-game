import React from 'react'
import './App.css'
import UserInputs from './components/user_inputs'
import Factory from './components/factory'

function App() {
  return (
    <div className='App'>
      <div className='App-header'>Dice Game</div>
      <div className='Body'>
        <UserInputs className='User-Inputs' />
        <Factory className='Factory' />
      </div>
    </div>
  )
}

export default App
