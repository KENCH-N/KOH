const para = document.createElement("p");

function main() {
    document.getElementById("enterButton").addEventListener("click", function() {
        // Handle button click event
        para.innerHTML = "Button Clicked!";
        document.body.appendChild(para);
    });
}