import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '../api/messages.js';

import ReactList from 'react-list';

const Message = ({ message }) =>
  <li className='message'>
    <p><b>{message.username}</b>: {message.text}</p>
  </li>

const MessageList = createContainer(
  () => {
    Meteor.subscribe('messages');
    return ({ 
      messages: Messages.find({}, { sort: { createdAt: -1 }, limit: 8 }).fetch()
    })
  },
  ({ messages }) => (
    <ul id='list'>
      {messages.reverse().map(message => 
        <Message key={message._id} message={message} />
      )}
    </ul>
  )
)

class TextBox extends Component {
  constructor() {
    super();
    this.state = { text: '' }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    Meteor.call('message.insert', this.state.text)
    this.setState({ text: '' })
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render() { 
    return (
      <form className="new-message" onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Type to send messages"
        />
      </form>
    )
  }
}

export default ({ messages }) => 
  <div>
    <MessageList />
    <TextBox />
  </div>
