import React, { useState, useEffect } from 'react'
// import config from '../config'

const Game = ({ workcenters, step, setStep, setResults }) => {
  // if workcenter 1, get input from dice roll (non-TOC) or from constraint (TOC)
  //    if workcenter 1 day 1, get input from dice roll no matter what
  // if workcenter n + 1, get input from the previous workcenter's output
  // all workcenters calculate capacity with a dice roll
  // output is calculated as the minimum of capacity and dice roll

  /** Shape of the results object
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
  /** State */
  const [isGameRunning, setIsGameRunning] = useState(false)
  /** This effect runs every time the day increments */
  useEffect(() => {
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
    const getDice = workcenter => {
      // get dice
      const rolls = rollDice(workcenter.numDice)
      const total = getDiceTotal(rolls)
      return {
        rolls,
        total,
      }
    }
    const getWorkProcessed = (inventory, wip) => {
      return Math.min(inventory, wip)
    }

    /** Game functions */
    const calculateDayForWorkcenter = workcenter => {
      // calculate inventory:
      //   if workcenter 1, this is a dice roll (non-TOC) or from constraint's output
      //   if workcenter 1 AND day 1, this is a dice roll
      const dice = getDice(workcenter)
      const inventory =
        workcenter.number === 1 && step === 1
          ? dice.total // workcenter 1, day 1
          : workcenter.number === 1
          ? workcenter.wip // workcenter 1, day n + 1
          : 7 // workcenter n + 1

      const output = getWorkProcessed(inventory, dice.total)

      return {
        inventory,
        dice,
        output,
      }
    }

    const getResults = () => {
      return workcenters.reduce((all, workcenter) => {
        const workcenterDay = calculateDayForWorkcenter(workcenter)
        all.push(workcenterDay)
        return all
      }, [])
    }

    /** Game starts here */
    if (isGameRunning) {
      const dailyResultsForAllWorkcenters = getResults()
      console.log('step#', step, dailyResultsForAllWorkcenters)
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4caf50',
    color: 'white',
    fontSize: '24px',
    height: 50,
    width: '25%',
  },
  nextStepButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    color: 'white',
    fontSize: '24px',
    height: 50,
    width: '25%',
  },
}
export default Game
