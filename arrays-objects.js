/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

// Extract the latitude value, and log it to the console.
let locationList = iss_location.iss_position;
let isLatitude = locationList.latitude;
console.log(`The latitude is ${isLatitude}`);
//  Extract the longitude value, and log it to the console.
let isLongitude = locationList.longitude;
console.log(`The longitude is ${isLongitude}`);



/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787;
console.log(rates);
// if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)

let exchangeAmount = 100
let exchangeRate = rates.AUD
console.log(exchangeAmount * exchangeRate)


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
let swiftCat = {name: 'Taylor Swift', cat: 'Meredith'}
cats_and_owners.push(swiftCat)
console.log(cats_and_owners);

// write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis
cats_and_owners.forEach( obj => {
    console.log(`${obj.name}'s cat is called ${obj.cat}.`);
})

// print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation
 let secondCat = cats_and_owners[1].cat
let oldmanCat = secondCat
console.log(oldmanCat);

// print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman"
function findObject(array, targetProperty, targetValue) {
    for (let i = 0; i < array.length; i++) {
        if (cats_and_owners[i][targetProperty] === targetValue) {
            return cats_and_owners[i];
        }
    }
    return null; // or undefined, if no object is found
}

let foundObject = findObject(cats_and_owners, 'name', 'Gary Oldman');

if (foundObject) {
    console.log('Found object', foundObject);
} else{
    console.log('Object not found');
}


/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */


//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.


let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}

// print the full name of the Literature Nobel laureate.
let prizes = nobel_prize_winners_2017.prizes
let laureates = prizes[3].laureates;
let laureatesName = laureates[0].firstname;
let laureatesSurName = laureates[0].surname;
console.log(laureatesName, laureatesSurName);

// print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
let laureateIdObjects = prizes[0].laureates

let idFilter = laureateIdObjects.map(laureates => laureates.id )
console.log(idFilter);


//  write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
let categoryFinder = prizes.map(prize => prize.category)
console.log(categoryFinder);

//  write code to print the total number of prize categories
let categoryCounter = prizes.map(prize => prize.category)
console.log(`There are ${categoryCounter.length} categories`);

// write code to count the total number of laureates from 2017.
let laureatesCounter = prizes.map(laureates => laureates )
console.log(`There are ${laureatesCounter.length} laureates`);