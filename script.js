const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");

// Function to add message to UI
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to send user message
async function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  userInput.value = "";

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();

    if (data.reply) {
      addMessage(data.reply, "bot");
    } else {
      addMessage("Oops... LOVI is quiet today 💔", "bot");
    }
  } catch (error) {
    console.error("Error:", error);
    addMessage("Something went wrong 😢", "bot");
  }
}

// Send message on Enter key
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Press Enter key to send
userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
