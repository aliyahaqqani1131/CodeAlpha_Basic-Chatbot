"""
Basic Rule-Based Chatbot
------------------------
Task Requirement:
- Goal: Build a simple rule-based chatbot.
- Scope:
    - Input from user like: "hello", "how are you", "bye"
    - Predefined replies like: "Hi!", "I'm fine, thanks!", "Goodbye!"
- Key Concepts Used: if-elif, functions, loops, input/output
"""

def get_bot_response(user_input: str) -> tuple[str, bool]:
    """
    Function using if-elif statements to process user input and return predefined replies.
    Returns a tuple: (response_text, should_exit)
    """
    # Normalize input: lowercase and strip extra whitespace
    cleaned_input = user_input.strip().lower()

    # if-elif logic to match key phrases
    if cleaned_input == "":
        return "Please say something! You can try 'hello', 'how are you', or 'bye'.", False
    elif "hello" in cleaned_input or "hi" in cleaned_input or "hey" in cleaned_input:
        return "Hi!", False
    elif "how are you" in cleaned_input:
        return "I'm fine, thanks!", False
    elif "your name" in cleaned_input or "who are you" in cleaned_input:
        return "I am a simple rule-based chatbot!", False
    elif "what can you do" in cleaned_input or "help" in cleaned_input:
        return "I can respond to basic greetings like 'hello', 'how are you', and 'bye'.", False
    elif "bye" in cleaned_input or "goodbye" in cleaned_input or "quit" in cleaned_input or "exit" in cleaned_input:
        return "Goodbye!", True
    else:
        return "I'm sorry, I don't understand that. Try saying 'hello', 'how are you', or 'bye'.", False


def run_chatbot():
    """
    Function containing the main interactive loop and handling input/output.
    """
    print("=" * 50)
    print("           WELCOME TO THE BASIC CHATBOT          ")
    print("=" * 50)
    print("Type your message below (type 'bye' or 'exit' to quit).\n")

    # Loop to continuously ask for input
    while True:
        try:
            # Input from user
            user_input = input("You: ")
            
            # Get response from function using if-elif logic
            response, should_exit = get_bot_response(user_input)
            
            # Output response to user
            print(f"Bot: {response}\n")

            # Break loop if exit phrase matched
            if should_exit:
                break
        except (KeyboardInterrupt, EOFError):
            print("\nBot: Goodbye!")
            break


if __name__ == "__main__":
    run_chatbot()
