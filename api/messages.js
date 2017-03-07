import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

Meteor.methods({
  'message.insert': (text) => {
    check(text, String);

    const username = Meteor.user()
      ? Meteor.user().username
      : 'Anonymous'

    if(text){ 
      Messages.insert({
        text: text,
        username: username,
        createdAt: new Date()
      })
    }
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('messages', function() {
    const filter = this.userId ? {} : { username: 'Anonymous' };
    return Messages.find(filter);
  });
}
