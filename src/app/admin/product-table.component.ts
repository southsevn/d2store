import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
  moduleId: module.id,
  templateUrl: "product-table.component.html",
  styleUrls: ['product-table.component.css']
})
export class ProductTableComponent {
  constructor(private repository: ProductRepository) { }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
}
