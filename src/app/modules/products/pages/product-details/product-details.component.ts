import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { mergeMap, Observable, pluck } from 'rxjs'
import { Product } from 'src/app/models/product'
import { ProductService } from 'src/app/modules/core/services/product.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  get product$(): Observable<Product | undefined> {
    return this._activatedRoute.params.pipe(
      pluck('id'),
      mergeMap(id => this._productService.getProductById(id))
    )
  }

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _productService: ProductService
  ) {
  }
}
