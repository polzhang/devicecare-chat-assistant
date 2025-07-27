import React, { useState } from 'react';
import MessageList from './MessageList';
import InputArea from './InputArea';
import { useChatbot } from '../hooks/useChatbot';

const ChatLayout: React.FC = () => {
  const { messages, isLoading, sendMessage } = useChatbot();
  const [isOpen, setIsOpen] = useState(false);

  // Add CSS for animations
  React.useEffect(() => {
    if (!document.getElementById('chat-animations')) {
      const style = document.createElement('style');
      style.id = 'chat-animations';
      style.textContent = `
        @keyframes typingDot {
          0%, 60%, 100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }
        .typing-dot-1 { animation: typingDot 1.4s infinite; }
        .typing-dot-2 { animation: typingDot 1.4s infinite 0.2s; }
        .typing-dot-3 { animation: typingDot 1.4s infinite 0.4s; }
      `;
      document.head.appendChild(style);
    }
  }, []);


  // Floating chat button (when closed)
  if (!isOpen) {
    return (
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000
      }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#0066cc',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 102, 204, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#ffffff',
            transition: 'all 0.3s ease',
            transform: 'scale(1)'
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.transform = 'scale(1.05)';
            (e.target as HTMLButtonElement).style.backgroundColor = '#0052a3';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.transform = 'scale(1)';
            (e.target as HTMLButtonElement).style.backgroundColor = '#0066cc';
          }}
        >
          💬
        </button>
        {/* Tooltip */}
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: '0',
          backgroundColor: '#333',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '6px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none'
        }}
        onMouseEnter={(e) => (e.target as HTMLDivElement).style.opacity = '1'}
        >
          Need help? Chat with us!
        </div>
      </div>
    );
  }

  // Floating chat window (when open)
  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '420px',
      height: '500px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
      border: '1px solid #ffffff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'system-ui, sans-serif',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      isolation: 'isolate'
    }}>
      {/* Custom Header with controls */}
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: '#0066cc',
        color: '#ffffff',
        borderRadius: '12px 12px 0 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '28px'
      }}>
        <div>
          <h3 style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: '600'
          }}>
            DeviceCare Support
          </h3>
          <p style={{
            margin: '2px 0 0 0',
            fontSize: '14px',
            opacity: 0.9
          }}>
            How can we help you?
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              fontSize: '18px',
              opacity: 0.8,
              transition: 'opacity 0.2s ease',
              outline: 'none'
            }}
            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.opacity = '1'}
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.opacity = '0.8'}
          >
            ×
          </button>
        </div>
      </div>

      {/* Only show content when open */}
      <>
        {/* Message List with adjusted styling */}
        <div style={{
          flex: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <MessageList messages={messages} isLoading={isLoading} />
        </div>

        {/* Input Area */}
        <InputArea onSendMessage={sendMessage} isLoading={isLoading} />
      </>
    </div>
  );
};

export default ChatLayout;