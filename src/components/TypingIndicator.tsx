import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: '20px'
    }}>
      <div style={{
        backgroundColor: '#f8f9fa',
        color: '#6c757d',
        padding: '14px 18px',
        borderRadius: '16px',
        fontSize: '15px',
        border: '1px solid #e9ecef'
      }}>
        ...
      </div>
    </div>
  );
};

export default TypingIndicator;