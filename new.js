<<<<<<< HEAD

 function rollnumber(num,delay,nextroll){
    setTimeout(() =>{
        console.log("rollnumber is",num);
        if(nextroll) nextroll();
    },delay)
   }
rollnumber(1212,1000,()=>{
    rollnumber(12312,2000,()=>{
        rollnumber(12412,3000,()=>{
            rollnumber(12512,4000);
})
})
});
=======

 function rollnumber(num,delay,nextroll){
    setTimeout(() =>{
        console.log("rollnumber is",num);
        if(nextroll) nextroll();
    },delay)
   }
rollnumber(1212,1000,()=>{
    rollnumber(12312,2000,()=>{
        rollnumber(12412,3000,()=>{
            rollnumber(12512,4000);
})
})
});
>>>>>>> 52a5e7a03fb4ecddd1eb65b96efb3c629745cb99
