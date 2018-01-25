import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { bool, number, string, func } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleMessage, updateMessage } from '../redux/actions';

class Toggle extends Component {
  state = {
    inputValue: '',
  }

  render() {
    const {
      messageVisibility,
      toggled,
      onToggleMessage,
      onUpdateMessage,
    } = this.props;

    return (
      <ToggleContainer>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
        />
        <button onClick={onToggleMessage}>
          Toggle me
        </button>
        <button onClick={() => onUpdateMessage(this.state.inputValue)}>
          Update the message
        </button>
        {messageVisibility &&
          // message content toggled N times
          <p>{this.props.customMessage} {toggled}</p>}
      </ToggleContainer>
    );
  }
}

Toggle.propTypes = {
  messageVisibility: bool.isRequired,
  toggled: number.isRequired,
  customMessage: string.isRequired,
  onToggleMessage: func.isRequired,
  onUpdateMessage: func.isRequired,
};

const ToggleContainer = styled.div`
  p {
    color: white
  }
`;

export default connect(({ message }) => ({
  messageVisibility: message.messageVisibility,
  toggled: message.toggled,
  customMessage: message.customMessage,
}), dispatch => bindActionCreators({
  onToggleMessage: toggleMessage,
  onUpdateMessage: updateMessage,
}, dispatch))(Toggle);
