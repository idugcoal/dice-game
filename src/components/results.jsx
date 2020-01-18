import React from 'react'

const Results = ({ results }) => {
  /** Template */
  return (
    <div style={styles.container}>
      <div style={styles.title}>{`Results`}</div>
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
}
export default Results
