import React from 'react';
import type { Message } from '../types';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isLoading }) => {
  return (
    <div style={{
      flex: 1,
      overflowY: 'auto',
      padding: '32px 40px',
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      backgroundColor: '#ffffff'
    }}>
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isLoading && <TypingIndicator />}
    </div>
  );
};

export default MessageList;