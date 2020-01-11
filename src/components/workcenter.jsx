import React from 'react'
// import Workcenter from './workcenter'

const Workcenter = props => {
  const workcenter = `workcenter ${props.number + 1}`
  return (
    <div style={styles.container}>
      <h3 style={styles.h2}>{workcenter}</h3>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
  },
  h2: {
    color: 'purple',
    textAlign: 'center',
  },
}
export default Workcenter
