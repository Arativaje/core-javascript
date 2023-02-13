
function hello(a){
return new Promise((resolve, reject)=>{
    
    if(a==2){
        resolve('success');
    }else{
        reject({err:400,msg:"error from reject"});
    }
});
}

hello(1).then(succ=>{
    console.log(succ);
}).catch(err=>{
    console.log(err);
});