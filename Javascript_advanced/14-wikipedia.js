function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true)


    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            let page = response.query.pages;
            let extract = page[Object.keys(page)[0]].extract;
            callback(extract);
        }
    };
    xhttp.send();
}

queryWikipedia(createElement);