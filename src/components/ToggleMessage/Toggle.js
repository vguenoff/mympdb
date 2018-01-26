import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bool, number, string, func } from 'prop-types';
import styled from 'styled-components';

import { toggleMessage, updateMessage } from './actions';

class Toggle extends Component {
  state = {
    inputValue: '',
  }

  render() {
    const { inputValue } = this.state;
    const {
      messageVisibility,
      toggled,
    } = this.props;

    return (
      <ToggleContainer>
        <input
          type="text"
          value={inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
        />
        <button onClick={this.props.toggleMessage}>
          Toggle me
        </button>
        <button onClick={() => this.props.updateMessage(inputValue)}>
          Update the message
        </button>
        {messageVisibility &&
          <p>{this.props.customMessage} {toggled}</p>}
      </ToggleContainer>
    );
  }
}

Toggle.propTypes = {
  messageVisibility: bool.isRequired,
  toggled: number.isRequired,
  customMessage: string.isRequired,
  toggleMessage: func.isRequired,
  updateMessage: func.isRequired,
};

const ToggleContainer = styled.div`
  p {
    color: white
  }
`;

export default connect(({ toggle }) => ({
  messageVisibility: toggle.messageVisibility,
  toggled: toggle.toggled,
  customMessage: toggle.customMessage,
}), dispatch => bindActionCreators({
  toggleMessage,
  updateMessage,
}, dispatch))(Toggle);
