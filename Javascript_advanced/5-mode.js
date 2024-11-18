function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Atlas!';
    document.body.appendChild(paragraph);

    let spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);

    let darkButton = document.createElement('button');
    darkButton.textContent = 'Dark mode';
    darkButton.addEventListener('click', darkMode);
    document.body.appendChild(darkButton);

    let screamButton = document.createElement('button');
    screamButton.textContent = 'Scream mode';
    screamButton.addEventListener('click', screamMode);
    document.body.appendChild(screamButton);
}

main()
