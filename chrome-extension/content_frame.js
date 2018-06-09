console.log('extension loaded');

if(window.top) {
    window.top.postMessage(
        'junk data',
        window.location.protocol + "//" + window.location.host);
}