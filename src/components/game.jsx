import React, {
  // useState,
  useEffect,
} from 'react'
// import config from '../config'

const Game = ({ step, setStep, results, setResults }) => {
  /** State */

  /** Helper functions */
  const rollDie = () => {
    const max = 6
    const min = 1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const rollDice = count => {
    let result = 0
    for (let i = 0; i < count; i++) {
      result += rollDie()
    }
    return result
  }

  useEffect(() => {
    // when the step changes, that means the day has incremented
    // for every new day:
    //  for every workcenter:
    //    roll dice
    //      workcenter 1's dice roll determines the amount it completes (unless TOC)
    //      every other workcenter completes the smaller of dice roll and wip
    //    calculate each workcenter's output
    //    route each workcenter's completed work
    //      if TOC, constraint's wip also goes to workcenter 1's input
    //  add the day's results object to the results array in state
  })
  const startGame = () => {
    setStep(step + 1)
    const roll = rollDice(2)
    console.log('roll', roll)
  }
  /** Game */
  // 1) roll dice
  // 2) set as inventory intake
  // 3) add inventory intake and WIP to create stock
  // 4) roll dice
  //  a) if stock <= dice, pass stock to next workcenter and remove from stock
  //  b) if dice < stock, pass die to next workcenter and remove from stock
  /** Template */
  return (
    <div style={styles.container}>
      {/* <div style={styles.title}>{`Game`}</div> */}
      <div style={styles.startButton} onClick={startGame}>
        {`Start`}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  // title: {
  //   textAlign: 'center',
  //   fontSize: 24,
  // },
  diceContainer: {
    width: 200,
    height: 200,
  },
  startButton: {
    backgroundColor: '#4caf50',
    fontSize: '24px',
    margin: '16px',
    color: 'white',
    textAlign: 'center',
  },
}
export default Game
