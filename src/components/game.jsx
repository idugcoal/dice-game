import React, { useState, useEffect } from 'react'
// import config from '../config'

const Game = ({ workcenters, step, setStep, results, setResults }) => {
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
      }, 0)
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
    const getOneDayOfResults = () => {
      const getPreviousConstraintOutput = () => {
        const prevWorkcenter = workcenters.filter(workcenter => {
          return workcenter.isConstraint
        })
        console.log('prevWorkcenter', prevWorkcenter)
        return prevWorkcenter.output
      }
      const calculateDayForWorkcenter = workcenter => {
        const IS_TOC = true
        const isConstraint = true
        // calculate inventory:
        //   if workcenter 1, this is a dice roll (non-TOC) or from constraint's output
        //   if workcenter 1 AND day 1, this is a dice roll
        const dice = getDice(workcenter)
        const inventory =
          workcenter.number === 1 && step === 1
            ? dice.total // workcenter 1, day 1 - dice roll
            : workcenter.number === 1
            ? IS_TOC // TODO: GOTTA HAVE SOME `isConstraint` LOGIC ON THE LINE ABOVE HERE
              ? getPreviousConstraintOutput() // workcenter 1, day n + 1  - from constraint's output (TOC)
              : dice.total // workcenter 1, day n + 1  - dice roll (non-TOC)
            : dice.total // every other workcenter - dice roll

        const output = getWorkProcessed(inventory, dice.total)

        return {
          inventory,
          dice,
          output,
        }
      }
      return workcenters.reduce((all, workcenter) => {
        const workcenterDay = calculateDayForWorkcenter(workcenter)
        all.push(workcenterDay)
        return all
      }, [])
    }

    /** Game starts here */
    if (isGameRunning) {
      let allDaysOfResults = []
      let testing = 1
      while (testing <= 20) {
        let oneDayOfResults = getOneDayOfResults()
        allDaysOfResults.push(oneDayOfResults)
        console.log('step#', step, oneDayOfResults)
        console.log('allDaysOfResults', allDaysOfResults)
        testing++
      }
    }
  }, [step, setStep, workcenters, isGameRunning, results, setResults])

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
