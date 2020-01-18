import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const UserInputs = props => {
  /** State */
  const [isGameStarted, setIsGameStarted] = useState(false)
  /** Helper functions */
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

  const convertFormDataToIntegers = data => {
    const dataToIntegers = {}
    Object.keys(data).forEach(function(key) {
      dataToIntegers[key] = parseInt(data[key], 10)
    })
    return dataToIntegers
  }

  const onSubmit = data => {
    setIsGameStarted(true)
    const formData = convertFormDataToIntegers(data)
    props.setSettings(formData)
  }

  /** Form  config */
  const { register, handleSubmit } = useForm({
    defaultValues: getDefaultValues(),
  })

  /** Template */
  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.inputsContainer}>
          {/* <div style={styles.label}>
            {`Run number`}
            <input name='runNumber'  ref={register} />
          </div> */}
          <div style={styles.label}>
            {`Number of workdays`}
            <input
              name='numWorkdays'
              ref={register({ pattern: /\d+/ })}
              style={isGameStarted ? styles.inactive : styles.input}
              disabled={isGameStarted}
            />
          </div>
          <div style={styles.label}>
            {`Number of workcenters`}
            <input
              name='numWorkcenters'
              ref={register({ pattern: /\d+/ })}
              style={isGameStarted ? styles.inactive : styles.input}
              disabled={isGameStarted}
            />
          </div>
          <div style={styles.label}>
            {`WIP per workcenter`}
            <input
              name='wipPerWorkcenter'
              ref={register({ pattern: /\d+/ })}
              style={isGameStarted ? styles.inactive : styles.input}
              disabled={isGameStarted}
            />
          </div>
          {/* <div >
            {`Number of constraints`}
            <input name='numConstraints'  ref={register({ pattern: /\d+/ })} />
            style={isGameStarted ? styles.inactive : styles.input}
              disabled={isGameStarted}
          </div> */}
          <div style={styles.label}>
            {`WIP per constraint`}
            <input
              name='wipPerConstraint'
              ref={register({ pattern: /\d+/ })}
              style={isGameStarted ? styles.inactive : styles.input}
              disabled={isGameStarted}
            />
          </div>
          <input
            value={'Save settings'}
            style={styles.button}
            type='submit'
            disabled={isGameStarted}
          />
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
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  label: {
    color: 'dodgerblue',
    fontSize: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    color: 'black',
    fontSize: '18px',
    justifyContent: 'center',
  },
  inactive: {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    color: 'grey',
    fontSize: '18px',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4caf50',
    fontSize: '24px',
    margin: '16px',
    color: 'white',
  },
}

export default UserInputs
