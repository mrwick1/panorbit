import React from 'react';
import Message from './Message';
import { ReceivedMessage, SendMessage, Time } from './TextStyle';

const Text = ({ textData }) => {
  return (
    <>
      {textData.map((item) => {
        return (
          <>
            <Time>{item.time}</Time>
            {item?.text.map((el) => {
              return <Message {...el} />;
            })}
          </>
        );
      })}
    </>
  );
};

export default Text;
