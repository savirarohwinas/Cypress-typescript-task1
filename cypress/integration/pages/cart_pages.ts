export class CartPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    lbl_nameBackpack = '.cart_list > div:nth-of-type(3) .inventory_item_name'
    lbl_priceBackpack = '.cart_list > div:nth-of-type(3) .inventory_item_price'
    btn_removeBackpack = '#remove-sauce-labs-backpack'
    
    link_sauceLabsBikeLight = 'Sauce Labs Bike Light'
    lbl_nameBikeLight = 'div:nth-of-type(4) .inventory_item_name'
    lbl_priceBikeLight = 'div:nth-of-type(4) .inventory_item_price'
    btn_removeBikeLight = '#remove-sauce-labs-bike-light'

    verify_productincart(){
        cy.get(this.lbl_nameBackpack).invoke('text').as('lblNameItemBackpackCART')
        cy.get(this.lbl_priceBackpack).invoke('text').as('lblPriceItemBackpackCART')
        cy.get(this.lbl_nameBikeLight).invoke('text').as('lblNameItemBikelightCART')
        cy.get(this.lbl_priceBikeLight).invoke('text').as('lblPriceItemBikelightCART')
    }

    remove_productincart(){
        cy.get(this.btn_removeBackpack).click()
        cy.get(this.btn_removeBikeLight).click()
    }

    verify_emptycart(){
        cy.get(this.lbl_nameBackpack).should('not.exist')
        cy.get(this.lbl_nameBikeLight).should('not.exist')
    }

}