// Define your topic list
const topicList = [
  { title: 'Topic 1', content: 'Content for Topic 1' },
  { title: 'Topic 2', content: 'Content for Topic 2' },
  { title: 'Topic 3', content: 'Content for Topic 3' },
];

let scene;
let selectedTopic = null;

// Function to display topic options
function displayTopicOptions() {
  const topicOptions = topicList.map((topic, index) => {
    return `${index + 1}. ${topic.title}`;
  });

  const userPrompt = `Which topic would you like to talk about?\n${topicOptions.join(
    '\n'
  )}`;

  // Update the user prompt
  scene.sendMessage(userPrompt);
}

// Function to handle user input
function handleUserInput(input) {
  // Parse user input to determine the selected topic
  const selectedOption = parseInt(input);

  // Check if the input is a valid option
  if (
    !isNaN(selectedOption) &&
    selectedOption >= 1 &&
    selectedOption <= topicList.length
  ) {
    selectedTopic = topicList[selectedOption - 1];
    // Display content card for the selected topic
    displayContentCard(selectedTopic);
  } else {
    // Handle invalid input or provide instructions to the user
    scene.sendMessage('Invalid input. Please select a valid topic.');
  }
}

// Function to display content card
function displayContentCard(topic) {
  // Assuming you want to display content in an HTML element with the ID 'content-card'
  const contentCardElement = document.getElementById('content-card');

  // Check if the content card element exists
  if (contentCardElement) {
    // Clear any previous content
    contentCardElement.innerHTML = '';

    // Create elements to display the content
    const titleElement = document.createElement('h2');
    titleElement.textContent = topic.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = topic.content;

    // Append the elements to the content card
    contentCardElement.appendChild(titleElement);
    contentCardElement.appendChild(contentElement);
  } else {
    console.warn('Content card element not found. Unable to display content.');
  }
}

// Event listeners for button clicks to establish a connection
const connectButton = document.getElementById('connect-button');
connectButton.addEventListener('click', () => connect());

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => (window.location = '/'));

// Function to connect to Soul Machines
async function connect() {
  // Get the video element
  const videoEl = document.getElementById('sm-video');

  try {
    // Create a new scene object
    scene = new smwebsdk.Scene({
      apiKey:
        'eyJzb3VsSWQiOiJkZG5hLXJhbmktbWFsaG90cmEtLW9wZW5haWludGVncmF0ZWQiLCJhdXRoU2VydmVyIjoiaHR0cHM6Ly9kaC5hei5zb3VsbWFjaGluZXMuY2xvdWQvYXBpL2p3dCIsImF1dGhUb2tlbiI6ImFwaWtleV92MV9lNzFiZTg0Ni1jMTZlLTQ1MWUtYjQwOS04YzhlYzEwZTkwMGUifQ==',
      videoElement: videoEl,
      requestedMediaDevices: { microphone: true, camera: true },
      requiredMediaDevices: { microphone: true, camera: true },
    });

    // Connect the Scene to the session server
    const sessionId = await scene.connect();
    onConnectionSuccess(sessionId);
  } catch (error) {
    onConnectionError(error);
  }
}

// Function to handle successful connection
function onConnectionSuccess(sessionId) {
  console.info('Connected! Session ID:', sessionId);

  // Start the video
  scene.startVideo();

  // Listen for user input messages from the digital person
  scene.onMessage((message) => {
    // Handle user input
    handleUserInput(message);
  });

  // Display the initial message
  scene.sendMessage('Hello!'); // You can customize this greeting message
  // Once the greeting message is displayed, the digital person will continue with the topic options.
}

// Function to handle connection errors
function onConnectionError(error) {
  console.error('Connection error:', error);

  // Handle connection error, e.g., display an error message to the user
  scene.sendMessage('Connection error. Please try again later.');
}
