import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Product } from 'src/app/models/product'
import { ProductService } from 'src/app/modules/core/services/product.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  readonly products$: Observable<Product[]> = this._productService.getAllProducts()

  constructor(
    private readonly _productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this._productService.fetchProducts()
  }
}
