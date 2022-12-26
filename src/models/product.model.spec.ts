import { ProductModel, Product } from "./product.model";

const testProductModel = new ProductModel();

describe("Product Model", () => {
  it("should create a product", async () => {
    const product: unknown = await testProductModel.createProduct({
      name: "product test",
      price: 100,
    });
    expect(product as Product).toBeDefined();
  });

  it("should get all products", async () => {
    const products: Product[] = await testProductModel.getProducts();
    expect(products).toBeDefined();
  });

  it("should get a product by id", async () => {
    const product: Product = await testProductModel.getProductById("3");
    expect(product).toBeDefined();
  });

  it("should delete a product", async () => {
    const product: unknown = await testProductModel.deleteProductById("1");
    expect(product).toBeDefined();
  });
});
