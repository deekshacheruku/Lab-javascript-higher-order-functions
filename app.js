const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
modifiedFood =[];

//Slice Function
function slice(array,start,end){
    modifiedFood=array.slice(start,end)
}

slice(foods,1,4);
console.log("Slice operation",modifiedFood);

//Splice Function

function SpliceOpeartion(array){
    array.splice(2,0,"noodles", "icecream");
    modifiedFood=array;
}

SpliceOpeartion(foods)
console.log("Splice operation",modifiedFood)


const numberArray = [12,324,213,4,2,3,45,4234];
EvenArray=[]


//Even function
let isEven =(numberArray) => {
    EvenArray=numberArray.filter(data => {
        if(data%2 == 0)
            return data
    })
    return EvenArray
}

EvenArray=isEven(numberArray)
console.log("Even Numbers",EvenArray)

PrimeArray=[]
//Prime numbers
function isPrime(array){
    PrimeArray=array.filter(data => {
        var flag=1;
        for(var i=2;i<data;i++){
            if(data%i == 0){
                flag=0
                break
            }
        }
        if(flag == 1)
            return data
    })
    return PrimeArray
}

PrimeArray=isPrime(numberArray)
console.log("Prime Numbers",PrimeArray)


nonPrimeArray=[]
//non prime numbers
function nonPrime(array){
    var nonPrimeArray=array.filter(data => {
        for(var i=2;i<data;i++){
            if(data%i == 0){
                return data
            }
        }
    })
    return nonPrimeArray
}

nonPrimeArray=nonPrime(numberArray)
console.log("Non PRIME NUMBERS",nonPrimeArray)

myArray = [11, 34, 20, 5, 53, 16];
squarearray=[]

//Square of array elemnts
function findSquareOfNumbers(myArray){
    myArray.map(data=>{
        return data*data;
    })
    return myArray
}

squarearray=findSquareOfNumbers(myArray);
console.log("Square of array elements",squarearray);


//multiplication
myArray=[2, 3, 5, 10];
function multiply(myArray){
    let value=myArray.reduce(function(tot,mul){
        return tot*mul;
    },1);
    return value;
}

val=multiply(myArray)
console.log("Multiplication ",val)


