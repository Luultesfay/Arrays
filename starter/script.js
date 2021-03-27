'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements) {
  containerMovements.innerHTML = ''; // this makes the container to become empty
  // we created displayMoment function and accepting array of arguments
  movements.forEach(function (mov, i) {
    //we use for each loop to iterate on the parameter movements

    const type = mov > 0 ? 'deposit' : 'withdrawal'; //here we calculate whether the activity is deposit or withdrowal

    //we brought html code and  assign to the html variable using string literals
    const html = `  
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); //we insert the html data to the movement container using insertAdjacentHTML container
  });
};
displayMovement(account1.movements); //this is calling and passing argument to the function  for the client  account 1

//we want to add an idividula acount movement to  labelBalance

const displayMovementBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0); //add all the movements of account one
  labelBalance.textContent = `${balance} EUR`; // we do here dom manuplation  in the browser
};

displayMovementBalance(account1.movements); //passes movement of account one

/*

//we want to create user name   and want by its first intials   like for the user   'Steven Thomas Williams';  is  'stw'   and for other users the same 
const user = 'Steven Thomas Williams';
const userName = user
  .toLowerCase()
  .split(' ')
  .map(function (mov) {
    return mov[0];
  })
  .join('');
console.log(userName);
*/
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(mov => mov[0]) //.map(mov => mov[0]) this means  .map(mov =>return mov[0])  we acutlly return but we dont see the return key word or we dont write it it works internally
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);
//outputs
/*(4) […]
​
0: Object { owner: "Jonas Schmedtmann", interestRate: 1.2, pin: 1111, … }
​
1: Object { owner: "Jessica Davis", interestRate: 1.5, pin: 2222, … }
​
2: Object { owner: "Steven Thomas Williams", interestRate: 0.7, pin: 3333, … }
​
3: Object { owner: "Sarah Smith", interestRate: 1, pin: 4444, … }
​
length: 4
​
<prototype>: Array []*/

/*const createUsernames = function (user) {//note we will modifay this to accept all the account owners so we will comment it out  and we will modifay witt the above code
  const userName = user
    .toLowerCase()
    .split(' ')
    .map(mov => mov[0]) //.map(mov => mov[0]) this means  .map(mov =>return mov[0])  we acutlly return but we dont see the return key word or we dont write it it works internally
    .join('');
  return userName;
};
console.log(createUsernames('Steven Thomas Williams')); //stw
console.log(createUsernames('Jessica Davis')); //jd
*/

//Rewrite this code using arrow function
/*const user = 'Steven Thomas Williams';
const userName = user
  .toLowerCase()
  .split(' ')
  .map(mov => mov[0]) //.map(mov => mov[0]) this means  .map(mov =>return mov[0])  we acutlly return but we dont see the return key word or we dont write it it works internally
  .join('');
console.log(userName);*/
//note we will comment out part of the above code and copy to created user functions to apply for all users

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

///Arrays

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // Array(3) [ "c", "d", "e" ]
console.log(arr.slice(2, 4)); //['c','d']

console.log(arr.slice(-1)); //['e']
console.log(arr.slice(-2)); //['d','e]
console.log(arr.slice(1, -2)); //[ "b", "c" ]

//we can use slice() method also for  making shallow copy
console.log(arr.slice()); //Array(5) [ "a", "b", "c", "d", "e" ]   shallow copying

console.log([...arr]); //Array(5) [ "a", "b", "c", "d", "e" ]   shallow copying this is spread operator and works the same as spice when we come to shallow copy

//SPLICE   IS exactly the same as  the slice array  but the difference is splice method does change the orginal array or mutate the orginal array
//console.log(arr.splice(2)); //Array(3) [ "c", "d", "e" ]      and lets whatch now what happened to the orginal array

//console.log(arr); //Array [ "a", "b" ]   so the orginal array is  mutated or changed becouse of the splice method

console.log(arr.splice(-1)); //[ "e" ]
console.log(arr); //Array(4) [ "a", "b", "c", "d" ]
console.log(arr.splice(1, 2)); //Array [ "b", "c" ]
console.log(arr); //Array [ "a", "d" ]

//REVERSE  also mutate or change the orginal array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //Array(5) [ "f", "g", "h", "i", "j" ]
console.log(arr2); //Array(5) [ "f", "g", "h", "i", "j" ]  here the orginal array is changed

//CONCAT    concatnate two arrays
const letters = arr.concat(arr2); //
console.log(letters); //Array(10) [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ]

//we can also conacatnate using spread operator we see previously
console.log([...arr, ...arr2]); //Array(10) [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ]
//Join method
//eg lets join the letters of the array  using join method with (-)

console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j

// FOR EACH  LOOP

//in this eg we have a movments of bank account of a customer in his bank account so we need to print  the withdrow he made and deposit he made

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
//first with 'for of' loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`you deposited ${movement} dollar`);
  } else {
    console.log(`you withdrow ${Math.abs(movement)} dollar`);
  }
}
*/
///if we want  also  to include  the index of the array  we simply distructure the movement   to [i,movement]
//rewrite the above code
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`movement ${i + 1} :you deposited ${movement} dollar`);
  } else {
    console.log(`movement ${i + 1} :you withdrow ${Math.abs(movement)} dollar`);
  }
}

//with 'for Each'

/*
console.log(`---WITH FOR EACH---`);

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdrow ${Math.abs(movement)}`);
  }
});
*/
//rewrite for each loop
//we can also add  index to this for each loop  but we need to specifay the order  when we pass it in the function as parameter first  movement then index  the the array

