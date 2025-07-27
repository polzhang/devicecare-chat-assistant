import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import InputArea from './InputArea';
import { useChatbot } from '../hooks/useChatbot';

const ChatLayout: React.FC = () => {
  const { messages, isLoading, sendMessage } = useChatbot();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#fafafa',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <Header />
      <MessageList messages={messages} isLoading={isLoading} />
      <InputArea onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatLayout;