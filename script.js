const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");

// Function to add message to UI
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatWindow.appendChild(msg);

  // Auto-scroll to bottom
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to send user message
function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return; // Ignore empty input

  // Show user message
  addMessage(text, "user");

  // Clear input
  userInput.value = "";

  // TEMP: Dummy romantic reply until backend is ready
  setTimeout(() => {
    addMessage("Aww 💕 I love hearing from you 😘", "bot");
  }, 800);
}

// Press Enter key to send
userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});