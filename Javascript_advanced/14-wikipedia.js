function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let xhttp = new XMLHttpRequest();
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'

}