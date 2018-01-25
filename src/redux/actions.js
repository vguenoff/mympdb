// action creator
export const actions = {
  toggleMessage: 'TOGGLE_MESSAGE',
};

export const toggleMessage = () => dispatch => dispatch({ type: actions.toggleMessage });
