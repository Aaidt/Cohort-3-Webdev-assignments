const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter color.");

const inpVal = input.value;

const button = document.createElement("button");
button.onclick = () => {
    submit();
}

function submit(){
    document.body.style.backgroundColor = inpVal.toLowerCase();
}

const div = document.querySelector("div");

div.appendChild(input);
div.appendChild(button);