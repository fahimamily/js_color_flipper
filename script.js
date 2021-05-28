
let isHex = false;
document.getElementById("value");
let currrentColor = {
    red: 0,
    green: 0,
    blue: 0
};


function setColor() {
    let color = `rgb(${currrentColor.red}, ${currrentColor.green}, ${currrentColor.blue})`;
    if (isHex) {
        document.getElementById("value").innerHTML = toHex(currrentColor);
    } else {
        document.getElementById("value").innerHTML = color
    }
    document.body.style.backgroundColor = color;
}

document.getElementById("color-change-btn").onclick = function () {
    currrentColor = getRandomColor();
    setColor();
};

let redColor = 0;
let blueColor = 0;
let greenColor = 0;
let maxColorValue = 256;
let hexvalue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

document.getElementById("simple-btn").onclick = function () {
    if (isHex) {
        isHex = false;
        toggleButton();
        setColor();
    }
};
document.getElementById("hex-btn").onclick = function () {
    if (!isHex) {
        isHex = true;
        toggleButton();
        setColor();
    }
};


function toggleButton() {
    document.getElementById("hex-btn").parentNode.classList.toggle("nav-item-active");
    document.getElementById("simple-btn").parentNode.classList.toggle("nav-item-active");
}

function getRandomColor() {
    return {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255)
    }
}

function getHexValue(num, length) {
    let temp = num, ans = "";
    for (let i = 0; i < length; i++) {
        ans = hexvalue[temp % 16] + ans;
        temp = Math.floor(temp / 16);
    }
    return ans;
}

function toHex(color) {
    return `#${getHexValue(color.red, 2)}${getHexValue(color.green, 2)}${getHexValue(color.blue, 2)}`;
}