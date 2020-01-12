export const getWorkcenters = ({
  numWorkcenters,
  wipPerWorkcenter,
  wipPerConstraint,
}) => {
  /** Helper functions */
  const isConstraintIndex = index => {
    return index === Math.round(numWorkcenters * 0.67) - 1
  }

  const buildWorkcenters = () => {
    const _workcenters = []
    for (let i = 0; i < numWorkcenters; i++) {
      const isConstraint = isConstraintIndex(i)
      _workcenters.push({
        key: i,
        number: i + 1,
        isConstraint: isConstraint,
        wip: isConstraint ? wipPerConstraint : wipPerWorkcenter,
      })
    }
    return _workcenters
  }

  const workcenters = buildWorkcenters()

  return workcenters
}
