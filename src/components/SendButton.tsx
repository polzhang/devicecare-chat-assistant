import React from 'react';

interface SendButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const SendButton: React.FC<SendButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '14px 20px',
        backgroundColor: disabled ? '#e9ecef' : '#0066cc',
        color: disabled ? '#6c757d' : '#ffffff',
        border: 'none',
        borderRadius: '12px',
        fontSize: '15px',
        fontWeight: '500',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.2s ease'
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          (e.target as HTMLButtonElement).style.backgroundColor = '#0052a3';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          (e.target as HTMLButtonElement).style.backgroundColor = '#0066cc';
        }
      }}
    >
      Send
    </button>
  );
};

export default SendButton;