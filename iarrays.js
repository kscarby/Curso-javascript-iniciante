// Iterando arrays, novos loops
// ForEach

  let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

numbers.forEach((element, index) => {
    console.log(`forEach: O ${element} está no index ${index}`);
}); 

// Map

let mapResult = numbers.map(element => element/ 2);
console.log('Map:');
console.log(mapResult); 

//Filter

let result = numbers.filter(element => element % 2 === 0);
console.log('Filter:');
console.log(result); 

//Find

let finder = numbers.find(element => element === 44);
console.log('Find:');
console.log(finder); 

//Reduce

let reduce = numbers.reduce((total,element) => total += element);
console.log('Reduce:');
console.log(reduce);


