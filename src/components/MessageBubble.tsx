import React from 'react';
import type { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const formatTimestamp = (timestamp: Date) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatText = (text: string) => {
    // Split text by line breaks to handle each line
    const lines = text.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Handle numbered lists (1. 2. 3. etc.)
      const numberedListMatch = line.match(/^(\d+\.\s+)(.+)$/);
      if (numberedListMatch) {
        return (
          <div key={lineIndex} style={{ marginBottom: '8px', paddingLeft: '0px' }}>
            <strong>{numberedListMatch[1]}</strong>
            {formatInlineElements(numberedListMatch[2])}
          </div>
        );
      }

      // Handle bullet points (• or -)
      const bulletMatch = line.match(/^([•\-]\s+)(.+)$/);
      if (bulletMatch) {
        return (
          <div key={lineIndex} style={{ marginBottom: '6px', paddingLeft: '0px' }}>
            <span style={{ marginRight: '8px' }}>{bulletMatch[1]}</span>
            {formatInlineElements(bulletMatch[2])}
          </div>
        );
      }

      // Handle bold headers (**text**)
      const headerMatch = line.match(/^\*\*(.+?)\*\*:?\s*$/);
      if (headerMatch) {
        return (
          <div key={lineIndex} style={{ 
            fontWeight: 'bold', 
            marginTop: lineIndex > 0 ? '16px' : '0px',
            marginBottom: '8px',
            fontSize: '16px'
          }}>
            {headerMatch[1]}:
          </div>
        );
      }

      // Regular line with potential inline formatting
      return (
        <div key={lineIndex} style={{ marginBottom: line.trim() ? '4px' : '2px' }}>
          {formatInlineElements(line)}
        </div>
      );
    });
  };

  const formatInlineElements = (text: string) => {
    const parts = [];
    let lastIndex = 0;

    // Regex to find URLs, bold text, and other patterns
    const patterns = [
      { regex: /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.com(?:\/[^\s]*)?)/g, type: 'url' },
      { regex: /\*\*(.+?)\*\*/g, type: 'bold' },
      { regex: /support@devicecare\.com/g, type: 'email' },
      { regex: /\+\d{2}\s\d{9}/g, type: 'phone' }
    ];

    const allMatches: Array<{
      start: number;
      end: number;
      content: string;
      type: string;
      groups: RegExpMatchArray;
    }> = [];
    
    patterns.forEach(({ regex, type }) => {
      let match;
      const regexCopy = new RegExp(regex.source, regex.flags);
      while ((match = regexCopy.exec(text)) !== null) {
        allMatches.push({
          start: match.index,
          end: match.index + match[0].length,
          content: match[0],
          type,
          groups: match
        });
      }
    });

    // Sort matches by start position
    allMatches.sort((a, b) => a.start - b.start);

    allMatches.forEach((match, index) => {
      // Add text before this match
      if (match.start > lastIndex) {
        parts.push(text.slice(lastIndex, match.start));
      }

      // Add the formatted match
      switch (match.type) {
        case 'url':
          const url = match.content.startsWith('http') ? match.content : `https://${match.content}`;
          parts.push(
            <a
              key={`url-${index}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: message.isUser ? '#ffffff' : '#0066cc',
                textDecoration: 'underline'
              }}
            >
              {match.content}
            </a>
          );
          break;
        case 'email':
          parts.push(
            <a
              key={`email-${index}`}
              href={`mailto:${match.content}`}
              style={{
                color: message.isUser ? '#ffffff' : '#0066cc',
                textDecoration: 'underline'
              }}
            >
              {match.content}
            </a>
          );
          break;
        case 'phone':
          parts.push(
            <a
              key={`phone-${index}`}
              href={`tel:${match.content.replace(/\s/g, '')}`}
              style={{
                color: message.isUser ? '#ffffff' : '#0066cc',
                textDecoration: 'underline'
              }}
            >
              {match.content}
            </a>
          );
          break;
        case 'bold':
          parts.push(
            <strong key={`bold-${index}`}>
              {match.groups[1]}
            </strong>
          );
          break;
      }

      lastIndex = match.end;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: message.isUser ? 'flex-end' : 'flex-start',
      marginBottom: '12px'
    }}>
      <div style={{
        backgroundColor: message.isUser ? '#0066cc' : '#f8f9fa',
        color: message.isUser ? '#ffffff' : '#1a1a1a',
        padding: '12px 16px',
        borderRadius: '16px',
        maxWidth: '70%',
        fontSize: '15px',
        lineHeight: '1.3',
        border: message.isUser ? 'none' : '1px solid #e9ecef',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
      }}>
        {formatText(message.text)}
      </div>
      <div style={{
        fontSize: '11px',
        color: '#999999',
        marginTop: '2px',
        marginLeft: message.isUser ? '0' : '8px',
        marginRight: message.isUser ? '8px' : '0'
      }}>
        {formatTimestamp(message.timestamp)}
      </div>
    </div>
  );
};

export default MessageBubble;