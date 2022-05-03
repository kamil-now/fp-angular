import { Component } from '@angular/core'
import { CartService } from 'src/app/modules/core/services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(
    readonly cartService: CartService
  ) {
  }
}
