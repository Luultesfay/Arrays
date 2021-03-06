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

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // this makes the container to become empty

  const move = sort ? movements.slice().sort((a, b) => a - b) : movements; //sorting the movement to assending  order  and we will  attach to handler al the last of this project

  // we created displayMoment function and accepting array of arguments
  move.forEach(function (mov, i) {
    //we use for each loop to iterate on the parameter movements

    const type = mov > 0 ? 'deposit' : 'withdrawal'; //here we calculate whether the activity is deposit or withdrowal

    //we brought html code and  assign to the html variable using string literals
    const html = `  
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    }  ${type}</div>
      <div class="movements__value">${mov}???</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); //we insert the html data to the movement container using insertAdjacentHTML container
  });
};
//displayMovement(account1.movements); //this is calling and passing argument to the function  for the client  account 1      /////we will comment out this becouse we will  put it at the last and will it work for all accounts

//we want to add an idividula acount movement to  labelBalance

const displayMovementBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0); //add all the movements of account one
  labelBalance.textContent = `${acc.balance} ???`; // we do here dom manuplation  in the browser
};

//displayMovementBalance(account1.movements); //passes movement of account one        /////WE WILL COMMENT OUT THIS B/C WE WANT TO WORK IT FOR ALL ACCOUNT AND WIIL PUT IT AT THE LAST BEFORE WE LOG IN TO THE app

////we will add all the deposit and desplay in the IN  means income  area of the project using filter and reduce method and add to the visible part using DOM manuplation

const calcDisplaySummary = function (acc) {
  //calculate income and desoplay it
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}???`;
  //calculate outcome and display it
  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}???`; //we remove the negative sign using Math.abs

  //we calculate interest with 1.2% in every deposit

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate)
    .filter(int => int >= 1) ///this means filter if the interest is >=1   the interest less than one is not counted to the interest they simply filtered out
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}???`;
};
//calcDisplaySummary(account1.movements); //  ////// commment out BECOUSE WE WANT TO WORK IT FOR ALL ACCOUNTS AND WILL PUT IT IN  BEFORE WE LOG IN

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
/*(4) [???]
???
0: Object { owner: "Jonas Schmedtmann", interestRate: 1.2, pin: 1111, ??? }
???
1: Object { owner: "Jessica Davis", interestRate: 1.5, pin: 2222, ??? }
???
2: Object { owner: "Steven Thomas Williams", interestRate: 0.7, pin: 3333, ??? }
???
3: Object { owner: "Sarah Smith", interestRate: 1, pin: 4444, ??? }
???
length: 4
???
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

const updateUI = function (acc) {
  //DISPLAY MOVEMENTS
  displayMovement(acc.movements);
  //DISPLAY BALANCE
  displayMovementBalance(acc);
  //DISPLAYSUMMARY
  calcDisplaySummary(acc);
};

////EVENT HANDLERS  ABOUT LOGIN
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //prevent from submitting
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //we aded here optinal chaning(?.) to make the error to undefined
    //now if both the pin and username true then we display the below  messages as the next step
    //display UI AND MESSAGE
    labelWelcome.textContent = `Wellcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100; //we manuplate the style in the app class  opacity from 0 to 100  now the page will be visible

    //CLEAR THE INPUT FIELD AND PIN WHEN WE LOG IN
    inputLoginUsername.value = inputLoginPin.value = ''; //it removes the user name and the pin number when we already log it to our account make it very secure that it hide from athers from see our credinsials
    inputLoginPin.blur(); //it makes blur to the user and pin button
    /// update UI
    updateUI(currentAccount);
  }
});

///lets transfer money from one account to another

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); //this one prevent from  the form to load
  const amount = Number(inputTransferAmount.value); //we change this to number becouse the input shoud be number
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  ); //we dont need to change this becouse we are gonna inpput string and that all we need and we are using find to much or find the account that we intered in the input
  console.log(amount, receiverAcc);

  inputTransferAmount.value = inputTransferTo.value = ''; //this cleans the aount that enters to transfer from apearing on that field

  //we want  to know if the  amount we neeed to  transfer  is less than the current  account balance and  also amount > 0  and also we need to know if the reciver exist
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    console.log('transfer valid'); //if the above valid then we get this out put in the console and the transfer is happening if that not true it doesnt transfer anything
    //doing transfer
    currentAccount.movements.push(-amount); //then the amout that transferd out of the current Account is negative
    receiverAcc.movements.push(amount); // the reciver account is postive

    //updateUI       this updates all the  accounts with balances everything
    updateUI(currentAccount);
  }
});

/////get loan amount from bank

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value); //user account input  , he input to loan money from that bank

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // we verifay the condtion if he is qualifed
    //then add movement to that account or add the loan to that account  if he qualifays the above condition
    currentAccount.movements.push(amount); // we give him loan to the requester account

    //update UI
    updateUI(currentAccount);
  }
  //clearing the input field
  inputLoanAmount.value = '';
});

//closing account       and also a new method called  'findindex' it is the same like 'find' but it returns only the index of that element

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  //console.log('close account');//testing

  if (
    //here testing if the input close user name value  are the same as current user name of that account we want  to delete
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(index); //testing  that if it outputs index
    //deleted account
    accounts.splice(index, 1);

    //hide UI of the deleted account
    containerApp.style.opacity = 0; // we can check how many account have in the counsole by writing accounts
  }
  inputCloseUsername.value = inputClosePin.value = ''; // this clears the input value and find after we  submit it to be delated
});

let sorted = false; //becouse at first the movement is not sorted
btnSort.addEventListener('click', function (e) {
  e.preventDefault;
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted; //this swhiches if its true to false if it is false to true
});
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
        value > 3 ? `is an adalt and ${value} years old` : `is still a puppy????`
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

////challange #2
/* Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.*/

