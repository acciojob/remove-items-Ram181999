//your JS code here. If required.
// Function to remove the selected color
function removeColor() {
    const colorSelect = document.getElementById("colorSelect");

    // Get the selected index
    const selectedIndex = colorSelect.selectedIndex;

    if (selectedIndex >= 0) {
        // Remove the selected option
        colorSelect.remove(selectedIndex);
    }
}

// Add a click event listener to the button
const button = document.querySelector('input[type="button"]');
button.addEventListener('click', removeColor);

