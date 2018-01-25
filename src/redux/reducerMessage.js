import { actions } from './actions';

const message = (
  state = {
    messageVisibility: true,
    toggled: 0,
    status: 'other stuff',
  },
  action,
) => {
  const { type } = action;

  switch (type) {
    case actions.toggleMessage: {
      const toggled = state.toggled + 1;

      return {
        ...state,
        messageVisibility: !state.messageVisibility,
        toggled,
      };
    }
    default:
      return state;
  }
};

export default message;
