// script.js
const form = document.getElementById('feruco-form');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const closeModal = document.querySelector('.close');
const messageInput = document.getElementById('message');
const thoughtButton = document.getElementById('thought-button');
let isModalOpen = false;

// List of Feruco's wise thoughts
const ferucoThoughts = [
  "A mouse a day keeps the vet away",
  "There are no thoughts behind my eyes",
  "It's my moment with the braincell",
  "If you were smart, you'd be screaming too"
];

// When the form is submitted (MEOW response)
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Show the modal and set the MEOW message
  modalMessage.textContent = 'MEOW';
  modal.style.display = 'block';
  isModalOpen = true;

  // Clear the message box after submission
  messageInput.value = '';
});

// When the "FERUCO THOUGHT OF THE DAY" button is clicked
thoughtButton.addEventListener('click', function() {
  // Select a random thought from Feruco's wisdom
  const randomThought = ferucoThoughts[Math.floor(Math.random() * ferucoThoughts.length)];

  // Show the modal with the random thought
  modalMessage.textContent = randomThought;
  modal.style.display = 'block';
  isModalOpen = true;
});

// Close the modal when the user clicks on the "x"
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
  isModalOpen = false;
});

// Close the modal if user clicks anywhere outside of the modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    isModalOpen = false;
  }
});

// Clear the modal message when the user starts typing again
messageInput.addEventListener('input', function() {
  if (isModalOpen) {
    modal.style.display = 'none';
    isModalOpen = false;
  }
});

