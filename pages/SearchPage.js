class SearchPage {
    constructor(page) {
      this.page = page;
      this.productItems = page.locator(".product-item");
      this.noResultsMessage = page.locator(".no-result, .search-results");
    }
  
    getProductItems() {
      return this.productItems;
    }
  
    getNoResultsMessage() {
      return this.noResultsMessage;
    }
  }
  
  export default SearchPage;