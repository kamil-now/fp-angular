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
  readonly total$: Observable<number> = this._productService.getTotal()
  readonly pageSize = 5
  search: string = ''

  constructor(
    private readonly _productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.fetchProducts()
  }

  onSearch(value: string): void {
    this.search = value
    this.fetchProducts()
  }

  pageChanged(e: { page: number }): void {
    this.fetchProducts(e.page)
  }

  private fetchProducts(page?: number): void {
    this._productService.fetchProducts(page, this.pageSize, this.search)
  }
}
