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