console.log(`---WITH FOR EACH---`);

movements.forEach(function (mov, i) {
  //for each is the high order function
  if (mov > 0) {
    console.log(`movement ${i + 1} :you deposited ${mov}`);
  } else {
    console.log(`movement ${i + 1} :you withdrow ${Math.abs(mov)}`);
  }
});

//Note
/*
Now when should you use forEach and when should you use the for of loop.
Well one fundamental difference between the two of them is that you cannot break out
of a forEach loop. So the continue and break statements do not work in a forEach loop at all.
So instead, forEach will always loop over the entire array and there is nothing that you can do about it.
So if you really need to break out of a loop then you have to keep using the for of loop,
but other than that it really comes down to your personal preference.
*/

//for Each on maps and sets
//with MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`); //USD:United States dollar   EUR:Euro script.  GBP:Pound sterling
});

//set

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); //Set(3) [ "USD", "GBP", "EUR" ]

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}:${value}`);
});

//challenge

/*Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.*/

/*Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)*/
let Julia = [3, 5, 2, 12, 7];
let kate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  Julia.splice(0, 1); //we eliminate the first  julia[0]
  Julia.splice(-2); //  and here we eliminte the last 2 numbers and becomes[ 5, 2]       we correct by  this 2 above code line to julias array

  //2. Create an array with both Julia's (corrected) and Kate's data
  const bothAges = [...dogsJulia, ...dogsKate];
  console.log(bothAges); //Array(7) [ 5, 2, 4, 1, 15, 8, 3 ]

  //3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
  //is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
  bothAges.forEach(function (value, index) {
    console.log(
      `Dog number ${index + 1} is ${
        value > 3 ? `is an adalt and ${value} years old` : `is still a puppy🐶`
      }`
    );
  });
};
checkDogs(Julia, kate);
/*Dog number1 is is an adalt and 5 years old 
Dog number2 is is still a puppy 
Dog number3 is is an adalt and 4 years old 
Dog number4 is is still a puppy script.
Dog number5 is is an adalt and 15 years old 
Dog number6 is is an adalt and 8 years old 
Dog number7 is is still a puppy*/

////DATA TRANSFORMATION WITH MAPS ,FILTER AND REDUCE
/*these are methods that we use to create new arrays based on transforming data from other arrays.
And in recent years,these tools have become really popular and for good reasons
and therefore you'll see them everywhere you look in Modern JavaScript. */

///MAP
//map method
/*is yet another method that we can use to loop over arrays. So, map is actually similar
to the forEach method that we studied before but with the difference that map creates a brand new array based on the original array.*/
//ex  arr=[3,1,4,3,2] ==>  map{ current *2} ===> newArr[6,2,8,6,4]

//filter method
//filter returns new array conatining the array elements that passed  a specific test condition
//ex  arr=[3,1,4,3,2] ==>  filter(current>2) ===> newArr[3,4,3]

//reduce
// reduce boils('reduces ') all array element down to one single value (eg adding all elements together)
//ex  arr=[3,1,4,3,2] ==> reduce(accumulator+current) ===> new value = 13

//example of maps
/* lets take the movement array , we will try to convert them to US dollars.
So let's suppose these movements are in euros
and we now want to convert them to US dollars.*/

const euroTousd = 1.1;

//const movementUSD = movements.map(function (mov) {
//return mov * euroTousd;
//});
const movementUSD = movements.map(mov => mov * euroTousd); //clner code // this is arrow function this yield the same result as the above function with call back

console.log(movements); //Array(8) [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
console.log(movementUSD); //Array(8) [ 220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002 ]

/// lets see the bove code how it work with 'for of' loop  this means we write the above code
const newMovementsUSD = [];
for (const mov of movements) {
  newMovementsUSD.push(mov * euroTousd);
}
console.log(movements); //Array(8) [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]//old movment
console.log(newMovementsUSD); //Array(8) [ 220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002 ]

//note the differnce with maps and 'for of'  is  in the above example map   we use functions to loop over the array and in the forof we simply loop over an array movement

/////////FILTER METHOD
// we want to filter only the deposit from the movement array  using filter

const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements); //[ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
console.log(deposit); //[ 200, 450, 3000, 70, 1300 ]  returns only the positive value means deposit

//we can also rewrite the above code using forof loop
const depositFor = [];
for (const mov of movements) {
  if (mov > 0) depositFor.push(mov);
}
console.log(depositFor); //Array(5) [ 200, 450, 3000, 70, 1300 ]

/// we calculate withdrawals using filter method
/*const withdrowals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrowals); // [ -400, -650, -130 ]
*/

// the above code using arrow function   its the easet way
const withdrowals = movements.filter(mov => mov < 0);

console.log(withdrowals); // [ -400, -650, -130 ]

/////////// REDUCE METHIOD

//REDUCE Method adds all elements to the single value
//eg we will add all the movements value  to  sigle value

//the callback function in reduce method have  accumulator which is holding the total value plus current , current element,index,array  and olso  intial 0 as second parameter

const balance = movements.reduce(function (acc, cur, i, array) {
  console.log(`iter ${i} : ${acc}`); //this to show accumulator at each iteration
  /* iter 0 : 0 
     iter 1 : 200 
     iter 2 : 650 
     iter 3 : 250 
     iter 4 : 3250 
     iter 5 : 2600 
     iter 6 : 2470 
     iter 7 : 2540 
*/
  return acc + cur;
}, 0); // the 0  at the  function is an intial for accumilator becouse   an acumilator is 0 when it begins at first

console.log(balance); //3840   added all the movement

//lets we write using arrow function to the above code  we will make it balance2 we don't want to make cofusion with  balace in the above
const balance2 = movements.reduce((accc, curr) => accc + curr, 0); // the 0  at the  function is an intial for accumilator becouse   an acumilator is 0 when it begins at first
console.log(balance2); //3840   added all the movement

//// lets try the above code  using for of loop

let balanceFor = 0;

for (const mov of movements) {
  balanceFor += mov;
}
console.log(balanceFor); //3840

// letsmake another exmple using reduce  this time we want to print the max element from the movments

const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    //if accumilator is greter than curent movement so we keep the acc
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(movements);
console.log(max); //3000  now we get the maximum
