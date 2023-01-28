var formattedUsers = [
  {
    fullName: "Ahmed Ali",
    age: 27,
    country: "Egypt",
    city: "Alexadria",
  },
  {
    fullName: "Hossam Mohamed",
    age: 42,
    country: "Egypt",
    city: "Cairo",
    district: "Nasr City",
  },
  {
    fullName: "John James",
    age: 47,
    country: "Egypt",
    city: "Cairo",
    district: "Nasr City",
    streetName: "Nasr street",
  },
  {
    fullName: "Tarek Hassan",
    age: 23,
    country: "country",
    city: "city",
    district: "district",
    streetName: "street name",
    buildingNumber: 15,
  },
  {
    fullName: "Hussein Youssuf",
    age: 17,
    country: "country",
    city: "city",
    district: "district",
    streetName: "street name",
  },
];

/*
  1. Calculate the average age of the formatted users of the previous lab only for users who
     are less than 40 years old.
     Use the reduce function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
//////////////V1
function avgAgeabove40(formattedUsers) {
  let count = 0;
  let ages = [];
  for (i in formattedUsers) {
    let current = formattedUsers[i];
    if (current["age"] < 40) {
      ages[count] = current["age"];
      count++;
    }
  }
  let total = ages.reduce((accumulator, current) => accumulator + current, 0);
  const average = total / ages.length;
  console.log(average);
}
avgAgeabove40(formattedUsers);
//////////////V2 >> only works if the current can't = 0
function AverageReducerFunc(accumulator, current) {
  if(accumulator === 0){
    accumulator = current;
  }else if(current.age<40){
    accumulator = (accumulator+current.age)/2;
  }
  return accumulator;
}

function avgAgeabove40(formattedUsers) {
  return formattedUsers.reduce(AverageReducerFunc,0)
}

// Write the implementation of reducerFunc.

function reducerFunc(formattedUsers) {
  let count = 0;
  let sum = 0;
  for (i in formattedUsers) {
    let current = formattedUsers[i];
    if (current["age"] < 40) {
      sum = sum + current["age"];
      count++;
    }
  }
  const avg = sum / count;
  return avg;
}

var average = formattedUsers.reduce(reducerFunc);
console.log(average);
/*
  2. Calculate the number of occurrences of all characters including numbers and white 
     spaces in a string. The string may contain: numbers, upper and lower-case letters and 
     white spaces. 
     Ignore the character case, for example, 'aA' should be counted as 2 occurrences
     of the a character.
*/

// Example input
var input = "abbflmffchocC19 ieqvh";

function getOccurances(input) {
  let string = input.toLowerCase();
  // let flag = 1;
  while (string != "") {
    let char = string[0];
    let count = 0;
    for (i in string) {
      if (string[i] == char) {
        count++;
      }
    }
    for (i in string) {
      string = string.replace(char, "");
    }
    if (char === " ") {
      char = "White space";
    }
    switch (count) {
      case 1:
        console.log(`${char} occured once`);
        break;
      case 2:
        console.log(`${char} occured twice`);
        break;
      default:
        console.log(`${char} occured ${count} times`);
        break;      
  }
}

getOccurances(input);

/* Output should be exactly like this in the console.
    1 ocurred once
    9 ocurred once
    a ocurred once
    b ocurred twice
    f ocurred 3 times
    l ocurred once
    m ocurred once
    c ocurred 3 times
    h ocurred twice
    o ocurred once
    White space ocurred once
    i ocurred once
    e ocurred once
    q ocurred once
    v ocurred once
*/
