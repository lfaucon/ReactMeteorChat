// @flow
import React, { Component } from 'react';
import { Messages, type MessagesT } from '../api/messages.js';
import { createContainer } from 'meteor/react-meteor-data';

const Message = ({ message }: { message: MessagesT }) => (
  <li className="message">
    <p><b>{message.name}</b>: {message.text}</p>
  </li>
);

const MessageList = ({ messages }: { messages: Array<MessagesT> }) => (
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
