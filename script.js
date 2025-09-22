// Get all the square elements
const squares = document.querySelectorAll('.square');

// Add event listeners to each square
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    // Change the background color of all other squares to Coffee
    squares.forEach(s => {
      if (s !== square) {
        s.style.backgroundColor = '#6F4E37'; // Coffee color
      }
    });
  });

  square.addEventListener('mouseout', () => {
    // Reset the background color of all squares back to Lavender
    squares.forEach(s => {
      s.style.backgroundColor = '#E6E6FA'; // Lavender color
    });
  });
});