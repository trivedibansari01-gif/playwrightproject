exports.BuyNow =class BuyNow{
    constructor(page){ 
    this.page=page; 
    this.cartlabel=".cart-label";
    this.country="#CountryId";
    this.zipcode="#ZipPostalCode";
    this.terms="#termsofservice";
    this.checkout="#checkout"
}
//Methods
async BuyNow(){
        await this.page.locator(this.cartlabel).filter({ hasText: "Shopping cart" }).click();
        await this.page.locator(this.country).selectOption("India");
        await this.page.locator(this.zipcode).fill("560011");
        await this.page.locator(this.terms).click();
        await this.page.locator(this.checkout).click();
       
    }
}
