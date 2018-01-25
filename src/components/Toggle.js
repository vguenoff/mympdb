import React from 'react';
import { bool, string, func } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleMessage } from '../redux/actions';

const Toggle = ({
  messageVisibility,
  toggled,
  onToggleMessage,
}) => (
  <ToggleContainer>
    <button onClick={onToggleMessage}>
      Toggle me
    </button>
    {messageVisibility &&
      <p>You will be seeing this if the redux action is dispatched / toggled. {toggled}</p>}
  </ToggleContainer>
);

Toggle.propTypes = {
  messageVisibility: bool.isRequired,
  toggled: string.isRequired,
  onToggleMessage: func.isRequired,
};

const ToggleContainer = styled.div`
  p {
    color: white
  }
`;

export default connect(({ message }) => ({
  messageVisibility: message.messageVisibility,
  toggled: message.toggled,
}), {
  onToggleMessage: toggleMessage,
},
)(Toggle);
