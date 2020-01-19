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
  dice: {
    1: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg',
    2: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg',
    3: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg',
    4: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg',
    5: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg',
    6: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg',
  },
}

export default config
