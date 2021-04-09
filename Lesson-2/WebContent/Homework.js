'use strict'

var user = {};

user.name = 'PHILIP';
user.sername = 'SHEVCENKO';
user.name = 'SERGIO';
delete user.name;
console.log(user);

console.log('----------------');

var employeeSalaries = {
	zp1: 4000,
	zp2: 5000,
	zp3: 6000
};

var counter = 0;
for (var key in employeeSalaries) {
	counter++;
}

if (counter == 0) {
	console.log(0);
} else {
	var result = 0;
	for (var key in employeeSalaries) {
		var sum = result + employeeSalaries[key];
		result = sum;
	}
	console.log(result);
}'use strict'

var user = {};

user.name = 'PHILIP';
user.sername = 'SHEVCENKO';
user.name = 'SERGIO';
delete user.name;
console.log(user);

console.log('----------------');

var employeeSalaries = {
	zp1: 4000,
	zp2: 5000,
	zp3: 6000
};

var counter = 0;
for (var key in employeeSalaries) {
	counter++;
}

if (counter == 0) {
	console.log(0);
} else {
	var result = 0;
	for (var key in employeeSalaries) {
		var sum = result + employeeSalaries[key];
		result = sum;
	}
	console.log(result);
}