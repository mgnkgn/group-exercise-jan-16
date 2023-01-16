# Get started

Clone this repository.
Open it in VScode and run

```npm i```

from the terminal.
Start working by editing the ./src/pages/index.jsx file.

# Info:
Example code for using the chatbot:
```
import { Chatbot } from "popcat-chatbot";

const chatbot = new Chatbot()
  .setName("Chat Bot")
  .setGender("Male")
  .setOwner("EEEF");

chatbot.chat("hello world").then(console.log).catch(console.error);
```

# Task

Make a chatbot conversation app.
We will use the "popcat-chatbot" package from npm, which is already a requirement in our package.json file.

In index.jsx, inside the Home class component, we will add:

An input field for the question we want to ask the chatbot.
A "Send" button to ask the chatbot a question, or talk to them.

When user sends a question to the bot, create an object {question: *the text inside the input*, answer: *answer received from the bot*, timestamp: *current timestamp, looks like this: 1671402915492*}.

We will receive the answer from the chatbot by creating a chatbot instance object, and calling .chat() on it, which is a Promise, that gives us a response string from the bot.

Save the object in an array, and save that array to localstorage.
Tip: Use componentDidUpdate();

When user loads the page, load answers from localstorage.
Tip: Use componentDidMount();

Make a new "Answers" component, where we will display all the answers inside a div and two P tags, one for the question, one for the answer.

Optional: The Sort By Time button sorts the answer array by the timestamp in each answer. Use b.timestamp - a.timestamp.

Optional: Make the sort order(ascending or descending) by text and time buttons invert the sorting order every time you press the button.

