import React from 'react'
import Workcenter from './workcenter'

const Factory = () => {
  const factory = 'I am a factory'
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>{factory}</h1>
      <div style={styles.workcenters}>
        <Workcenter />
        <Workcenter />
        <Workcenter />
        <Workcenter />
        <Workcenter />
        <Workcenter />
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    border: '1px solid black',
    flexDirection: 'column',
  },
  h1: {
    color: 'green',
    textAlign: 'center',
  },
  workcenters: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
}
export default Factory
