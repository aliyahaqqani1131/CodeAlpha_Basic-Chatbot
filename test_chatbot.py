import unittest
from chatbot import get_bot_response

class TestChatbot(unittest.TestCase):
    def test_greetings(self):
        resp, exit_flag = get_bot_response("hello")
        self.assertEqual(resp, "Hi!")
        self.assertFalse(exit_flag)

        resp, exit_flag = get_bot_response("Hi there!")
        self.assertEqual(resp, "Hi!")
        self.assertFalse(exit_flag)

    def test_status_question(self):
        resp, exit_flag = get_bot_response("how are you")
        self.assertEqual(resp, "I'm fine, thanks!")
        self.assertFalse(exit_flag)

        resp, exit_flag = get_bot_response("Hey, how are you?")
        self.assertEqual(resp, "Hi!") # 'hey' comes first in matching order if-elif, or let's test specific

    def test_goodbye(self):
        resp, exit_flag = get_bot_response("bye")
        self.assertEqual(resp, "Goodbye!")
        self.assertTrue(exit_flag)

        resp, exit_flag = get_bot_response("Goodbye!")
        self.assertEqual(resp, "Goodbye!")
        self.assertTrue(exit_flag)

    def test_unknown_input(self):
        resp, exit_flag = get_bot_response("What is the weather today?")
        self.assertTrue("I don't understand" in resp)
        self.assertFalse(exit_flag)

if __name__ == '__main__':
    unittest.main()
