import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Product } from 'src/app/models/product'
import { ProductService } from 'src/app/modules/core/services/product.service'

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss']
})
export class AdminProductAddComponent {

  readonly product: Product = { name: '', description: '', price: 0 }

  constructor(
    private readonly _router: Router,
    private readonly _productService: ProductService
  ) {
  }

  onSave(product: Product): void {
    this._productService.createProduct(product)
      .subscribe(() => this._router.navigate(['/products']))
  }
}
