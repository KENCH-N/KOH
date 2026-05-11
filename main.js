function main() {
    document.getElementById('enterButton').addEventListener('click', function() {
        const button = document.getElementById('enterButton');
        
        // Add fade-out animation
        button.classList.add('fade-out');
        
        // Remove button after animation completes
        setTimeout(() => {
            button.remove();
            route("Hello", "World", "!", document.getElementById("button1"), document.getElementById("button2"));
        }, 600); // Match the animation duration
    });
}

function route(text1, text2, text3, button1, button2) {
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    
    // Fade in each paragraph with a delay
    p1.classList.add('fade-in');
    p1.innerText = "Hello";
    p1.classList.remove('gone');
    setTimeout(() => {
        p2.classList.add('fade-in');
        p2.innerText = "World";
        p2.classList.remove('gone');
    }, 600);
    setTimeout(() => {
        p3.classList.add('fade-in');
        p3.innerText = "!";
        p3.classList.remove('gone');
    }, 1200);
}

main();
