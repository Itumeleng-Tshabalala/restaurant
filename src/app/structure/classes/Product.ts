export class Product {

  private id;
  private name;
  private price;
  private image;
  private rate;
  private category;
  private available;
  private description;

  constructor(
    id: string,
    name: string,
    image: string,
    price: number,
    rate: number,
    category: string,
    description: string,
    available: boolean
  ) {
    this.id = id;
    this.name = name;
    this.rate = rate;
    this.image = image;
    this.price = price;
    this.category = category;
    this.description = description;
    this.available = available;
  }

  getProductId(): string {
    return this.id;
  }

  getProductName(): string {
    return this.name;
  }

  getProductRate(): number {
    return this.rate;
  }

  getProductImage(): string {
    return this.image;
  }

  getProductPrice(): number {
    return this.price;
  }

  getProductCategory(): string {
    return this.category;
  }

  getProductDescription(): string {
    return this.description;
  }

  getProductAvailability(): boolean {
    return this.available;
  }
}
