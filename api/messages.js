// @flow
import { Mongo } from 'meteor/mongo';
import Meteor from 'meteor';

export const Messages = new Mongo.Collection('messages');

export type MessagesT = {
  text: string,
  username: string,
  createdAt: Date,
  _id?: string
};

Meteor.methods({
  'message.insert': (text: string) => {
    const username = Meteor.user() ? Meteor.user().username : 'Anonymous';

    if (text) {
      Messages.insert(
        ({
          text: text,
          username: username,
          createdAt: new Date()
        }: MessagesT)
      );
    }
  }
});
