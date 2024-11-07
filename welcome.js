// Code wars Kata8 Solutions

// Your start-up's BA has told marketing that your website
// has a large audience in Scandinavia and surrounding countries.
//  Marketing thinks it would be great to welcome visitors to the site in their own language.
//  Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object).
//  The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string),
// and returns a greeting - if you have it in your database.
//  It should default to English if the language is not in the database, or in the event of an invalid input.

/* Solution */

// Create the Object for the Database
// Check if the language exist in the Database
// if exist , return the welcome with the Language
// if not exist, return the Default which is English

function greet(language) {
    let languages = {
        english: 'Welcome',
        czech: 'Ahoj',
        danish: 'Hej',
        dutch: 'Hallo',
        estonian: 'Tere',
        finnish: 'Hello',
        flemish: 'Welkom',
        french: 'Bonjour',
        german: 'Guten Tag',
        irish: 'Failte',
        italian: 'Ciao',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Hola',
        swedish: 'Valkommen'
    };
    // if(languages.hasOwnProperty(language)){
    //     return languages[language];
    // } else {
    //     return languages.english
    // }

    return languages[language] || languages.english;
}

console.log(greet('spanish'));
console.log(greet('arabic'));