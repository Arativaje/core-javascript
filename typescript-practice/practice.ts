class parentA {
    bookName: string;
    bookPrice: number;

    setBookName(bname:string, bprice:number) {
        this.bookName = bname;
        this.bookPrice = bprice;
    }
    getBookPrice() {
        
        console.log(this.bookName + '' + this.bookPrice);
    }
}
class  childB extends parentA{
    author:string;

    setAuthorName(authorName:string){
        this.author = authorName;
    }
    getBookInfo(){
        console.log(this.bookName+ ' ' + this.bookPrice + ' ' + this.author);
    }
}
var childObj = new childB;
childObj.setBookName("Agnipankh",200);
childObj.setAuthorName("A.P.J. Abdul Kalam");
childObj.getBookInfo();