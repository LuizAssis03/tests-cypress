describe('test', () => {
  beforeEach(()=>{
      cy.visit('/')
      cy.viewport(1920,1080)
  })

  it('navigate', () => {
    cy.visit('/')
  })

  it('find header eletronics', () => {
    
    //Elemento header eletronico
    let headerEletronic = cy.get('[href="/Eletronicos-e-Tecnologia/b/?ie=UTF8&node=16209062011&ref_=nav_cs_electronics"]')
    headerEletronic.should('contains.text', 'Eletrônicos').click();
    
    //Elemento categoria
    let categoryHome = cy.get('[class="bxc-grid__content   bxc-grid__content--light  celwidget"]');
    categoryHome.should('be.visible', 'have.attr', "/b/ref=s9_acss_bw_cg_CatTile_2c1_w?ie=UTF8&node=16243809011&pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-4&pf_rd_r=BYJD7A0CTT9HFG39APEM&pf_rd_t=101&pf_rd_p=16bdb8d5-8685-4a46-bc18-a986204bffc9&pf_rd_i=16209062011");
  })

  it ('select product', () => {
    
    //elemento barra de pesquisa
    let searchBar = cy.get('#twotabsearchtextbox')
    searchBar.should('be.visible').click();
    searchBar.type('Playstation 5');

    //elemento btn pesquisa
    let btnSearch = cy.get('#nav-search-submit-button');
    btnSearch.should('be.visible').click();

    //elemento produto Playstation
    let productOne = cy.get('[data-asin="B0BNSR3MW9"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus');
    productOne.should('be.visible', 'contains.text', 'Console PlayStation 5');
    productOne.click();

  })

  it ('add product to shopping cart', () => {
    
    //elemento barra de pesquisa
    let searchBar = cy.get('#twotabsearchtextbox')
    searchBar.should('be.visible').click();
    searchBar.type('Playstation 5');

    //elemento btn pesquisa
    let btnSearch = cy.get('#nav-search-submit-button');
    btnSearch.should('be.visible').click();

    //elemento produto Playstation
    let productOne = cy.get('[data-asin="B0BNSR3MW9"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus');
    productOne.should('be.visible', 'contains.text', 'Console PlayStation 5');
    productOne.click();

    //elemento botão comprar
    let btnBuy = cy.get('#buy-now-button');
    btnBuy.should('be.visible')

    //elemento botão carrinho
    let btnCar = cy.get('#add-to-cart-button');
    btnCar.should('be.visible').click();

    let feedbackMessage = cy.get('.a-size-medium-plus');
    feedbackMessage.should('be.visible', 'contains.text', 'Adicionado ao carrinho');

    //elemento botão produtos do carrinho
    let btnProducts = cy.get('#sw-gtc > .a-button-inner > .a-button-text');
    btnProducts.should('be.visible').click();

    let titlePage = cy.get('h1');
    titlePage.should('be.visible', 'contains.text', 'Carrinho de compras');

    let titleProduct = cy.get('.a-truncate-cut');
    titleProduct.should('be.visible', 'contains.text', 'Console PlayStation 5');

  })
})