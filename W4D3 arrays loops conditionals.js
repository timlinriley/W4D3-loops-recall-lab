////////////////////////////////
// Easy Going
////////////////////////////////
for (let i= 0; i<=20; i++)
if(i <=20){
    console.log(i)
}  
////////////////////////////////
// Get Even
////////////////////////////////
for (let j = 0; j<=200; j++)
    if (j % 2 === 0){
    console.log(j, 'is an even number')
    }

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let f = 0; f<=100; f++)
    if(f % 3 === 0 && f % 5 === 0){
        console.log('FizzBuzz')
    } else if (f % 3 === 0){
        console.log('Fizz')
    } else if (f % 5 === 0){
        console.log('Buzz')
    } else{
         console.log(f)
        }

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 50001
console.log(plantee)

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = 'Gotham City'
console.log(wolfy)

// 3. Give D'Art a second hometown by adding "Hawkins"
dart.push('Hawkins')
console.log(dart)

// 4.Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy.shift()
wolfy.unshift('Gameboy')
console.log(wolfy)
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
        const ninjaTurtles = ['Dontatello', 'Leonardo', 'Raphael', 'Michaelangelo']
        console.log(ninjaTurtles)

    // 2. Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
        for (string of ninjaTurtles){
            console.log(string.toUpperCase())
        }
      
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Print  index of Titanic
console.log(favMovies.indexOf("Titanic"))
// use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
console.log(favMovies.sort())

// Use the method pop
console.log(favMovies.pop())

// push"Guardians of the Galaxy"
favMovies.push('Guardians of the Galaxy')
console.log(favMovies)

// Reverse the array
console.log(favMovies.reverse())

// Use the shiftmethod
favMovies.shift()
console.log(favMovies)

// Use the unshiftmethod
favMovies.unshift('Random Movie')
console.log(favMovies)

// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// console.log(favMovies.indexOf('Django Unchained'))
// favMovies.splice([15])
// favMovies.push('Avatar')
// console.log(favMovies)

favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar')
console.log(favMovies)

// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
let size = favMovies.length
console.log(size)
let secondHalf = favMovies.slice(8,-1)
console.log(secondHalf)

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf('Fast and Furious'))

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
    ["Timmy", "Frank"], 
    //[0]
    "Eggbert",
    // [1]
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    // [2]
    ["Petunia", ["Baked Goods", "Waldo"]]];
    // [3]
// whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'))
// console.log(whereIsWaldo)

// Change "Neff" to "No One"
whereIsWaldo[2][2] = "No One"
console.log(whereIsWaldo)

// Access and console.log "Waldo"
console.log(whereIsWaldo[3][1][1])
////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////