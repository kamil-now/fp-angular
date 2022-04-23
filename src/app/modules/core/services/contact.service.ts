import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Message } from 'src/app/models/message'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(
    private readonly _http: HttpClient
  ) {
  }

  sendMessage(message: Message): Observable<void> {
    return this._http.post<void>('/api/contact', message)
  }
}