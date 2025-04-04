// 🟦 Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// 🟦 Chat Modal Toggle
function toggleChat() {
  const chatModal = document.getElementById('chatModal');
  chatModal.style.display = (chatModal.style.display === 'flex') ? 'none' : 'flex';
}

// 🟦 Modal Open / Close
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// 🟦 Close modal when clicking outside the content
window.onclick = function (e) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// 🟦 Chatbot Input Logic
window.onload = function () {
  const container = document.querySelector('.chat-input-container');
  if (container) {
    const input = document.createElement('input');
    input.className = 'chat-input';
    input.id = 'userInput';
    input.placeholder = 'Type your message...';

    const btn = document.createElement('button');
    btn.className = 'chat-send';
    btn.innerText = 'Send';
    btn.onclick = sendMessage;

    container.appendChild(input);
    container.appendChild(btn);
  }
};

function sendMessage() {
  const input = document.getElementById('userInput');
  const messageText = input.value.trim();
  if (!messageText) return;

  const chatMessages = document.getElementById('chatMessages');

  const userMsg = document.createElement('div');
  userMsg.className = 'message user-message';
  userMsg.innerText = messageText;
  chatMessages.appendChild(userMsg);

  chatMessages.scrollTop = chatMessages.scrollHeight;
  input.value = '';

  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'message bot-message';
    botMsg.innerText = generateBotResponse(messageText);
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);
}

function generateBotResponse(message) {
  const msg = message.toLowerCase();
  if (msg.includes('tutor')) {
    return "You can find a tutor by clicking 'Find a Tutor'!";
  } else if (msg.includes('apply') || msg.includes('teach')) {
    return "Click 'Become a Tutor' to apply and start earning!";
  } else if (msg.includes('price') || msg.includes('cost')) {
    return "Pricing is affordable! Check the pricing section.";
  }
  return "Thanks for your message! A team member will respond soon.";
}
