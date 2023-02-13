class bikes{
     bikeName:string;
     bikePrice:number;
      displaybikeName(bk_name:string,bk_price:number){
         this.bikeName=bk_name;
         this.bikePrice=bk_price;
        console.log(this.bikeName+' '+this.bikePrice);
     }
}
class  newbikes extends bikes{
    displaybikeDetails(bkName:string,bkprice:number){
        this.displaybikeName(bkName,bkprice);
    }
}
// var bikesObj=new bikes;
// // bikesObj.bikeName="hornet";
// // console.log(bikesObj.bikeName);
// bikesObj.displaybikeName('hornet', 100000);
var bikesObj=new newbikes;
bikesObj.displaybikeDetails("hornet", 100000);