import React from 'react'

const Workcenter = ({ isConstraint, number, wip }) => {
  /** Helper functions */
  const getStatus = isConstraint => {
    return isConstraint ? 'Constraint!' : 'Not a constraint'
  }

  /** Template */
  return (
    <div style={styles.container}>
      <div style={styles.title}>{`work center #${number}`}</div>
      <div style={isConstraint ? styles.constraint : styles.nonConstraint}>
        {getStatus(isConstraint)}
      </div>
      <div style={styles.wip}>{`WIP: ${wip}`}</div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: 'purple',
    textAlign: 'center',
    fontSize: 16,
  },
  constraint: {
    color: 'red',
  },
  nonConstraint: {
    color: 'green',
  },
}
export default Workcenter
