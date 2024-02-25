let firstElement = 0;
let secondElement = 0;

function clickHandler() {
    postMessage({ firstElement, secondElement });
    secondElement = (secondElement + 1) % totalElements;

    if (secondElement == 0) {
        firstElement = (firstElement + 1) % totalElements;
    }

    setTimeout(clickHandler, 100); // Reduce the delay between clicks
}

clickHandler();
