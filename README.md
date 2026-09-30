# Task 4: Basic Chatbot

A simple rule-based chatbot built according to task specifications.

## 📋 Task Specifications & Scope

- **Goal:** Build a simple rule-based chatbot.
- **Scope:**
  - Input from user like: `"hello"`, `"how are you"`, `"bye"`.
  - Predefined replies like: `"Hi!"`, `"I'm fine, thanks!"`, `"Goodbye!"`.
- **Key Concepts Used:** `if-elif`, `functions`, `loops`, `input/output`.

---

## 📁 Repository Structure

```
├── chatbot.py        # Main Python rule-based chatbot (CLI interface)
├── test_chatbot.py   # Unit tests verifying rule matching
├── index.html        # Modern Glassmorphism Web UI
├── style.css         # Styling, dark mode & animations
├── script.js         # Web implementation of rule engine
└── server.py        # Local web server runner
```

---

## 🚀 How to Run

### 1. Python Console Chatbot (Command Line)

Run the Python script in your terminal:

```bash
python chatbot.py
```

**Example Interaction:**
```
==================================================
           WELCOME TO THE BASIC CHATBOT          
==================================================
Type your message below (type 'bye' or 'exit' to quit).

You: hello
Bot: Hi!

You: how are you
Bot: I'm fine, thanks!

You: bye
Bot: Goodbye!
```

### 2. Run Unit Tests

```bash
python test_chatbot.py
```

### 3. Web UI Chatbot

To launch the web interface in your browser:

```bash
python server.py
```
Or open [http://localhost:8000](http://localhost:8000) directly in your browser.
