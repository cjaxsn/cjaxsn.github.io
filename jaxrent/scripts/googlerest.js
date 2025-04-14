function test()
{
    const outputElement = document.getElementById('output');

    const apiKey = 'AIzaSyBZ74oUzbj7rjjrff-L5QKh2ereQbugRko';
    const apiUrl = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyBZ74oUzbj7rjjrff-L5QKh2ereQbugRko';

    const requestOptions = {
        method: 'POST',
        /*mode: 'no-cors',*/
        headers: {
            'x-goog-user-project': 'jaxrent',
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
                console.log("response.status=" + response.status);
                throw new Error('Network response was not ok');
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