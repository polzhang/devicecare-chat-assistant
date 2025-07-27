# DeviceCare AI Support Assistant

AI-powered chat application for DeviceCare customer support built with React + FastAPI.

## 🚀 Quick Start

```bash
git clone https://github.com/yourusername/devicecare-chat-assistant.git
cd devicecare-chat-assistant
docker-compose up --build
```

**🔗 Access the chatbot:** http://localhost

*Note: OpenAI API key is pre-configured for interview purposes*

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** FastAPI, OpenAI API, Python
- **Deployment:** Docker, Nginx

## 📋 Features

- Real-time AI chat interface
- DeviceCare-specific knowledge base
- Responsive design with loading states
- Dockerized microservices architecture
- Type-safe API integration

## 🏗 Architecture

```
React Frontend → Nginx Proxy → FastAPI Backend → OpenAI API
```

## 💡 Key Decisions

- **FastAPI:** High performance, auto-docs, type safety
- **Docker:** Consistent deployment, easy scaling
- **TypeScript:** Compile-time error catching
- **Microservices:** Clean separation of concerns

## 🧪 Test Queries

- "How do I install DeviceCare?"
- "My device scan is slow, help?"
- "What platforms are supported?"

## 📁 Structure

```
├── src/                 # React frontend
├── backend/main.py      # FastAPI app
├── docker-compose.yml   # Container orchestration
└── nginx.conf           # Reverse proxy
```

## 🔧 Requirements

- Docker Desktop (running as administrator on Windows)

*OpenAI API key included for interview evaluation*


**Built for Asurion FSD Intern Interview** | 
