import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { catchError, of } from 'rxjs'
import { ContactService } from 'src/app/modules/core/services/contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public get messageSent(): boolean {
    return this._messageSent
  }

  public get error(): boolean {
    return this._error
  }

  private _error = false;
  private _messageSent = false;

  constructor(
    private readonly _contactService: ContactService
  ) {
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this._contactService.sendMessage(form.value)
        .pipe(
          catchError(error => {
            console.error(error)
            this._error = true
            return of(error)
          })
        ).subscribe(() => this._messageSent = true)
    }
  }
}
