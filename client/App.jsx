import React from 'react';

import AccountsUIWrapper from './AccountsUIWrapper';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

export default () => (
  <div>
    <h1>React Meteor Chat</h1>
    <AccountsUIWrapper />
    <MessageList />
    <ChatInput />
  </div>
);
