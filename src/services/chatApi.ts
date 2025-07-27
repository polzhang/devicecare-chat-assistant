const API_BASE_URL = 'http://localhost:8000';

export const chatApi = {
  async sendMessage(message: string): Promise<string> {
    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Chat API error:', error);
      throw new Error('Failed to send message. Please try again.');
    }
  }
};
