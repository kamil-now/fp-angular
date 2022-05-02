import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Message } from 'src/app/models/message'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  get messages$(): Observable<Message[]> {
    return this._messages.asObservable()
  }
  private _messages = new BehaviorSubject<Message[]>([])

  constructor(
    private readonly _http: HttpClient
  ) {
  }

  sendMessage(message: Message): Observable<void> {
    return this._http.post<void>('/api/contact', message)
  }

  fetchMessages(): void {
    this._http.get<Message[]>('/api/contact')
      .subscribe((res: Message[]) => this._messages.next([...res]))
  }
}