// Initialize custom rules array
let customAdBlockRules = [
    "*://*.doubleclick.net/*",
    "*://adservice.google.*/*",
    "*://*.googlesyndication.com/*"
];

function downloadAdBlockList(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            let rules = parseAdBlockRules(text);
            // Combine fetched rules with custom rules and update global variable
            combinedRules = rules.concat(customAdBlockRules);
            return combinedRules;
        })
        .catch(error => console.error('There was a problem with the fetch operation: ', error));
}

function parseAdBlockRules(listText) {
    return listText.split('\n')
        .filter(line => line && !line.startsWith('!'))
        .map(line => line.trim());
}

// Ensure `combinedRules` is defined and initially set to custom rules as fallback
let combinedRules = customAdBlockRules;

function blockRequests(requests) {
    const blockedRequests = requests.filter(request => {
        return combinedRules.some(rule => new RegExp(rule.replace("*", ".*")).test(request.url));
    });
    return blockedRequests;
}

function updateCustomRules(newRules) {
    // Update the custom rules and re-combine with the latest fetched list if needed
    customAdBlockRules = newRules;
    combinedRules = combinedRules.slice(0, combinedRules.length - customAdBlockRules.length).concat(customAdBlockRules);
}
