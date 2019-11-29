const languages = navigator.languages;

vhLanguages = {
    'fr': 'http://127.0.0.1:5500/testFr.html',
    'en': 'http://127.0.0.1:5500/testEn.html',
    'es': 'http://127.0.0.1:5500/testEs.html',
    'pt': 'http://127.0.0.1:5500/testPt.html'
}

let i = 0;
let found = false;

while (i < languages.length &&
    !(found = vhLanguages.hasOwnProperty(languages[i].slice(0, 2)))) {
    i++;
}

let vhLink = vhLanguages['fr'];

if (found) {
    vhLink = vhLanguages[languages[i].slice(0, 2)];
}

window.location.replace(vhLink);
