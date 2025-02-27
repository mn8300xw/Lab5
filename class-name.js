let className = 'Web Programming';
let classCode = 2568;
let department = 'ITEC'
console.log(`This is ${department} ${classCode} ${className}`)

console.log(`my name is ${name}, nice to meet you`);

let takenCSharp = false
let takenJava = true;

if (takenCSharp || takenJava) {
    console.log('You meet the pre-requisites for Android');
}
else {
    console.log('You must take C# or Java')
}

let classText = 'The classes are itec 1150, itec 1250, itec 2560'

let replaced = classText.replace('itec', 'ITECT');
console.log(replaced);

let replacedAll = classText.replace(/itec/g, 'ITECT');
console.log(replacedAll);

let classMessage = 'The classes are 1150, 1250, 2560';
let replaceRegex = classMessage.replace(/\d{4}/g, 'ITEC $&');
console.log(replaceRegex);