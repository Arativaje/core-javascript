class  A{
    bookName:string;
    bookPrice:number;
    country:string;
    setbookDetails(bName:string, bPrice:number, country:string){
        this.bookName = bName;
        this.bookPrice = bPrice;
        this.country = country;
    }
    getbookDetails(){
        console.log(this.bookName + ' ' + this.bookPrice + ' ' + this.country);
    }
}
class B extends A{
    getbookDetails(){
        if(this.country=='USA'){
            console.log(this.bookName + ' ' + this.bookPrice + ' ' + this.country + "USD");
        }else if(this.country=='india'){
            console.log(this.bookName + ' ' + this.bookPrice + ' ' + this.country + "INR");
        }else{
            super.getbookDetails();
        }
        
    }
}
var Aobj = new B;
Aobj.setbookDetails("Shyamchi Aai", 100, "");
Aobj.getbookDetails();