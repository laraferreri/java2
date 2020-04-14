let Button = document.getElementById("fortune-button");
let Input = document.getElementById("fortune-input").value;
let Output = document.getElementById("fortune-output");
let List = ["A beautiful, smart, and loving person will be coming into your life.", "Courtesy is contagious.", "First think of what you want to do; then do what you have to do.", "Good to begin well, better to end well..", "If you continually give, you will continually have.", ]

fortButton.addEventListener("click", fortune);
fortButton.addEventListener("click", restyle);

function fortune() {
    Out = List[Math.floor(Math.random() * List.length)];
    console.log(Out);
    Output.innerHTML = Out;
}

function restyle() {
    Output.style.fontSize = (Math.random() * 100) + "px";
    Output.style.color = "rgb(" + (Math.random() * 200)
    Output.style.padding = (Math.random() * 300) + "px";
}
