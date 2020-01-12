import React from 'react'
import Workcenter from './workcenter'

const Factory = ({ workcenters }) => {
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
              wip={workcenter.wip}
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
