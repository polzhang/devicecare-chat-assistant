import React from 'react';

const Header: React.FC = () => {
  return (
    <div style={{
      padding: '24px 40px',
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: '#ffffff',
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '24px',
        fontWeight: '600',
        color: '#1a1a1a'
      }}>
        DeviceCare Help Assistant
      </h1>
      <p style={{
        margin: '4px 0 0 0',
        fontSize: '14px',
        color: '#666666'
      }}>
        Get help with your device and protection plan
      </p>
    </div>
  );
};

export default Header;