import React, { useState, useEffect } from 'react'
// import config from '../config'

const Game = ({ workcenters, step, setStep, setResults }) => {
  /** State */
  const [isGameRunning, setIsGameRunning] = useState(false)
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
      const MIN = 1
      const MAX = 6
      return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
    }

    const rollDice = numDice => {
      let dice = []
      for (let i = 0; i < numDice; i++) {
        dice.push(rollDie())
      }
      return dice
    }

    const getDiceTotal = dice => {
      return dice.reduce((current, total) => {
        return total + current
      })
    }

    /** Game functions */
    // const getWorkProcessed = (inventory, wip) => {
    //   return Math.min(inventory, wip)
    // }

    /** Game steps 
        1) roll dice
        2) set as inventory intake
        3) add inventory intake and WIP to create stock
        4) roll dice
         a) if stock <= dice, pass stock to next workcenter and remove from stock
         b) if dice < stock, pass dice to next workcenter and remove from stock
    */
    /**
        Results:
          Day 1:
            Workcenter 1:
              inventory from feeding process:
                if workcenter 1, then this is a dice roll
                if not workcenter 1, this is the workcenter's wip
              dice roll:
                set of returned dice
                calculated total of returned dice
              amount of work processed this day:
                return the minimum of inventory and dice total
            Workcenter 2:
              ...
          Day 2:
          ...
     */
    /** Game starts here */
    if (isGameRunning) {
      const dice = rollDice(2)
      const diceTotal = getDiceTotal(dice)
      console.log('step#', step, 'dice', dice, 'total', diceTotal)
    }
  }, [step, workcenters, isGameRunning, setResults])

  /** Handlers */
  const onStartGame = () => {
    if (workcenters && !isGameRunning) {
      setIsGameRunning(true)
      setStep(1)
    }
  }
  const onNextStep = () => {
    setStep(step + 1)
  }

  /** Template */
  return (
    <div style={styles.container}>
      {!isGameRunning && (
        <div style={styles.startButton} onClick={onStartGame}>
          {`Start`}
        </div>
      )}
      {isGameRunning && (
        <div style={styles.nextStepButton} onClick={onNextStep}>
          {`Next step`}
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  startButton: {
    backgroundColor: '#4caf50',
    fontSize: '24px',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '25%',
    height: 50,
  },
  nextStepButton: {
    backgroundColor: 'dodgerblue',
    fontSize: '24px',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '25%',
    height: 50,
  },
}
export default Game
