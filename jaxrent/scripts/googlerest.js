function translateTest()
{
    const outputElement = document.getElementById('output');

    const apiUrl = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDAL-P6lY5iERPG63rGIls1ZEYlzGMOjbY';

    const requestOptions = {
        method: 'POST',
        /*mode: 'no-cors',*/
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            q: 'the house is built with wood',
            target: 'fr-CA'
        })
    };

    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                console.log("response.status=" + response.status + "response.statusText=" + response.statusText + "response.URL=" + response.URL);
                throw new Error(`Network response was not ok, status code ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            outputElement.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


function displayLanguage()
{
    const outputElement = document.getElementById('divLanguageDisplay');

    const apiUrl = 'https://translation.googleapis.com/language/translate/v2/languages?key=AIzaSyDAL-P6lY5iERPG63rGIls1ZEYlzGMOjbY';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            target: 'de'
        })
    };

    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                console.log("response.status=" + response.status + "response.statusText=" + response.statusText + "response.URL=" + response.URL);
                throw new Error(`Network response was not ok, status code ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            outputElement.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}