// action creator
export const actions = {
  toggleMessage: 'TOGGLE_MESSAGE',
  updateMessage: 'UPDATE_MESSAGE',
};

export const toggleMessage = () => ({ type: actions.toggleMessage });

export const updateMessage = payload => ({ type: actions.updateMessage, payload });
