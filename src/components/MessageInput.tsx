import React from 'react';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({
  value,
  onChange,
  onSubmit,
  disabled
}) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && onSubmit()}
      placeholder="Ask me about your device or coverage..."
      disabled={disabled}
      style={{
        flex: 1,
        padding: '14px 16px',
        fontSize: '15px',
        border: '1px solid #d0d7de',
        borderRadius: '12px',
        outline: 'none',
        backgroundColor: disabled ? '#f8f9fa' : '#ffffff',
        transition: 'border-color 0.2s ease'
      }}
      onFocus={(e) => e.target.style.borderColor = '#0066cc'}
      onBlur={(e) => e.target.style.borderColor = '#d0d7de'}
    />
  );
};

export default MessageInput;