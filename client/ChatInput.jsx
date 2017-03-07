import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TextInput from './TextInput';
import { insertMessage } from '../api/messages';

const sendMessage = msg => {
  Meteor.call('message.insert', msg);
};

export default () => (
  <TextInput
    placeholder="Type to send text"
    onSubmit={sendMessage}
    className="new-message"
  />
);
