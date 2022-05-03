import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Product } from 'src/app/models/product'

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent {
  @Input() product!: Product | null
  @Output() save = new EventEmitter<Product>()

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.save.emit(form.value)
    }
  }
}
