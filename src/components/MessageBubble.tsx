import React from 'react';
import type { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: message.isUser ? 'flex-end' : 'flex-start',
      marginBottom: '20px'
    }}>
      <div style={{
        backgroundColor: message.isUser ? '#0066cc' : '#f8f9fa',
        color: message.isUser ? '#ffffff' : '#1a1a1a',
        padding: '14px 18px',
        borderRadius: '16px',
        maxWidth: '70%',
        fontSize: '15px',
        lineHeight: '1.4',
        border: message.isUser ? 'none' : '1px solid #e9ecef',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
      }}>
        {message.text}
      </div>
    </div>
  );
};

export default MessageBubble;