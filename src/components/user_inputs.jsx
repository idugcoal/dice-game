import React from 'react'

const UserInputs = props => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>I am the user inputs</div>
      <div style={styles.inputsContainer}>
        <Input
          cb={props.setRunNumber}
          type={'runNumber'}
          label={'run #'}
          defaultValue={4}
        />
        <Input
          cb={props.setNumWorkdays}
          type={'numWorkdays'}
          label={'# of workdays'}
          defaultValue={1}
        />
        <Input
          cb={props.setNumWorkcenters}
          type={'numWorkcenters'}
          label={'# of work centers'}
          defaultValue={6}
        />
        <Input
          cb={props.setWipPerWorkcenter}
          type={'wipPerWorkcenter'}
          label={'WIP per work center'}
          defaultValue={4}
        />
        <Input
          cb={props.setNumConstraints}
          type={'numConstraints'}
          label={'# of constraints'}
          defaultValue={1}
        />
        <Input
          cb={props.setWipPerConstraint}
          type={'wipPerConstraint'}
          label={'WIP per constraint'}
          defaultValue={12}
        />
        <Input
          cb={props.setRunNumber}
          type={'roll'}
          label={'Roll Dice'}
          defaultValue={3}
        />
      </div>
    </div>
  )
}

const Input = props => {
  const setInput = ({ type, cb, defaultValue }) => {
    switch (type) {
      case 'runNumber':
        cb(defaultValue)
        return
      case 'numWorkdays':
        cb(defaultValue)
        return
      case 'numWorkcenters':
        cb(defaultValue)
        return
      case 'wipPerWorkcenter':
        cb(defaultValue)
        return
      case 'numConstraints':
        cb(defaultValue)
        return
      case 'wipPerConstraint':
        cb(defaultValue)
        return
      case 'roll':
        return 3
      default:
        return 'error'
    }
  }

  return (
    <div style={styles.input} onClick={() => setInput(props)}>
      {props.label}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    border: '1px solid green',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    color: 'dodgerblue',
    fontSize: 22,
  },
}

export default UserInputs
