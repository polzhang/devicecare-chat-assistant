import React, { useState } from 'react';
import MessageInput from './MessageInput';
import SendButton from './SendButton';

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div style={{
      padding: '24px 40px 32px',
      borderTop: '1px solid #e0e0e0',
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      backgroundColor: '#ffffff'
    }}>
      <div style={{
        display: 'flex',
        gap: '12px'
      }}>
        <MessageInput
          value={input}
          onChange={setInput}
          onSubmit={handleSend}
          disabled={isLoading}
        />
        <SendButton
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
        />
      </div>
    </div>
  );
};

export default InputArea;
