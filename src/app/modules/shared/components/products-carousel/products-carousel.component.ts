import { Component, OnDestroy, OnInit } from '@angular/core'
import { map } from 'rxjs'
import { Product } from 'src/app/models/product'
import { ProductService } from 'src/app/modules/core/services/product.service'

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss']
})
export class ProductsCarouselComponent implements OnInit, OnDestroy {

  readonly products$ = this._productService.getAllProducts()
    .pipe(
      map(products =>
        !products || products.length === 0
          ? []
          : this.getRandom(products, 3)
      )
    )
  private _intervalRef: number | undefined = undefined

  constructor(
    private readonly _productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this._productService.fetchProducts()
    this._intervalRef = window.setInterval(() => this._productService.fetchProducts(), 10000)
  }

  ngOnDestroy(): void {
    window.clearInterval(this._intervalRef)
  }

  private getRandom(products: Product[], count: number): Product[] {
    const randoms: number[] = []
    for (let i = 0; i < 3; i++) {
      let random = NaN
      do {
        random = Math.floor(Math.random() * (products.length))
      }
      while (randoms.includes(random))
      randoms.push(random)
    }
    return randoms.map(r => products[r])
  }
}

