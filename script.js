const container = document.getElementById('container');

const hackingCommands = [
  "Hacking Start...",
  "Connecting to target device...",
  "Bypassing Security...",
  "Copying files from device...",
  "Sending data to server...",
  "Deleting files from device...",
  "Your Device is HACKED!!!..."
];

function getRandomDelay(min = 1000, max = 10000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper to wait for ms milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Show loading dots animation (3 dots blinking)
async function showLoadingDots(element, duration = 2000) {
  const dots = ['.', '..', '...'];
  let i = 0;
  const interval = 500; // time between dot changes

  const startTime = Date.now();

  while (Date.now() - startTime < duration) {
    element.innerText = dots[i % dots.length];
    i++;
    await wait(interval);
  }
}

// Type text letter by letter with small delay between each char
async function typeText(element, text, typingSpeed = 100) {
  element.innerText = '';  // Clear before typing
  for (let i = 0; i < text.length; i++) {
    element.innerText += text.charAt(i);
    await wait(typingSpeed);
  }
}

async function addCommandsSequentially(commands) {
  for (const command of commands) {
    // Create paragraph for loading dots first
    const loadingElement = document.createElement('p');
    container.appendChild(loadingElement);
    container.scrollTop = container.scrollHeight;

    // Show loading animation for a random duration between 1-3 seconds
    await showLoadingDots(loadingElement, getRandomDelay(1000, 3000));

    // Then type the actual command
    await typeText(loadingElement, command, 20);

    container.scrollTop = container.scrollHeight;
  }
}

addCommandsSequentially(hackingCommands);
