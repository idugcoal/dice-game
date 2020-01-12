import React from 'react'
import Workcenter from './workcenter'

const Factory = props => {
  const factory = 'I am a factory'
  console.log(props)
  return (
    <div style={styles.container}>
      <div style={styles.title}>{factory}</div>
      <div style={styles.workcenters}>
        {props.workcenters.map((workcenter, index) => {
          return <Workcenter number={index} key={index} />
        })}
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
