import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { mergeMap, Observable, pluck, tap } from 'rxjs'
import { Product } from 'src/app/models/product'
import { ProductService } from 'src/app/modules/core/services/product.service'

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent {

  readonly product$: Observable<Product> =
    this._activatedRoute.params
      .pipe(
        pluck('id'),
        tap(id => this._productId = id),
        mergeMap(id => this._productService.getProductById(id))
      )

  private _productId!: string

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _productService: ProductService
  ) {
  }

  onSave(product: Product): void {
    this._productService.updateProduct(this._productId, product)
      .subscribe(() => this._router.navigate(['/products']))
  }
}
