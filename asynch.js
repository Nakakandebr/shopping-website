// let UserDetails=true;
// let promise=new Promise(function(reject,resolve){
    // if (UserDetails){
        // setTimeout(()=>{resolve("User details available")},1000)
    // }
    // else{
    //    setTimeout(()=>{reject ("User details not available")},1000)
    // }
// });
// async function getUserdetails(){
    // let response=await promise;
    // console.log({promise});
// }
// getUserdetails();
// 
let success =true;
let promise = new Promise(function(resolve, reject){
    if(success){
       setTimeout(()=>{resolve("I ave everythin I need")},4000)
    }
    else{
     setTimeout(()=>{  reject("I am  still poor")},2000)
    }
}).then(()=>{console.log("I have made it ");})
.catch(()=>{console.log("I will still make it");})
.finally(()=>{console.log("Iam still me")})
console.log({promise});




