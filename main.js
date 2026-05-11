function main() {
    document.getElementById('enterButton').addEventListener('click', function() {
        const button = document.getElementById('enterButton');
        
        // Add fade-out animation
        button.classList.add('fade-out');
        
        // Remove button after animation completes
        setTimeout(() => {
            button.remove();
            route1();
        }, 600); // Match the animation duration
    });
}

function route1() {
    var p1 = document.getElementById("p1");
    p1.innerText = "Hello";
    p1.offsetHeight; // force reflow
    p1.classList.add('fade-in');
}

main();
