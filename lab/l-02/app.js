var userTime = prompt('What hour is it? (in military time)');
var userAge = prompt(userTime + ' , Huh. How old are you?');

if (userAge < 18 && userTime >= 20) {
    alert('It\'s past your bedtime!');
} else {
    alert('Have a nice day!')
}

var answerOne = prompt('Answer the following using Y or N; Were you born in WA?');

if (answerOne.toUpperCase === 'Y') {
    alert('that\'s cool, dude.')
} else if (answerOne.toUpperCase === 'N') {
    alert("Oh, ok.")
}
else {
    alert('wrong input.');
}