/*Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4;*/

/*const calcAverageHumanAge = function (dogAges) {
  const humanDogAge = dogAges.map(function (ageD) {
    let humanAge;
    if (ageD <= 2) {
      humanAge = 2 * ageD;
      console.log(`the dogAge ${ageD} equals to humanAge ${humanAge}`);
    } else if (ageD > 2) {
      humanAge = 16 + ageD * 4;
      console.log(`the dogAge ${ageD} equals to humanAge ${humanAge}`);
    }
  });
  console.log(humanDogAge);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
*/

//const humanAge = ageD <= 2 ? 2 * ageD : 16 + ageD * 4;

const calcAverageHumanAge = function (dogAges) {
  const humanDogAge = dogAges.map(function (ageD) {
    // we use map here    to calculate human age
    const humanAge = ageD <= 2 ? 2 * ageD : 16 + ageD * 4;
    //console.log(`the dogAge ${ageD} equals to humanAge ${humanAge}`);
    return humanAge;
  });
  console.log(humanDogAge); //[ 36, 4, 32, 2, 76, 48, 28 ]       2nd test  [ 80, 40, 56, 36, 40, 2, 32 ]

  //2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

  const DogAgeAbove18 = humanDogAge.filter(function (humanAge) {
    //we use filter to get  human age  above 18
    return humanAge > 18;
  });
  console.log(DogAgeAbove18); //[ 36, 32, 76, 48, 28 ]       2nd test  [ 80, 40, 56, 36, 40, 32 ]

  //3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages ????)
  const avgHumanAge = DogAgeAbove18.reduce(function (acc, age) {
    // we use reduce method for calculating the average age of human
    const totalSum = acc + age;
    return totalSum; //220
  }, 0);

  console.log(avgHumanAge / DogAgeAbove18.length); //44     2nd test  47.33..6
};
//4. Run the function for both test datasets
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); // the first dog age  for test
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); // the second dog age for test

// THE MAGIC OF CHAIING METHODS
//we have been using the map filter  and reduce methods kind of in isolation.
//However, we can take this one step further by chaining all these methods one after another.

// eg lets  create an array  name  stock market with  different value means gain and loss then
//calculate the balance of all gains  by  filter it and map it and also use reduce  by chaing all this methods

