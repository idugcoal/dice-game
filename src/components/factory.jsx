import React from 'react'
import Workcenter from './workcenter'

const Factory = props => {
  const { numWorkcenters } = props

  /** Helper functions */
  const isConstraintIndex = index => {
    return index === Math.round(numWorkcenters * 0.67) - 1
  }

  const buildWorkcenters = () => {
    const _workcenters = []
    for (let i = 0; i < numWorkcenters; i++) {
      _workcenters.push({
        key: i,
        number: i + 1,
        isConstraint: isConstraintIndex(i),
      })
    }
    console.log('workcenters', _workcenters)
    return _workcenters
  }

  /** Initial config */
  const workcenters = buildWorkcenters()

  /** Template */
  return (
    <div style={styles.container}>
      <div style={styles.title}>{`I am a factory`}</div>
      <div style={styles.workcenters}>
        {workcenters.map((workcenter, index) => {
          return (
            <Workcenter
              key={workcenter.key}
              number={workcenter.number}
              isConstraint={workcenter.isConstraint}
            />
          )
        })}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    border: '1px solid purple',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
  },
  workcenters: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
}
export default Factory
