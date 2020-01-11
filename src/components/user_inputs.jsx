import React from 'react'

const UserInputs = () => {
  return (
    <div style={styles.container}>
      <h1>I am the user inputs</h1>
      <div style={styles.inputsContainer}>
        <div style={styles.input}>User Input #1</div>
        <div style={styles.input}>User Input #2</div>
        <div style={styles.input}>User Input #3</div>
        <div style={styles.input}>User Input #4</div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    border: '1px solid black',
  },
  h1: {
    textAlign: 'center',
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
