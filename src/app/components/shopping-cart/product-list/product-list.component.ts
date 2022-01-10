import { Component, OnInit } from '@angular/core';
import { Product} from '../../../product.model';
import { ProductsService} from './../../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor( private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => (this.products = products));
  }
 consoleProduct(){
   console.log(this.products)
 }
}
