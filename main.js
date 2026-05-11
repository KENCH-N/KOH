document.getElementById('enterButton').addEventListener('click', function() {
    const paragraph = document.querySelector('#app p');
    const button = document.getElementById('enterButton');
    
    // Add fade-out animation
    paragraph.classList.add('fade-out');
    button.classList.add('fade-out');
    
    // Remove elements and add new content after animation completes
    setTimeout(() => {
        paragraph.remove();
        button.remove();
        
        // Create new content with fade-in animation
        const newContent = document.createElement('p');
        newContent.textContent = 'You have entered the Kingdom of Heaven';
        newContent.style.animation = 'fadeIn 0.8s ease-out';
        
        document.getElementById('app').appendChild(newContent);
    }, 600); // Match the animation duration
});
