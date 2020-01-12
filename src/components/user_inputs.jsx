import React from 'react'
import { useForm } from 'react-hook-form'
export const getSettings = () => {
  return {
    runNumber: 4,
    numWorkdays: 20,
    numWorkcenters: 6,
    wipPerWorkcenter: 4,
    numConstraints: 1,
    wipPerConstraint: 12,
  }
}

const UserInputs = props => {
  const getDefaultValues = () => {
    return {
      runNumber: 4,
      numWorkdays: 20,
      numWorkcenters: 6,
      wipPerWorkcenter: 4,
      numConstraints: 1,
      wipPerConstraint: 12,
    }
  }
  const { register, handleSubmit } = useForm({
    defaultValues: getDefaultValues(),
  })

  const convertFormDataToIntegers = data => {
    const dataToIntegers = {}
    Object.keys(data).forEach(function(key) {
      dataToIntegers[key] = parseInt(data[key], 10)
    })
    return dataToIntegers
  }

  const onSubmit = data => {
    const formData = convertFormDataToIntegers(data)
    props.setSettings(formData)
  }

  return (
    <div style={styles.container}>
      <div style={styles.title}>I am the user inputs</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.inputsContainer}>
          <div style={styles.input}>
            {`Run number`}
            <input name='runNumber' ref={register} />
          </div>
          <div style={styles.input}>
            {`Number of workdays`}
            <input name='numWorkdays' ref={register({ pattern: /\d+/ })} />
          </div>
          <div style={styles.input}>
            {`Number of workcenters`}
            <input name='numWorkcenters' ref={register({ pattern: /\d+/ })} />
          </div>
          <div style={styles.input}>
            {`WIP per workcenter`}
            <input name='wipPerWorkcenter' ref={register({ pattern: /\d+/ })} />
          </div>
          <div style={styles.input}>
            {`Number of constraints`}
            <input name='numConstraints' ref={register({ pattern: /\d+/ })} />
          </div>
          <div style={styles.input}>
            {`WIP per constraint`}
            <input name='wipPerConstraint' ref={register({ pattern: /\d+/ })} />
            <input type='submit' />
          </div>
        </div>
      </form>
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
    fontSize: 18,
    display: 'flex',
    flexDirection: 'column',
  },
}

export default UserInputs
