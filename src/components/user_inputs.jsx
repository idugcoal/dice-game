import React from 'react'
import { useForm } from 'react-hook-form'
import './../App.css'
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
      {/* <div style={styles.title}>I am the user inputs</div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.inputsContainer}>
          {/* <div style={styles.label}>
            {`Run number`}
            <input name='runNumber' style={styles.input} ref={register} />
          </div> */}
          <div style={styles.label}>
            {`Number of workdays`}
            <input
              name='numWorkdays'
              style={styles.input}
              ref={register({ pattern: /\d+/ })}
            />
          </div>
          <div style={styles.label}>
            {`Number of workcenters`}
            <input
              name='numWorkcenters'
              style={styles.input}
              ref={register({ pattern: /\d+/ })}
            />
          </div>
          <div style={styles.label}>
            {`WIP per workcenter`}
            <input
              name='wipPerWorkcenter'
              style={styles.input}
              ref={register({ pattern: /\d+/ })}
            />
          </div>
          {/* <div style={styles.input}>
            {`Number of constraints`}
            <input name='numConstraints' style={styles.input} ref={register({ pattern: /\d+/ })} />
          </div> */}
          <div style={styles.label}>
            {`WIP per constraint`}
            <input
              name='wipPerConstraint'
              style={styles.input}
              ref={register({ pattern: /\d+/ })}
            />
          </div>
          <input value={'Save settings'} style={styles.button} type='submit' />
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

  button: {
    backgroundColor: '#4caf50',
    fontSize: '24px',
    margin: '16px',
  },
}

export default UserInputs
