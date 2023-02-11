import React from 'react';
import { ReceivedMessage, SendMessage } from './TextStyle';

const Message = ({ message, status }) => {
  if (status === 'sent') {
    return (
      <SendMessage>
        <span>{message}</span>
      </SendMessage>
    );
  } else {
    return (
      <ReceivedMessage>
        <span>{message}</span>
      </ReceivedMessage>
    );
  }
};

export default Message;
