import React from 'react'
// import Workcenter from './workcenter'

const Workcenter = () => {
  const workcenter = 'I am a workcenter'
  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>{workcenter}</h2>
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
