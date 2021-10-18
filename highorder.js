//CHALLENGE 1

const addOne = (arr) => {
    let newarr = []
    arr.forEach (function(item,index)
    {
        newarr.push(item+1)
    });
    return newarr;
}


//CHALLENGE 2

const addExclamation = (arr) => {
   
    let newarr = []
    arr.forEach (function(item,index)
    {
        newarr.push(item+ '!')
    });
    return newarr;
}
    
//CHALLENGE 3

const addOneByMap = (arr) => {
   let newarr =[]
   arr.map (function(item,index)    
   {
    newarr.push(item+1)
   
});
return newarr;
}

//CHALLENGE 4
const addQuestion = (arr) => {
       
    let newarr = []
    arr.forEach (function(item,index)
    {
        newarr.push(item + '?')
    });
    return newarr;
}

//CHALLENGE 5

const forLoopTwoToThe = (arr) => {
    let newarr =[]
   arr.map (function(item,index)    
   {
    newarr.push(Math.pow(arr,2))
  
});
return newarr;
}


////CHALLENGE 6

const typeNum = (arr) => {
       
  };




//CHALLENGE 9
const addValues = (arr) => {
    let sum=arr.reduce((sum1,sum2) => sum1+ sum2 ,0)
    return sum;
  };
  