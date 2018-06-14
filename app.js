//W01D03-homework 

// Easy going:

for (var i=1; i < 21; i++) {
  console.log(i);
}

//  Get Even:

for (var i = 0; i < 201; i += 2){
	console.log(i);
}

// Excited Kitten:  Unfinished due to time constraints

function evilKitty(meows)
{
  
return meows[Math.floor(Math.random()*meows.length)];
     
}

const meows = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
//console.log(evilKitty(meows));

for (let i = 0; i < 20; i++){
	console.log("Love me, pet me! HSSSSSSS!")
}  if(i % 2 === 0){
    console.log(evilKitty(meows));
}

// FizzBuzz:

for (let i = 1; i < 101; i++){
  if(i % 3 === 0)
    console.log("fizz")
  else if(i / 5 === 0)
    console.log("buzz")
  else
    console.log(i);
}


// Getting To Know You:

const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

function people(){
  thom[0] = "Gameboy";
  karolin[1] = 17;
  kristyn[3] = "Brooklyn";
  matt[3] = "Gotham City";
console.log(thom, karolin, kristyn, matt);

}
people();

//Yelling at the Teenage Mutant Ninja Turtles:

const ninjaTurtles = ["leonardo", "Donatello", "Michealangelo", "Rafael"];

  for(i = 0; i < ninjaTurtles.length; i++){
  ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
  console.log(ninjaTurtles)
  }

  // Return Of The Closets: Unfinished

  const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

function messyClothes(){
  kristynsCloset[0].shift("left shoe");
  thomsCloset[2].shift("left shoe");
  console.log(messyClothes)
  
}
messyClothes();




// Dirty Laundry:  unfinished



// Multiples of 3 and 5:

var total = 0;

for(var i = 0; i < 1000; i++) {
  
  if(i % 3 == 0 || i % 5 == 0) {
    total += i;
  }
}

console.log(total);


// Triangles: 

let argument = ["#", "##", "###", "####", "#####", "######", "#######"];

for(i = 0; i < 8; i++){
  
  console.log(argument[i]);
}

let argument = ["#######", "######", "#####", "####", "###", "##", "#"];

for(i = 0; i < 8; i++){
  
  console.log(argument[i]);
}










// Find The Median:

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

function median(nums) {
  let median = 0, numsLen = nums.length;
    numbers.sort();
   if (
      numsLen % 2 === 0 // is even
    ) {
      median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
      median = numbers[(numsLen - 1) / 2];
    }
 
    return median;
  console.log(median);
}
median();














