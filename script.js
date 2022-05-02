var awnsers = [];
var form = document.querySelector("form");

function showMessage(message, style) {
    var messageBox = document.querySelector(".message");
    messageBox.innerHTML = `<p style="${style};">${message}</p>`;
}

form.addEventListener("submit", function(event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
        output = output + entry[1];
    };
    if (output === "e") {
        showMessage("Resposta Correta!", "background-color: green;");
    } else {
        showMessage("Resposta Incorreta!", "background-color: red;");
    }
    event.preventDefault();
});