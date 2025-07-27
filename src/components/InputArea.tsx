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
      padding: '16px',
      borderTop: '1px solid #e0e0e0',
      backgroundColor: '#ffffff',
      borderRadius: '0 0 12px 12px'
    }}>
      <div style={{
        display: 'flex',
        gap: '8px'
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