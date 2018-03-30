//allows us to iterate the array and create a randomly generated index
//we store array[i] in a temp var and then set temp equal to array[j]
//this gives the us shuffle functionality
//we then return the shuffled array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        temp = array[j];

    }
    return array;
}
//our main password genrator functionality
//we let password legnth equal and random rounded nuber that falls within our specified range
//we then tell JS what the alphabet is and then we split it making it easier to traverse using
//~~ = another way to say math.floor
// we define the amount of lowercase nums as a random # that is equal to atleast 2
// we also define the amount of upercase nums as a random # that is equal to atleast 2
//then we store the amount of lowercase nums and uppercase nums in the num variable
function passwordGen(){
  let pwLen = Math.round(Math.random() * (20 - 6) + 6),
      possible = 'abcdefghijklmnopqrstuvwxyz'.split(""),
      lowerAmt = ~~(Math.random() * (pwLen/2 - 2)) + 2,
      upperAmt = ~~(Math.random() * (pwLen/2 - lowerAmt - 1)) + 1,
      num = (pwLen - (lowerAmt + upperAmt))
//here we create and fill a new array for both lower and upprcase letters with numbers
//that  fall within our specified range with the toUppercase method called on the uppercase letters
//we also create a new array for aour numbers and fill it with a random # between 1 and 10
//we then call the shuffle array function concat everything and then join it together again in the same string
//and returns the result 
  let lowerCase = new Array(lower).fill(0).map((a,i) => possible[~~(Math.random() * 26)]),
      upperCase = new Array(upper).fill(0).map((a,i) => possible[~~(Math.random() * 26)].toUpperCase()),
      numbers = new Array(num).fill(0).map((a,i) => ~~(Math.random() * 10))
  return shuffleArray(lowerCase.concat(upperCase).concat(numbers)).join("");
}
