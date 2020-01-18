import React from 'react'
import Workcenter from './workcenter'

const Factory = ({ workcenters }) => {
  /** Template */
  return (
    <div style={styles.container}>
      <div style={styles.workcenters}>
        {workcenters.map(
          ({ key, number, isConstraint, wip, numDice }: workcenter) => {
            return (
              <Workcenter
                key={key}
                number={number}
                isConstraint={isConstraint}
                wip={wip}
                numDice={numDice}
              />
            )
          },
        )}
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
