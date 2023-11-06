function checkEnter(event) {
    if (event.key === 'Enter') {
        checkName();
    }
}

function checkName() {
    var name = document.getElementById('nameInput').value;
    fetch('names.json')
        .then(response => response.json())
        .then(data => {
            if (data.names.includes(name)) {
                showRandomText(name);
            } else {
                showThumbsUp();
            }
        })
        .catch(error => console.error('Error:', error));
}

function showRandomText(name) {
    fetch('texts.json')
        .then(response => response.json())
        .then(data => {
            var randomIndex = Math.floor(Math.random() * data.texts.length);
            var randomText = data.texts[randomIndex].replace('[Nome]', name);

            document.getElementById('content').classList.add('hidden');
            document.getElementById('result').innerHTML = '<h2>' + randomText + '</h2>';
            document.getElementById('result').classList.remove('hidden');

            document.body.classList.add('white-background');
        })
        .catch(error => console.error('Error:', error));
}

function showThumbsUp() {
    document.getElementById('content').classList.add('hidden');
    document.getElementById('result').innerHTML = '<h2>👍 Ta bonita!</h2>';
    document.getElementById('result').classList.remove('hidden');
}
