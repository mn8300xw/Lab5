let birds = ['Owl', 'Robin', 'Eagle'];
console.log(birds);

birds.forEach( function(bird, index) {
    // repeat once for each object in array
    // function will be called for each object in the array
    console.log(index, bird.toUpperCase())
})

//Traditional for loop
for (let x = 0; x < birds.length; x++) {
    let bird = birds[x];
    console.log(x, bird)
}



let animals = ['lion', 'tiger', 'cheetah'];

console.log(animals);
console.log(animals[1]);
console.log(animals[1000]);

animals[3] = 'giraffe';
console.log(animals);
console.log(animals[5]);

animals[1] = 'zebra';
console.log(animals);

animals.push('elephant');
console.log(animals);

let lastAnimal = animals.pop();
console.log(lastAnimal);
console.log(animals);

animals.unshift('deer');
console.log(animals);

let firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);

animals.reverse();
console.log(animals);

animals.sort()
console.log(animals);

let numberOfAnimals = animals.length;
console.log(numberOfAnimals);

console.log(animals.indexOf('lion'));

if (animals.indexOf('walrus') === -1) {
    console.log('walrus is not in the array')}

console.log(animals.join(' * '));

animals.forEach( function(animal) {
    console.log(animal.toUpperCase());
})

animals.forEach( function(animal) {
    console.log(animal.length);
})
animals.push('alligator');


let animalNameLength = [];
animals.forEach( function(animal) {
    let length = animal.length;
    animalNameLength.push(length);
})
console.log(animalNameLength);