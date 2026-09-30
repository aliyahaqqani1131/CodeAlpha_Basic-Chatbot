// Rule-based Chatbot Logic matching the Python script implementation
function getBotResponse(input) {
    const cleaned = input.trim().toLowerCase();

    if (cleaned === "") {
        return "Please say something! You can try 'hello', 'how are you', or 'bye'.";
    } else if (cleaned.includes("hello") || cleaned.includes("hi") || cleaned.includes("hey")) {
        return "Hi!";
    } else if (cleaned.includes("how are you")) {
        return "I'm fine, thanks!";
    } else if (cleaned.includes("your name") || cleaned.includes("who are you")) {
        return "I am a simple rule-based chatbot!";
    } else if (cleaned.includes("what can you do") || cleaned.includes("help")) {
        return "I can respond to basic greetings like 'hello', 'how are you', and 'bye'.";
    } else if (cleaned.includes("bye") || cleaned.includes("goodbye") || cleaned.includes("exit") || cleaned.includes("quit")) {
        return "Goodbye!";
    } else {
        return "I'm sorry, I don't understand that. Try saying 'hello', 'how are you', or 'bye'.";
    }
}

const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const clearBtn = document.getElementById('clear-btn');

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    contentDiv.innerText = text;

    const timeSpan = document.createElement('span');
    timeSpan.classList.add('timestamp');
    timeSpan.innerText = getCurrentTime();

    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timeSpan);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('message', 'bot-message', 'typing-indicator-msg');
    typingDiv.id = 'typing-indicator';
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    contentDiv.innerHTML = `
        <div class="typing-dots">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    
    typingDiv.appendChild(contentDiv);
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
        indicator.remove();
    }
}

function handleSendMessage(text) {
    const messageText = text || userInput.value;
    if (!messageText.trim()) return;

    // Display user message
    appendMessage('user', messageText);
    if (!text) userInput.value = '';

    // Show bot typing effect then reply
    showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator();
        const botReply = getBotResponse(messageText);
        appendMessage('bot', botReply);
    }, 500);
}

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSendMessage();
});

function sendSuggested(text) {
    handleSendMessage(text);
}

clearBtn.addEventListener('click', () => {
    chatMessages.innerHTML = `
        <div class="message bot-message">
            <div class="message-content">
                Chat history cleared. Try sending me inputs like <strong>"hello"</strong>, <strong>"how are you"</strong>, or <strong>"bye"</strong>!
            </div>
            <span class="timestamp">${getCurrentTime()}</span>
        </div>
    `;
});
