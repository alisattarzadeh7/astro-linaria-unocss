import { URL } from 'url';

export function resolve(specifier, context, defaultResolve) {
    // Check if the specifier is a remote URL
    if (specifier.startsWith('http://') || specifier.startsWith('https://')) {
        return {
            url: specifier
        };
    }

    // Use the default resolver for other cases
    return defaultResolve(specifier, context);
}

export function load(url, context, defaultLoad) {
    console.log({fetCurl:url})
    // Fetch the module from the remote URL
    return fetch(url).then(response => response.text());
}