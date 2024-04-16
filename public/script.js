const userInputField = document.getElementById('user-input');
const chatHistory = document.getElementById('chat-history');
const chatForm = document.getElementById('chat-form');

chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const userInput = userInputField.value;
  userInputField.value = '';

  // Send the user input to the server and display the response
  const response = await fetch('/chat', {
    method: 'POST',
    body: JSON.stringify({ userInput }),
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  const responseText = data.responseText;

  const messageElement = document.createElement('p');
  messageElement.classList.add('model-message');
  messageElement.innerText = responseText;

  chatHistory.appendChild(messageElement);
  chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to bottom
});
