

const array=[1,2,3,[4,5,[6,7]],9,10];

// function flattenArray(arr){
// newArray=arr.reduce((acc,item)=>{
//     if(Array.isArray(item)){
//         acc=acc.concat(flattenArray(item))
//     }
//     else{
//         arr.push(item)
//     }
//     return acc;

// },[])
// return newArray;
// }

// console.log(flattenArray(array))


function flatten(arr) {
    let result = [];
    for(let item of arr) {
      if(Array.isArray(item)) {
        result = result.concat(flatten(item));
      }else {
        result.push(item);
      }
    }
    return result;
  }

  console.log(flatten(array))


//   const ages = [32, 33, 16, 40];

// const result  = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

