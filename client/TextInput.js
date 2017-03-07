import React, { Component } from 'react';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { val: this.props.value || '' };
  }

  componentDidMount() {
    if (this.props.focus) {
      this.textInput.focus();
    }
  }

  onChange = e => {
    this.setState({ val: e.target.value });
    this.props.onChange && this.props.onChange(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.val);
    this.setState({ val: '' });
  };

  handleKey = e => {
    if (e.keyCode === 27) {
      this.props.onCancel && this.props.onCancel();
    }
  };

  render() {
    const {
      value,
      placeholder,
      focus,
      onChange,
      onCancel,
      onSubmit,
      ...rest
    } = this.props;
    return (
      <form onSubmit={this.onSubmit} onBlur={this.onSubmit}>
        <input
          type="text"
          onChange={this.onChange}
          onKeyDown={this.handleKey}
          value={this.state.val}
          placeholder={this.props.placeholder}
          ref={input => this.textInput = input}
          {...rest}
        />
      </form>
    );
  }
}
