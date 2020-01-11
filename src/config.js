const config = {
  run_1: {
    workstation: {
      wip: 4,
      dice: [1, 2, 3, 4, 5, 6],
    },
    constraint: {
      wip: 4,
      dice: [1, 2, 3, 4, 5, 6],
    },
  },
  run_2: {
    workcenter: {
      wip: 4,
      dice: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    constraint: {
      wip: 4,
      dice: [1, 2, 3, 4, 5, 6],
    },
  },
  run_3: {
    workcenter: {
      wip: 4,
      dice: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    constraint: {
      wip: 12,
      dice: [1, 2, 3, 4, 5, 6],
    },
  },
  run_4: {
    workcenter: {
      wip: 4,
      dice: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    constraint: {
      wip: undefined,
      dice: [4, 5, 6],
    },
  },
}

export default config
