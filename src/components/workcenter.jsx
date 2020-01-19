import React from 'react'

const Workcenter = ({ isConstraint, number, wip, numDice }) => {
  /** Helper functions */

  /** Template */
  return (
    <div style={styles.container}>
      <div style={isConstraint ? styles.constraint : styles.workcenter}>
        <div style={styles.title}>{`work center #${number}`}</div>
        <div style={styles.wip}>{`WIP: ${wip}`}</div>
        <div style={styles.wip}>{`Dice: ${numDice}`}</div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  workcenter: {
    border: '3px solid green',
    textAlign: 'center',
    margin: 10,
  },
  constraint: {
    border: '3px solid red',
    textAlign: 'center',
    margin: 10,
  },
  title: {
    color: 'black',
    fontSize: '16px',
    textAlign: 'center',
  },
}
export default Workcenter
