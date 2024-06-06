const countObject = (function () {
    let counter = 0;

    const add = function () {
        return ++counter;
    };

    const reset = function () {
        counter = 0;
        return counter;
    };

    return {
        add: add,
        reset: reset
    };
})();

/* 
-----Question2-----
- The free variable: counter
- A free variable is a variable that is used in a function but is neither a local variable nor a parameter of that function. It is a variable that is defined in an outer scope and is accessible within the function due to the concept of closures in JavaScript.
*/
// Question3
function make_adder(inc) {
    let counter = 0;
    return function () {
       return counter += inc;
    }
 }


 // Question4
 /*
 To prevent function and variable names from being added to the Global JavaScript namespace, We can wrap the entire JavaScript file in an Immediately Invoked Function Expression (IIFE). This creates a new scope, isolating all the variables and functions from the global scope.
*/

// Question5
const moduleExtension = (function (employeeObject) {
    let address;

    const setAddress = function (newAddress) {
        address = newAddress;
    };

    const getAddress = function () {
        return address;
    };

return {
    ...employeeObject,
    setAddress: setAddress,
    getAddress: getAddress,
};
})(employeeObject);

// Question6
const employeeObject = (function () {
    let name;
    let age;
    let salary;

    const privateGetName = function () {
        return name;
    };

    const privateGetAge = function () {
        return age;
    };

    const privateGetSalary = function () {
        return salary;
    };

    const setName = function (newName) {
        name = newName;
    };

    const setAge = function (newAge) {
        age = newAge;
    };

    const setSalary = function (newSalary) {
        salary = newSalary;
    };

    const increaseSalary = function (percentage) {
        setSalary(privateGetSalary() * (1 + percentage / 100));
    };

    const incrementAge = function () {
        setAge(privateGetAge() + 1);
    };

    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge,
    };
})();

// Question7
var me = {
    first: 'Josh',
    last: 'Splinter',
    getFullName: function () {
        return this.first + ' ' + this.last;
    }
};

var you = {
    first: 'William',
    last: 'Smith'
};

console.log(me.getFullName.call(you));

// Question8
var me = {
    first: 'Josh',
    last: 'Splinter',
    getFullName: function () {
        return this.first + ' ' + this.last;
    }
};

var you = {
    first: 'William',
    last: 'Smith'
};

var getFullName = me.getFullName.bind(you);
console.log(getFullName());

