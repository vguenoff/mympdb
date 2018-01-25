// action creator
export const actions = {
  toggleMessage: 'TOGGLE_MESSAGE',
  updateMessage: 'UPDATE_MESSAGE',
};

export const toggleMessage = () => dispatch => dispatch({ type: actions.toggleMessage });

export const updateMessage = payload => dispatch => dispatch({ type: actions.updateMessage, payload });
