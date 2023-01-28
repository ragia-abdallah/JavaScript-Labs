// Create a function that transforms an array of user objects into the following user
// object format.

// Function input example:
var detailedUsers = [
  {
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1995-10-10',
    address: 'Alexadria, Egypt'
  },
  {
    firstName: 'Hossam',
    lastName: 'Mohamed',
    dateOfBirth: '1980-05-10',
    address: 'Nasr City, Cairo, Egypt'
  },
  {
    firstName: 'John',
    lastName: 'James',
    dateOfBirth: '1975-03-05',
    address: 'Nasr street, Nasr City, Cairo, Egypt'
  },
  {
    firstName: 'Tarek',
    lastName: 'Hassan',
    dateOfBirth: '1999-12-03',
    address: '15, street name, district, city, country'
  },
  {
    firstName: 'Hussein',
    lastName: 'Youssuf',
    dateOfBirth: '2005-12-03',
    address: 'abc, street name, district, city, country'
  }
];

// Required function output:
// var formattedUsers = [
//   {
//     fullName: 'Ahmed Ali',
//     age: 27,
//     country: 'Egypt',
//     city: 'Alexadria',
//   },
//   {
//     fullName: 'Hossam Mohamed',
//     age: 42,
//     country: 'Egypt',
//     city: 'Cairo',
//     district: 'Nasr City',
//   },
//   {
//     fullName: 'John James',
//     age: 47,
//     country: 'Egypt',
//     city: 'Cairo',
//     district: 'Nasr City',
//     streetName: 'Nasr street'
//   },
//   {
//     fullName: 'Tarek Hassan',
//     age: 23,
//     country: 'country',
//     city: 'city',
//     district: 'district',
//     streetName: 'street name',
//     buildingNumber: 15
//   },
//   {
//     fullName: 'Hussein Youssuf',
//     age: 17,
//     country: 'country',
//     city: 'city',
//     district: 'district',
//     streetName: 'street name',
//   }
// ];

/**
 * Notes:
 * - Address is always in the following format: 'building number, street name, district, city, country'
 * - Address has at least the city and country, if the rest is missing the missing properties 
 *   should not exist in the user.
 * - Age should be an integer. If age is float, ignore the fraction and do not round, for 
 *   example, 23.95 should be 23.
 * - buildingNumber should be a number not a string, if buildingNumber is not a valid number,
 *   it should be ignored.
 * - The original array should remain unchanged.
 */

// function getFullName (first, last) {
//   return fullName = first + ' ' + last;
// }

function getAge (dob) {
  var d = new Date();
  var birth = new Date(dob);
  var diff = new Date(d - birth);
  var age = diff.getUTCFullYear() - 1970;
  return age;
}

 function formatUser(objArray) {
     var formattedUsersResult = [];

    for (i in objArray)
     {
        var tempObj = objArray[i]; 
        const addrOSplit = tempObj["address"].split(", ").reverse();
        const addlen = addrOSplit.length;
        formattedUsersResult[i] = {
          fullName: tempObj["firstName"] + " " + tempObj["lastName"],
          age: getAge(tempObj.dateOfBirth),
        } 
        for(j = 0; j < addlen; j++) {
          switch (j) {
            case 0:
              formattedUsersResult[i].country = addrOSplit[j];
              break;
            case 1:
              formattedUsersResult[i].city = addrOSplit[j];
              break;
            case 2:
              formattedUsersResult[i].district = addrOSplit[j];
              break;
            case 3:
              formattedUsersResult[i].streetName = addrOSplit[j];
              break;
            case 4:
              num = parseInt(addrOSplit[4]);
              if(! isNaN(num)) {
                formattedUsersResult[i].buildingNumber = num;
              }              
              break;
          }
        }
     }
     return formattedUsersResult    
    }
    formattedUsers = formatUser(detailedUsers);
    console.log(formattedUsers);