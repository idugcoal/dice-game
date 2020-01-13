import React, { useState, useEffect } from 'react'
import config from '../config'

const Game = ({ step, setStep }) => {
  /** State */
  const [image, setImage] = useState()

  /** Helper functions */
  const rollDie = () => {
    const max = 6
    const min = 1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  useEffect(() => {}, [step])
  const onClick = () => {
    setStep(step + 1)
    const diceImages = config.dice
    const roll = rollDie()
    setImage(diceImages[roll - 1])
  }
  /** Game */
  // 1) roll die
  // 2) set as inventory intake
  // 3) add inventory intake and WIP to create stock
  // 4) roll die
  //  a) if stock <= die, pass stock to next workcenter and remove from stock
  //  b) if die < stock, pass die to next workcenter and remove from stock
  /** Template */
  return (
    <div style={styles.container}>
      <div style={styles.title}>{`Game`}</div>
      <div style={styles.diceContainer} onClick={onClick}>
        {image && <img src={image} alt='die' />}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
  },
  diceContainer: {
    width: 200,
    height: 200,
  },
}
export default Game
