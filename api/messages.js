import { Mongo } from 'meteor/mongo';
 
export const Messages = new Mongo.Collection('messages');

export const insertMessage = (text, username) => {
  if(text){ 
  	Messages.insert({
	    text: text,
	    username: username,
	    createdAt: new Date()
  	})
  }
}
