const handleChangeColor = (e) => {
  // Remove 'active' class from all colorSelector items
  var elements = document.getElementsByClassName("colorSelector");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("active");
  }

  // Add 'active' class to the clicked colorSelector item
  e.currentTarget.classList.add("active");
};

// Get the relevant elements by their IDs
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const counterElement = document.getElementById("counter");

// Initial counter value
let counter = 0;

// Function to update the counter value and display it
const updateCounter = () => {
  counterElement.textContent = counter;
};

// Decrement the counter when the "remove" icon is clicked
decrementButton.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    updateCounter();
  }
});

// Increment the counter when the "add" icon is clicked
incrementButton.addEventListener("click", () => {
  counter++;
  updateCounter();
});

// Call the updateCounter function to initialize the display
updateCounter();
