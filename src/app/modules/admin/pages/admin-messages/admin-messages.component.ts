import { Component, OnDestroy, OnInit } from '@angular/core'
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs'
import { Message } from 'src/app/models/message'
import { ContactService } from 'src/app/modules/core/services/contact.service'

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.scss']
})
export class AdminMessagesComponent implements OnInit, OnDestroy {

  get messages$(): Observable<Message[]> {
    return this._contactService.messages$
  }

  get selectedMessageContent$(): Observable<string> {
    return this._selectedMessageContent.asObservable()
  }
  get selectedMessageId$(): Observable<string> {
    return this._selectedMessageId.asObservable()
  }

  private readonly _selectedMessageId = new BehaviorSubject<string>('')
  private readonly _selectedMessageContent = new BehaviorSubject<string>('')

  private readonly _isDestroyed = new Subject<void>()

  constructor(
    private readonly _contactService: ContactService
  ) {
  }

  ngOnInit(): void {
    this._contactService.messages$
      .pipe(takeUntil(this._isDestroyed))
      .subscribe(messages => {
        if (messages?.length > 0) {
          this.select(messages[0])
        }
      })
    this._contactService.fetchMessages()
  }

  ngOnDestroy(): void {
    this._isDestroyed.next()
    this._isDestroyed.complete()
  }

  select(message: Message): void {
    this._selectedMessageContent.next(message.message)
    this._selectedMessageId.next(message.id!)
  }
}
