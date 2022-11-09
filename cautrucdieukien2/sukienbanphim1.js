function upArrowPressed() {
    let element = document.getElementById("Messi");
    element.style.top = parseInt(element.style.top) - 10 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById("Messi");
    element.style.top = parseInt(element.style.top) + 10 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById("Messi");
    element.style.left = parseInt(element.style.left) - 10 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById("Messi");
    element.style.left = parseInt(element.style.left) + 10 + 'px';
}

function upArrowPressedR7() {
    let element = document.getElementById("Ronaldo");
    element.style.top = parseInt(element.style.top) - 10 + 'px';
}
function downArrowPressedR7() {
    var element = document.getElementById("Ronaldo");
    element.style.top = parseInt(element.style.top) + 10 + 'px';
}
function leftArrowPressedR7() {
    var element = document.getElementById("Ronaldo");
    element.style.right = parseInt(element.style.right) - 10 + 'px';
}
function rightArrowPressedR7() {
    var element = document.getElementById("Ronaldo");
    element.style.right = parseInt(element.style.right) + 10 + 'px';
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
        case 68:
            leftArrowPressedR7();
            break;
        case 65:
            rightArrowPressedR7();
            break;
        case 87:
            upArrowPressedR7();
            break;
        case 83:
            downArrowPressedR7();
            break;
    }
}

// function moveSelectionR7(evt) {
//     switch (evt.keyCode) {
//         case 68:
//             leftArrowPressedR7();
//             break;
//         case 65:
//             rightArrowPressedR7();
//             break;
//         case 87:
//             upArrowPressedR7();
//             break;
//         case 83:
//             downArrowPressedR7();
//             break;
//     }
// }
function docReady() {
    window.addEventListener('keydown', moveSelection);
}