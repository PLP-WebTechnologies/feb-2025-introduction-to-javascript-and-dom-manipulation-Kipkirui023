// DOM Elements
const changeTextButton = document.getElementById('text-changer');
const changeableText = document.getElementById('changeable-text');
const styleDemo = document.getElementById('style-demo');
const toggleButton = document.getElementById('toggle-element');
const elementToToggle = document.getElementById('element-to-toggle');
const animateButton = document.getElementById('animate-box');
const loadImageButton = document.getElementById('load-image');
const dynamicImage = document.getElementById('dynamic-image');

// Function with parameters and return value
function createGreeting(name, punctuation = '!') {
    return `Hello, ${name}${punctuation}`;
}

// Function demonstrating scope
function updateElementStyles(element, styles) {
    const defaultStyles = {
        transition: 'all 0.3s ease'
    };
    
    for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
            element.style[property] = styles[property];
        }
    }
}

// Event Listeners
changeTextButton.addEventListener('click', function() {
    changeableText.textContent = createGreeting('Developer', '! 👋');
    changeableText.classList.add('visible');
    changeableText.style.animation = 'pulse 1s';
    setTimeout(() => {
        changeableText.style.animation = '';
    }, 1000);
});

styleDemo.addEventListener('click', function() {
    updateElementStyles(this, {
        backgroundColor: '#2196F3',
        borderRadius: '50%',
        color: 'white',
        transform: 'rotate(15deg)'
    });
    
    setTimeout(() => {
        updateElementStyles(this, {
            backgroundColor: '',
            borderRadius: '',
            color: '',
            transform: ''
        });
    }, 1000);
});

toggleButton.addEventListener('click', function() {
    elementToToggle.classList.toggle('hidden');
    this.textContent = elementToToggle.classList.contains('hidden') 
        ? 'Show Element' 
        : 'Hide Element';
});

animateButton.addEventListener('click', function() {
    styleDemo.classList.toggle('animated-box');
    this.textContent = styleDemo.classList.contains('animated-box') 
        ? 'Stop Animation' 
        : 'Start Animation';
});

loadImageButton.addEventListener('click', function() {
    const imageId = Math.floor(Math.random() * 1000);
    dynamicImage.src = `https://picsum.photos/id/${imageId}/200/200`;
    dynamicImage.alt = `Random image ${imageId}`;
    dynamicImage.classList.remove('animated-image');
    setTimeout(() => {
        dynamicImage.classList.add('animated-image');
    }, 10);
});

// Initialize with a random image
loadImageButton.click();

// Ripple effect function
function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    
    element.appendChild(ripple);
    
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    setTimeout(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(10)';
        ripple.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        createRippleEffect(this);
    });
});