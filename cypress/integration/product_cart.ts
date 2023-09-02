import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import { CartPage } from "./pages/cart_pages"


let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
const URL = 'https://www.saucedemo.com/'

    beforeEach(()=>{
        loginPage.login(URL,'standard_user','secret_sauce')
        loginPage.assertLogin() 
    })
 
    it('User successfully add products to cart', () => {
        dashboardPage.addproduct_saucelabsbackpack()
        dashboardPage.addproduct_saucelabsbikelight()
        dashboardPage.clickcart()
        cartPage.verify_productincart()
        cy.then(function () {
            expect(this.lblNameItemBackpackCART).to.equal(this.lblNameItemBackpackDS)
            expect(this.lblPriceItemBackpackCART).to.equal(this.lblPriceItemBackpackDS)
            expect(this.lblNameItemBikelightCART).to.equal(this.lblNameItemBikelightDS)
            expect(this.lblPriceItemBikelightCART).to.equal(this.lblPriceItemBikelightDS)
        })
    })
    
    it('User successfully remove products from cart', () => {
        dashboardPage.addproduct_saucelabsbackpack()
        dashboardPage.addproduct_saucelabsbikelight()
        dashboardPage.clickcart()
        cartPage.remove_productincart()
        cartPage.verify_emptycart()
    })