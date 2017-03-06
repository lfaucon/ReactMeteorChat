import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TextInput from './TextInput';
import { insertMessage } from '../api/messages';

const sendMessage = msg => {
  const username = Meteor.user() ? Meteor.user().username : 'Anonymous';
  insertMessage(msg, username);
};

export default () => (
  <TextInput
    placeholder="Type to send text"
    onSubmit={sendMessage}
    className="new-message"
  />
);
