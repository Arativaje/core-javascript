// function* timesgenerator(){
//     console.log(Date.now());
//     yield;
//     console.log('execution continue');
// }
// const it = timesgenerator();
// it.next();
// it.next();

// for(let val of it){
//     console.log(val);
// }

function* gen1() {
    yield 1;
    yield 2;
    return 4;
}
function* gen2() {
   const val = yield* gen1();
   yield 3;
   yield val;
}
const it = gen2();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());