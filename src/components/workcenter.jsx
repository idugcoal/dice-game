import React from 'react'

const Workcenter = props => {
  const getStatus = ({ isConstraint }) => {
    return isConstraint ? 'Constraint' : 'Not a constraint'
  }
  return (
    <div style={styles.container}>
      <div style={styles.title}>{`work center #${props.number + 1}`}</div>
      <div
        style={props.isConstraint ? styles.constraint : styles.nonConstraint}>
        {getStatus(props)}
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
