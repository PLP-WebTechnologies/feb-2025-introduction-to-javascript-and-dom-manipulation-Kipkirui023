// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const changeTextButton = document.getElementById('text-changer');
    const changeableText = document.getElementById('changeable-text');
    
    changeTextButton.addEventListener('click', function() {
        changeableText.textContent = "The text has been changed successfully!";
        changeableText.classList.add('highlight');
    });
    
    // Task 2: Modify CSS styles via JavaScript
    const styleDemo = document.getElementById('style-demo');
    
    styleDemo.addEventListener('click', function() {
        this.style.backgroundColor = '#a0d6b4';
        this.style.color = '#333';
        this.style.fontSize = '18px';
        this.style.border = '2px solid #4CAF50';
        this.textContent = "Styles have been changed!";
    });
    
    // Task 3: Add or remove an element when a button is clicked
    const toggleButton = document.getElementById('toggle-element');
    const elementToToggle = document.getElementById('element-to-toggle');
    
    toggleButton.addEventListener('click', function() {
        elementToToggle.classList.toggle('hidden');
        
        if (elementToToggle.classList.contains('hidden')) {
            toggleButton.textContent = "Show Element";
        } else {
            toggleButton.textContent = "Hide Element";
        }
    });
    
    // Bonus: Change the main heading color on mouseover
    const mainHeading = document.getElementById('main-heading');
    
    mainHeading.addEventListener('mouseover', function() {
        this.style.color = '#4CAF50';
    });
    
    mainHeading.addEventListener('mouseout', function() {
        this.style.color = '';
    });
});