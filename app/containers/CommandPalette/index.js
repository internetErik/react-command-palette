import React from 'react';
import PropTypes from 'prop-types';

export default class CommandPalette extends React.Component {
  constructor() {
    super();
    this.state = {
      visible  : false,
      value    : '',
      commands : [],
      results  : [],
    };
  }

  componentDidMount() {
    window.document.addEventListener('keyup', this.openCommandPalette)
  }

  componentWillUnmount() {
  }

  openCommandPalette = e => {
    const { visible } = this.state;
    if(visible) {
      if(e.keyCode === 27)
        this.setState({ visible : false, value : '' });
    }
    else if(e.shiftKey && e.keyCode === 80) {
      this.setState({ visible : true }, () => this.input.focus());
    }
  }

  handleInputKeyUp = e => this.setState({ value : this.input.value })

  render() {
    const { visible, value } = this.state;
    return (
      <div className="command-palette">
        {visible &&
        <div className="command-palette__container">
          <input
            className="command-palette__input"
            value={value}
            ref={input => this.input = input}
            onChange={this.handleInputKeyUp}
          />
          <div className="command-palette__results"></div>
        </div>
        }
      </div>
    );
  }
}
