// ===== Task 1: Book Ticket button appearance on click =====
const bookButtons = document.querySelectorAll('.card-book-btn');

bookButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const isBooked = btn.classList.toggle('booked');
    btn.textContent = isBooked ? 'Booked ✓' : 'Book Ticket';
  });
});

// ===== Task 2: Show/hide the Event Details panel =====
const toggleDetailsBtn = document.getElementById('toggle-details-btn');
const eventDetailsPanel = document.getElementById('event-details-panel');

toggleDetailsBtn.addEventListener('click', () => {
  const isHidden = eventDetailsPanel.classList.toggle('hidden');
  toggleDetailsBtn.textContent = isHidden ? 'Show Event Details' : 'Hide Event Details';
});

// ===== Task 3 & 4: Booking form and validation =====
const bookingForm = document.getElementById('booking-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const eventSelect = document.getElementById('event-select');
const ticketInput = document.getElementById('ticket-count');
const successMessage = document.getElementById('booking-success');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(input, errorId, message) {
  document.getElementById(errorId).textContent = message;
  input.classList.toggle('input-error', Boolean(message));
}

function validateForm() {
  let isValid = true;

  if (!nameInput.value.trim()) {
    setError(nameInput, 'name-error', 'Please enter your name.');
    isValid = false;
  } else {
    setError(nameInput, 'name-error', '');
  }

  if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
    setError(emailInput, 'email-error', 'Please enter a valid email address.');
    isValid = false;
  } else {
    setError(emailInput, 'email-error', '');
  }

  if (!eventSelect.value) {
    setError(eventSelect, 'event-error', 'Please select an event.');
    isValid = false;
  } else {
    setError(eventSelect, 'event-error', '');
  }

  const ticketCount = Number(ticketInput.value);
  if (!ticketInput.value || ticketCount < 1) {
    setError(ticketInput, 'tickets-error', 'Please enter at least 1 ticket.');
    isValid = false;
  } else {
    setError(ticketInput, 'tickets-error', '');
  }

  return isValid;
}

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  successMessage.hidden = true;

  if (validateForm()) {
    successMessage.hidden = false;
    bookingForm.reset();
  }
});
