// Animation for cycling through LLM names
const llmNames = ['ChatGPT', 'Claude', 'Gemini', 'Deepseek'];
let currentIndex = 0;
const animatedText = document.getElementById('animatedText');

function cycleLLMNames() {
    animatedText.classList.add('slide-animation');
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % llmNames.length;
        animatedText.textContent = llmNames[currentIndex];
    }, 250); // Change text at the middle of the animation

    setTimeout(() => {
        animatedText.classList.remove('slide-animation');
    }, 500); // Remove animation class after animation completes
}

// Start the animation cycle
setInterval(cycleLLMNames, 2000); // Faster transitions