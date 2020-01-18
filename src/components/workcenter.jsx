import React from 'react'

const Workcenter = ({ isConstraint, number, wip, numDice }) => {
  /** Helper functions */
  const getStatus = isConstraint => {
    return isConstraint ? 'Constraint!' : 'No constraint'
  }
  /** Template */
  return (
    <div style={styles.container}>
      <div style={styles.workcenter}>
        <div style={styles.title}>{`work center #${number}`}</div>
        <div style={isConstraint ? styles.constraint : styles.nonConstraint}>
          {getStatus(isConstraint)}
        </div>
        <div style={styles.wip}>{`WIP: ${wip}`}</div>
        <div style={styles.wip}>{`Number of dice: ${numDice}`}</div>
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
    border: '1px solid black',
    margin: '10px',
  },
  title: {
    color: 'purple',
    textAlign: 'center',
    fontSize: '16px',
  },
  constraint: {
    color: 'red',
  },
  nonConstraint: {
    color: 'green',
  },
}
export default Workcenter
