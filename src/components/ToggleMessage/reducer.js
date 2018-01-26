import { actions } from './actions';

const message = (
  state = {
    messageVisibility: true,
    toggled: 0,
    customMessage: 'Enter your custom message here.',
  },
  action,
) => {
  const { type, payload } = action;

  switch (type) {
    case actions.toggleMessage: {
      const toggled = state.toggled + 1;

      return {
        ...state,
        messageVisibility: !state.messageVisibility,
        toggled,
      };
    }

    case actions.updateMessage:
      return {
        ...state,
        customMessage: payload,
      };
    default:
      return state;
  }
};

export default message;
