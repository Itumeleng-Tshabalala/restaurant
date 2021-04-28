export class Product {

  private id;
  private name;
  private price;
  private category;

  constructor(id: string, name: string, price: number, category: string) {
    this.id = id,
    this.name = name,
    this.price = price,
    this.category = category
  }

  setProductId(id: string) {
    this.id = id;
  }

  getProductId() : string {
    return this.id;
  }

  setProductName(name: string) {
    this.name = name;
  }

  getProductName() : string {
    return this.name;
  }

  setProductPrice(price: number) : void {
    this.price = price;
  }

  getProductPrice() : number {
    return this.price;
  }

  getProductCategory() : string {
    return this.category;
  }

  setProductCategory(category: string) {
    this.category = category;
  }
}
