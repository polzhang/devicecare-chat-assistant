# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

# DeviceCare knowledge base
SYSTEM_PROMPT = """You are a helpful support assistant for DeviceCare, a device management solution.

DeviceCare Overview:
A tool that monitors, protects, and optimizes electronic devices.
Compatible with Windows, macOS, Android, and iOS.

Key Features:
• Device health monitoring
• Performance optimization  
• Security scans & real-time protection
• Automated backups
• Remote support

Common Actions:

**Installation Steps**
1. Download the software from our official website at www.devicecare.com
2. Run the setup file
3. Follow the on-screen instructions to complete the installation process
4. If you encounter any issues during installation, feel free to reach out for assistance

**Running Health Scan**
1. Open the DeviceCare app
2. Navigate to the 'Health' tab
3. Click 'Run Scan'
4. Wait for the scan to complete

**Updating the App**
• Auto-updates are enabled by default
• For manual updates: Go to 'Settings' → 'Check for Updates'

**Adding Multiple Devices**
• One subscription supports multiple devices
• Add devices via the app or web portal at www.devicecare.com

Support & Access:
• Free 14-day trial available at www.devicecare.com
• 24/7 support options:
  - In-app chat
  - Email: support@devicecare.com
  - Phone: +65 987654321
• Full compatibility list available on our website

**Important:** Always format step-by-step instructions using numbered lists and use ** for emphasis. Include website links as plain text (www.devicecare.com) when relevant.

Rules:
If questions are unrelated to DeviceCare, politely redirect: "I'm here to help with DeviceCare. For other topics, please consult the appropriate support resources."

Keep responses well-formatted, professional, and helpful."""

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        api_key = os.getenv('VITE_API_KEY')
        if not api_key:
            raise HTTPException(status_code=500, detail="API key not configured")
        
        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
        
        data = {
            "model": "gpt-3.5-turbo",
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": request.message}
            ],
            "max_tokens": 200,
            "temperature": 0.7
        }
        
        # Current implementation using Chat Completions API
        # Based on assignment guidelines, Completions API is sufficient. 
        # We definitely could use Assistants API if we really must, 
        # but it's a bit overkill, given that users of a Chatbot/Help Assistant
        # usually won't require functions like tool calling and file uploading 
        response = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers=headers,
            json=data
        )
        
        # Assistants API implementation; was too complex for this use case
        # Requires multiple API calls, thread management, and polling for responses
        # Added significant latency and complexity without meaningful benefits for simple Q&A
        
        #assistant_data = {
        #    "model": "gpt-3.5-turbo",
        #    "name": "DeviceCare Support Assistant", 
        #    "instructions": SYSTEM_PROMPT
        #}
        #assistant_response = requests.post("https://api.openai.com/v1/assistants", headers=headers, json=assistant_data)
        #thread_response = requests.post("https://api.openai.com/v1/threads", headers=headers, json={})
        #message_data = {"role": "user", "content": request.message}
        #requests.post(f"https://api.openai.com/v1/threads/{thread_id}/messages", headers=headers, json=message_data)
        #run_data = {"assistant_id": assistant_id}
        #requests.post(f"https://api.openai.com/v1/threads/{thread_id}/runs", headers=headers, json=run_data)
   
        
        if response.status_code != 200:
            raise HTTPException(status_code=500, detail=f"OpenAI error: {response.status_code}")
        
        result = response.json()
        ai_response = result["choices"][0]["message"]["content"]
        
        return ChatResponse(response=ai_response)
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {"message": "DeviceCare Q&A API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)