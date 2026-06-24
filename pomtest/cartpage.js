exports.Cart=class Cart {
    constructor(page){
        this.page=page;
        this.book="a[href='/books']",
        this.health="h2 a[href='/health']",
        this.cart="[value='Add to cart']"
      
    }


//Methods
    async addToCart(){
        await this.page.locator(this.book).first().click();
        await this.page.locator(this.health).first().click();
        await this.page.locator(this.cart).first().click();
       
    }
}

