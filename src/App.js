import React from 'react'
import './App.css'
import UserInputs from './components/user_inputs'
import Factory from './components/factory'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Dice Game</header>
      <body className='Body'>
        <UserInputs className='User-Inputs' />
        <Factory className='Factory' />
      </body>
    </div>
  )
}

export default App
