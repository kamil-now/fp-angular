import { Component, Input } from '@angular/core'
import { NgModel } from '@angular/forms'

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss']
})
export class FormErrorsComponent {

  @Input() model: NgModel | undefined
  @Input() messages!: { [key: string]: string }
  @Input() customValidation: { isError: boolean, message: string }[] | undefined

  get validationErrors(): string[] {
    return this.model?.errors ? Object.keys(this.model.errors).map(x => this.messages[x]) : []
  }

  get customValidationErrors(): string[] {
    return this.customValidation ? this.customValidation.filter(x => x.isError).map(x => x.message) : []
  }

  get allErrors(): string[] {
    return this.validationErrors.concat(this.customValidationErrors)
  }
}
