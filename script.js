function changeText() {
    const paragraph = document.getElementById('dynamicText');
    paragraph.innerHTML = 'to this';
}

function changeColor() {
    const elements = document.getElementsByTagName('p');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = 'red';
    }
}

function changeImage() {
    const image = document.getElementById('image');
    image.src = 'mit1.jpg';
    console.log("image changed");
}

function addTextNode() {
    const newText = document.createTextNode('added node');
    const parentElement = document.getElementById('parentNode');
    parentElement.appendChild(newText);
}

function deleteNode() {
    const parentElement = document.getElementById('parentNode');
    const childElements = parentElement.getElementsByClassName('child');
    
    if (childElements.length > 0) {
        parentElement.removeChild(childElements[childElements.length - 1]);
    }
}
