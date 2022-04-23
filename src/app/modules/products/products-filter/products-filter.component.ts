import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { debounceTime, map, Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit, OnDestroy {

  @Output() search = new EventEmitter<string>()
  readonly keyUp = new Subject<KeyboardEvent>();

  private readonly _isDestroyed = new Subject<void>()

  ngOnInit(): void {
    this.keyUp.pipe(
      takeUntil(this._isDestroyed),
      map(event => event.target ? (event.target as HTMLInputElement)?.value : ''),
      debounceTime(400)
    ).subscribe(value => this.search.emit(value))
  }

  ngOnDestroy(): void {
    this._isDestroyed.next()
    this._isDestroyed.complete()
  }
}
