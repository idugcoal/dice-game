import React from 'react'
import config from '../config'

const Game = ({ step, setStep }) => {
  /** State */
  // const [image, setImage] = useState()
  /** Helper functions */
  const rollDie = () => {
    const max = 6
    const min = 1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const onClick = () => {
    return config.dice(rollDie())
    setStep(step + 1)
  }
  // const onClick = () => {}
  console.log(rollDie())
  const dice = config.dice
  /** Template */
  return (
    <div style={styles.container}>
      <div style={styles.title}>{`Game`}</div>
      <div style={styles.diceContainer} onClick={onClick}>
        <img src={dice[rollDie()]} alt='die' />
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
