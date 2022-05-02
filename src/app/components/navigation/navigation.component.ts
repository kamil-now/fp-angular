import { Component, OnDestroy } from '@angular/core'
import { Subject, takeUntil } from 'rxjs'
import { AuthService } from 'src/app/modules/core/services/auth.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy {
  readonly navigation = [
    {
      link: '/home',
      title: 'Home'
    },
    {
      link: '/products',
      title: 'Products'
    },
    {
      link: '/contact',
      title: 'Contact'
    }
  ]

  private readonly _isDestroyed = new Subject<void>()

  constructor(
    readonly authService: AuthService
  ) {
    authService.isAuthenticated$
      .pipe(takeUntil(this._isDestroyed))
      .subscribe(isLoggedIn => {
        if (isLoggedIn && !this.navigation.find(x => x.title === 'Admin')) {
          this.navigation.push({
            link: '/admin',
            title: 'Admin'
          })
        }
      })
  }

  ngOnDestroy(): void {
    this._isDestroyed.next()
    this._isDestroyed.complete()
  }
}
