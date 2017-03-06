import React, { Component } from 'react';
import { Messages } from '../api/messages.js';
import { createContainer } from 'meteor/react-meteor-data';

const Message = ({ message }) => (
  <li className="message">
    <p><b>{message.username}</b>: {message.text}</p>
  </li>
);

const MessageList = ({ messages }) => (
  <ul id="list">
    {messages
      .reverse()
      .map(message => <Message key={message._id} message={message} />)}
  </ul>
);

export default createContainer(
  () => ({
    messages: Messages.find({}, { sort: { createdAt: -1 }, limit: 8 }).fetch()
  }),
  MessageList
);
