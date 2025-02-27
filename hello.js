//prints to console 'hello world'
console.log('hello world')

// way to create a variable
let name = 'vanessa';
let temp = 4;
var size = 'medium';
const language = 'JavaScript'

console.log(name);
console.log(temp);

let quantity = 5;
let distance = 4.5;

let text = 'Hello World!';
let message = "Hi Programmers";
console.log('There are ' + quantity + ' programmers');

function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9;
    if (decimalPlaces) {
        return celsius.toFixed(2);
    } else {
        return celsius;
    }
}


function shout(text) {
    let shouty_text = text.toLocaleUpperCase() + '!!!';
    return shouty_text;
}

console.log(shout('hello world'));
let messages = shout('Hello web programmers!');
console.log(messages)

function isMinnesotaZip(code) {
    // All MN zip are between : 55001 and 56763
    if (code >= 55011 && code <= 56763){
        return true;
    }
    else {
        return false;
    }
}
console.log(isMinnesotaZip(55483));
console.log(isMinnesotaZip('55483'));
console.log(isMinnesotaZip(99999999));
console.log(isMinnesotaZip(-1));


//function to capitalize the state abbreviation and print the city with a comma
function addressWriter(state, city) {
    return city + ', ' + state.toUpperCase();
}
console.log(addressWriter('mn', 'Minneapolis'));
// double quote "
//single quote '
// backtick `

// false values - undefined, null, empty lists, empty objects, 0, false
if ({} === 0) {
    console.log('the same!');
} else{
    console.log('not the same!');
}
