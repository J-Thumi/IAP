const arr=[1,2,3,4,5,7,56,8]


//reduce iteriates all elements and outputs one value only
//you can find largest,smallest,sum
//we can find the sum of elements in an array by creating a function like below

function findSum (arr){
    sum =0
    for(let i=0; i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
console.log(findSum(arr))

//we can also use reduce
//reduce function takes 2 args 
//function and initial value of acc i.e sum
//the function in reduce takes 2 parameters accumulate and current
//acc is sum 
//curr is arr[i]
// acc should be initialised to initial value

//sum
const output=arr.reduce((acc,curr)=>{
acc = acc + curr 
return acc
 },0)
 console.log(output)


//to find largest
 const out=arr.reduce((acc,curr)=>{
    if (acc < curr){
      acc = curr
    }
    return acc
 },arr[0])
 console.log(out)

 
 //to find smallest
 const outs=arr.reduce((acc,curr)=>{
    if (acc > curr){
        acc = curr
    }
    return acc
 },arr[0])
 console.log(outs)