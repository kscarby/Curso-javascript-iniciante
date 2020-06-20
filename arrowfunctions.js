
// Arrow functions (funções simplificadas)

function example (...nums) {
    let total = nums.reduce((x,y) => x + y);
    console.log(total);
}

example(10,5,8,10);

// Função normal

function example2 (...nums2){
    let total2 = nums2.reduce(function(x,y){
        return x + y;

});
    console.log(total2);
}

example2(10,5,8,10);

//Parametros Default

function example3(nums3 = [0]) {
    let total3 = nums3.reduce((x,y) => x + y);
    console.log(total3);
}

example3([10,5,8,10]);





