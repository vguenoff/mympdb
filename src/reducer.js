const message = (
  state = {
    messageVisibility: false,
  },
  action,
) => {
  const { type } = action;

  switch (type) {
    case 'TOGGLE_MESSAGE':
      return state;
    default:
      return state;
  }
};

export default message;