const stockMarket = [200, 300, -400, 800, -200, 1000];
//all the methods is chaing and asiign to one variable
const stockBalanceGain = stockMarket
  .filter(gain => gain > 0) //[ 200, 300, 800, 1000 ]
  .map(gain => gain * 2) //[ 400, 600, 1600, 2000 ]
  .reduce((acc, gain) => acc + gain, 0); //4600
console.log(stockBalanceGain); //4600
//note we  calculate the balance first by filtering the gains and then by map  that gain maltiplays by 2  the we chain to reduce and calculate the deposit.

///Coding Challenge #3

//Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining
/*Test data:
Data 1: [5, 2, 4, 1, 15, 8, 3]
 Data 2: [16, 6, 10, 5, 6, 1, 4]*/

const calcAverageHumanAg = dogAges =>
  dogAges
    .map(ageD => (ageD <= 2 ? 2 * ageD : 16 + ageD * 4))
    .filter(humanAge => humanAge > 18)
    .reduce((acc, humanAge, i, arr) => acc + humanAge / arr.length, 0);

//4. Run the function for both test datasets
console.log(calcAverageHumanAg([5, 2, 4, 1, 15, 8, 3])); // the first dog age  for test
console.log(calcAverageHumanAg([16, 6, 10, 5, 6, 1, 4])); // the second dog age for test
//44     2nd test  47.33..6

/////////  FIND METHOD
//we can use the 'Find" method to retrieve one element of an array based on a condition.
//the Find method also needs a callback function that returns a Boolean.
//the Find method will actually not return a new array but it will only return the first element in the array that satisfies this condition.

// find vs filter
/*the Find method is a bit similar to the Filter method,but there are two fundamental differences.
-First Filter returns all the elements that match the condition while   --the Find method  only returns the first one 
-second the Filter method returns a new array while   ---Find only returns the element itself and not an array,*/

//eg

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements); //[ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
console.log(firstWithdrawal); //-400

//eg lets take the user login account that is in the project

const account = accounts.find(acc => acc.owner === 'Jessica Davis'); //this is true   the it will retrive the account of the matched person
console.log(account); //Object { owner: "Jessica Davis", movements: (8) [???], interestRate: 1.5, pin: 2222, userName: "jd" }

////// SOME AND EVERY   METHODS

////SOME  method  is smilar to include method but it checks for conditions

//eg
//include tests for equality    like checking specific elemet is there or not and return boolean value
console.log(movements); //[ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
console.log(movements.includes(-130)); //true
//lets see for 'some'
//some tests for condtionality
const testingSome = movements.some(mov => mov > 0);
console.log(testingSome); //true  becouse there are movements above 0

/////////EVERY  METHOD
//it  is a method that  return true if every condition is satisfied

//eg
console.log(movements.every(mov => mov > 0)); //false  becouse  the movements in that array has not all satisfay this condtion some are negative and some are postive
console.log(account4.movements.every(mov => mov > 0)); //true    becouse all the movements in that account is postive so ' every ' method then returns true in this case

//note we can also write the  callback function seperate from the method
//eg
const deposits = mov => mov > 0; //call back function
console.log(movements.every(deposits)); //false
console.log(movements.some(deposits)); //true
console.log(movements.filter(deposits)); // [ 200, 450, 3000, 70, 1300 ]  filters only the postive

//////////flat and flatmap  methods of array  introduce in 2019

//flat method  lets see eg

const aarray = [1, 2, [3, 4, 5], [6, 7]]; //lets put all in single array
console.log(aarray.flat()); //[ 1, 2, 3, 4, 5, 6, 7 ]

//what about if wen have super nested means a nest inside anest like ifi it go depper
const deepArr = [1, 2, [3, [4, 5]], [6, 7, [8]]];
console.log(deepArr.flat()); //[ 1, 2, 3, (2) [???], 6, 7, (1) [???] ] it doesn't do its job  becouse only do the 1st level
//to make it work we need to specifay the level how deper we need to flat it
console.log(deepArr.flat(2)); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]    becouse we specifay the level   here is  2

