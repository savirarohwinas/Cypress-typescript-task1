export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    lbl_nameBackpack = '.inventory_list > div:nth-of-type(1) .inventory_item_name'
    lbl_priceBackpack = '.inventory_list > div:nth-of-type(1) .inventory_item_price '
    btn_addCartBackpack = '#add-to-cart-sauce-labs-backpack'
    
    link_sauceLabsBikeLight = 'Sauce Labs Bike Light'
    lbl_nameBikeLight = '.inventory_details_name'
    lbl_priceBikeLight = '.inventory_details_price'
    btn_addCartBikeLight = '#add-to-cart-sauce-labs-bike-light'

    btn_cart = '.shopping_cart_link'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    addproduct_saucelabsbackpack(){
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get(this.lbl_nameBackpack).invoke('text').as('lblNameItemBackpackDS')
        cy.get(this.lbl_priceBackpack).invoke('text').as('lblPriceItemBackpackDS')
        cy.get(this.btn_addCartBackpack).click()
    }

    addproduct_saucelabsbikelight(){
        cy.contains(this.link_sauceLabsBikeLight).click()
        cy.contains('Sauce Labs Bike Light').should('be.visible')
        cy.get(this.lbl_nameBikeLight).invoke('text').as('lblNameItemBikelightDS')
        cy.get(this.lbl_priceBikeLight).invoke('text').as('lblPriceItemBikelightDS')
        cy.get(this.btn_addCartBikeLight).click()
    }

    clickcart(){
       cy.get(this.btn_cart).click()
    }
}