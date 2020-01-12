import React from 'react'
import Workcenter from './workcenter'

const Factory = props => {
  const { numWorkcenters } = props
  const factory = 'I am a factory'
  const constraintIndex = Math.round(numWorkcenters * 0.67) - 1
  console.log(props, constraintIndex)

  return (
    <div style={styles.container}>
      <div style={styles.title}>{factory}</div>
      <div style={styles.workcenters}>
        {props.workcenters.map((workcenter, index) => {
          return index === constraintIndex ? (
            <Workcenter key={index} number={index} isConstraint={true} />
          ) : (
            <Workcenter key={index} number={index} isConstraint={false} />
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