/*

//lets see real example lets bring all the movemets of all the account in the bankList project and stored them in single array
const accMovement = accounts.map(acc => acc.movements);
console.log(accMovement); //[ (8) [???], (8) [???], (8) [???], (5) [???] ] all the accounts movement

const allAccMovements = accMovement.flat();
console.log(allAccMovements); //Array(29) [ 200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, ??? ]

//lets calculate overall balance of all this flattened movement of the account

const overAllBallance = allAccMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overAllBallance); //17840

*/
//we can shortning all the above
//flat
const overAllBallance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overAllBallance); //17840

//flatMap  is combination of flat and map
const overAllBallance2 = accounts
  .flatMap(acc => acc.movements) //flat Map method only goes 1 deep level  but if we encountered with super nested deep arrays  we  need to  use flat only
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBallance2); //17840

//////SORTING  ARRAYS

//with strings
const owner = ['zack', 'solo', 'don', 'figo'];

console.log(owner.sort()); // [ "don", "figo", "solo", "zack" ]

//with numbers

console.log(movements); //[ 200, 450, -400, 3000, -650, -130, 70, 1300 ]

console.log(movements.sort()); //[ -130, -400, -650, 1300, 200, 3000, 450, 70 ]  not correct with numbers sort is not working with out mathematical calculations

//lets fix the above arrays

//asending order
//movements.sort((a, b) => {
//if (a > b) return 1;
//if (a < b) return -1;
//});
movements.sort((a, b) => a - b); //the same as the commented out code//
console.log(movements); //Array(8) [ -650, -400, -130, 70, 200, 450, 1300, 3000 ]

//desending  order
//movements.sort((a, b) => {
//if (a > b) return -1;
//if (a < b) return 1;
//});
movements.sort((a, b) => b - a); //the same as the above commented code
console.log(movements); //Array(8) [ 3000, 1300, 450, 200, 70, -130, -400, -650 ]

/////NOTE:  SORTING OF  STRINGS AND NUBERS IS NOT POSSIBLE   [1,'DDD','HOW',6]

///////////////////////////////////////
// More Ways of Creating and Filling Arrays
let ar = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); //[ 1, 2, 3, 4, 5, 6, 7 ]

// Empty arrays + fill method
const x = new Array(7);
console.log(x); //[ <7 empty slots> ]
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x); //[ 1, 1, 1, 1, 1, 1, 1 ]

ar.fill(9, 3, 6);
console.log(ar); //[ 1, 2, 3, 9, 9, 9, 7 ]

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
[1, 1, 1, 1, 1, 1, 1];

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); //[ 1, 2, 3, 4, 5, 6, 7 ]

const d = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(d); //Array(100) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ??? ]

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('???', ''))
  );
  console.log(movementsUI);
  Array(8)[(1300, 70, -130, -650, 3000, -400, 450, 200)];

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

/////Coding Challenge #4

/*Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).*/

//Your tasks:
/*1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28) + 1));

console.log(dogs);

/*2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) ????*/

const saraDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(saraDog);
console.log(
  `sarah dog is eating ${
    saraDog.curFood > saraDog.recFood ? 'too much food' : 'little food'
  }`
);

//3
/*3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').*/

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch);
['Matilda', 'Sarah', 'John'];

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooLittle); //[ "Alice", "Bob", "Michael" ]

//4. Log a string to the console for each array created in 3., like this: "Matilda and
//lice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
//too little!"
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`); //Matilda and Sarah and John dogs eat too much!
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`); //Alice and Bob and Michael dogs eat too little!

//5. Log to the console whether there is any dog eating exactly the amount of food
//that is recommended (just true or false)
console.log(dogs.some(dog => dog.curFood === dog.recFood)); //false

//6.Log to the console whether there is any dog eating an okay amount of food
//(just true or false)

/**hint
 * Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion. */

console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
); //true

//7. Create an array containing the dogs that are eating an okay amount of food (try
//to reuse the condition used in 6.)
console.log(
  dogs.filter(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);
//8. Create a shallow copy of the 'dogs' array and sort it by recommended food
//portion in an ascending order (keep in mind that the portions are inside the
//  array's objects ????)

const dogSoreted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSoreted); //sorted the recomendede food in assending way from lower to higher
