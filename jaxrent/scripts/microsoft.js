const apiKey = "EsKz28O4Rahm36QLE56U4qVd6i95BdP2xpgLp179TvFEjr12Rct4JQQJ99BDACYeBjFXJ3w3AAAbACOGDvrE"; // Replace with your Azure AI Translator API key
const endpoint = "https://api.cognitive.microsofttranslator.com";
const region = "eastus"; // Required for multi-service or regional resources
const sourceLanguage = "en";
var targetLanguage = "fr";
const textToTranslate = "Hello, how are you?";

async function translateText() {
    targetLanguage = document.getElementById('txtLanguage').value;
    const route = `/translate?api-version=3.0&from=${sourceLanguage}&to=${targetLanguage}`;
    const body = JSON.stringify([{ "Text": textToTranslate }]);

    try {
        const response = await fetch(
            `${endpoint}${route}`,
            {
                method: 'POST',
                headers: {
                    'Ocp-Apim-Subscription-Key': apiKey,
                    'Ocp-Apim-Subscription-Region': region,
                    'Content-Type': 'application/json'
                },
                body: body
            }
        );

        const data = await response.json();

        if (response.ok) {
            const translatedText = data[0].translations[0].text;
            console.log(`Translated text: ${translatedText}`);
            document.getElementById("divOutput").innerHTML = translatedText;
        } else {
            console.error(`Error: ${data.error.message}`);
        }
    } catch (error) {
        console.error(`Fetch error: ${error}`);
    }
}

async function getLanguages() {
    targetLanguage = document.getElementById('txtLanguage').value;
    const route = '/languages?api-version=3.0';
    //const body = JSON.stringify([{ "Text": textToTranslate }]);

    try {
        const response = await fetch(
            `${endpoint}${route}`,
            {
                method: 'GET',
                headers: {
                    'Ocp-Apim-Subscription-Key': apiKey,
                    'Ocp-Apim-Subscription-Region': region,
                    'Content-Type': 'application/json'
                }
                //body: body
            }
        );

        const data = await response.json();

        if (response.ok) {
            const supportedLanguages = JSON.stringify(data.translation);
            console.log(`Languages: ${supportedLanguages}`);
            document.getElementById("divLanguages").innerHTML = supportedLanguages;
        } else {
            console.error(`Error: ${data.error.message}`);
        }
    } catch (error) {
        console.error(`Fetch error: ${error}`);
    }
}
