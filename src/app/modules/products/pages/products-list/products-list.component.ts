import { Component } from '@angular/core'
import { ProductService } from 'src/app/modules/core/services/product.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  constructor(
    public readonly productService: ProductService
    ) {
  }
}
