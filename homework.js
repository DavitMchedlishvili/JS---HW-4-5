//  Homework 4/5 


//  task 1

let factoryEmployees = {
    employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
    // employeeNum : this.employees.length,
   
}



let workloadData = {
    employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", workload : 25 },
    {name : "Maria", workload : 28 },{name : "Dan", workload : 30 },{name : "Lorelai", workload : 31 }],
    
   
}


// const workloadArray = []
// workloadData.employeeWeeklyWorkload.forEach((el,index) => {
//    if (el.workload > 0){
//     workloadArray.push(el.workload);}
   
// })

// console.log(workloadArray)

const factory = {

    facName : 'Volkswagen Wolfsburg Plant',
    calculatedWorkload : () => {
    const workloadArray = []
    workloadData.employeeWeeklyWorkload.forEach((el,index) => {
       if (el.workload > 0){
        workloadArray.push(el.workload);}
       
    })
}
}

console.log(factory.calculatedWorkload())
    









// task 2

const Array1 = [1, 2, 3, 4, 5];
const Array2 = [10, 15, 20, 25, 30];
    
function sumOfNumbers(array) {
    let sum = 0;
  
    
    for (let i=0; i<array.length; i++) {
      sum += array[i];
    }
  
    return sum;
  }
  


console.log(sumOfNumbers.apply(null,[Array1]));
console.log(sumOfNumbers.apply(null, [Array2]));





// task 3 
function checkEven(n) {
    if (n === 0) {
      return "even";
    } else if (n === 1) {
      return "odd";
    } else {
      return checkEven(n - 2);
    }
  }
  console.log(checkEven(2));
  console.log(checkEven(3));




//   5 task 



const arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]

let newArray = arr.filter(Boolean);

console.log(newArray)




// 6 task



arr1 = [1,2,3];
arr2 = [2,1,30];

function mergeArr (arr1,arr2){
    let arr3 = arr1.concat(arr2)
    let uniqueArr = []; 

    for (let i of arr3){
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

mergeArr(arr1,arr2);



// task 7 