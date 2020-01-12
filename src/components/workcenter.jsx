import React from 'react'
// import Workcenter from './workcenter'

const Workcenter = props => {
  const workcenter = `work center #${props.number + 1}`
  return (
    <div style={styles.container}>
      <div style={styles.title}>{workcenter}</div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
  },
  title: {
    color: 'purple',
    textAlign: 'center',
    fontSize: 16,
  },
}
export default Workcenter
