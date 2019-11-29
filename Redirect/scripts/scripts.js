const languages = navigator.languages;

let done = false;
let i = 0;

while (i < languages.length && !done) {

    switch (languages[i].slice(0, 2)) {
        case 'fr':
            window.location.replace('http://127.0.0.1:5500/testFr.html');
            done = true;
            break;

        // Anglais
        case 'en':
            window.location.replace('http://127.0.0.1:5500/testEn.html');
            done = true;
            break;

        // Espagnol
        case 'es':
            window.location.replace('http://127.0.0.1:5500/testEs.html');
            done = true;
            break;

        // Portugais
        case 'pt':
            window.location.replace('http://127.0.0.1:5500/testPt.html');
            done = true;
            break;

        default:
            if (i === languages.length - 1) {
                window.location.replace('http://127.0.0.1:5500/testFr.html');
                done = true;
            }
            break;
    }
    i++;
}