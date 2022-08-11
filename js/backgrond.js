const image = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = image[Math.floor(Math.random() * image.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImage}`;

document.body.appendChild(backgroundImage);
