class classA {
    wishEveryone() {
        console.log('hi everyone!');
    }
}
class classB extends classA {
    greetEveryone() {
        console.log('goodevening');
    }
}

var classBObj = new classB;
classBObj.wishEveryone();
classBObj.greetEveryone();