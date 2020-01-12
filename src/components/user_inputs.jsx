import React from 'react'

const UserInputs = props => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>I am the user inputs</div>
      <div style={styles.inputsContainer}>
        <Input cb={props.setRunNumber} type={'runNumber'} label={'run #'} />
        <Input
          cb={props.setNumWorkdays}
          type={'numWorkdays'}
          label={'# of workdays'}
        />
        <Input
          cb={props.setNumWorkcenters}
          type={'numWorkcenters'}
          label={'# of work centers'}
        />
        <Input
          cb={props.setWipPerWorkcenter}
          type={'wipPerWorkcenter'}
          label={'WIP per work center'}
        />
        <Input
          cb={props.setNumConstraints}
          type={'numConstraints'}
          label={'# of constraints'}
        />
        <Input
          cb={props.setWipPerConstraint}
          type={'wipPerConstraint'}
          label={'WIP per constraint'}
        />
        <Input cb={props.setRunNumber} type={'roll'} label={'Roll Dice'} />
      </div>
    </div>
  )
}

const Input = props => {
  const setInput = ({ type, cb }) => {
    switch (type) {
      case 'runNumber':
        cb(1)
        return
      case 'numWorkdays':
        cb(20)
        return
      case 'numWorkcenters':
        cb(9)
        return
      case 'wipPerWorkcenter':
        cb(4)
        return
      case 'numConstraints':
        cb(1)
        return
      case 'wipPerConstraint':
        cb(12)
        return
      case 'roll':
        return 3
      default:
        return 'error'
    }
  }

  const onClick = props => {
    setInput(props)
  }

  return (
    <div style={styles.input} onClick={() => onClick(props)}>
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
