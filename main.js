function main() {
    document.getElementById('enterButton').addEventListener('click', function() {
        const button = document.getElementById('enterButton');
        
        // Add fade-out animation
        button.classList.add('fade-out');
        
        // Remove button after animation completes
        setTimeout(() => {
            button.remove();
        }, 600); // Match the animation duration
    });
}
main();
