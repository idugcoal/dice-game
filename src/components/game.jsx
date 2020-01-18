import React, {
  // useState,
  useEffect,
} from 'react'
// import config from '../config'

const Game = ({ workcenters, step, setStep, setResults }) => {
  /** State */

  /** This effect runs every time the day increments */
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

    /** Helper functions */
    const rollDie = () => {
      const max = 6
      const min = 1
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const rollDice = numDice => {
      let dice = []
      for (let i = 0; i < numDice; i++) {
        dice.push(rollDie())
      }
      return dice
    }
    const getDailyDiceRolls = numDice => {
      let diceRolls = []
      workcenters.forEach(workcenter => {
        diceRolls.push(rollDice(numDice))
      })
      return diceRolls
    }
    /** Game steps 
        1) roll dice
        2) set as inventory intake
        3) add inventory intake and WIP to create stock
        4) roll dice
         a) if stock <= dice, pass stock to next workcenter and remove from stock
         b) if dice < stock, pass die to next workcenter and remove from stock
    */
    const NUM_DICE = 2
    const diceRolls = getDailyDiceRolls(NUM_DICE) // holds an array of dice rolls for each workcenter

    console.log('step#', step, 'diceRolls', diceRolls)
  }, [step, workcenters])
  const startGame = () => {
    setStep(step + 1)
  }
  /** Game */
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
