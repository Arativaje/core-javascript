class basicOverridingClass{
    mathOperation(a,b){
        console.log(a+b);
    }
}
class childOverridingClass extends basicOverridingClass{
    mathOperation(a,b){
        console.log(a*b);
    }
}
var basicOverridingClassObj = new basicOverridingClass;
basicOverridingClassObj.mathOperation(2,3);