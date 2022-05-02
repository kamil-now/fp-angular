import { Injectable } from '@angular/core'
import { AuthService as OAuthService, User } from '@auth0/auth0-angular'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isAuthenticated$(): Observable<boolean> {
    return this._authService.isAuthenticated$
  }
  get userEmail$(): Observable<string> {
    return this._userEmail.asObservable()
  }
  readonly _userEmail = new BehaviorSubject('')

  constructor(
    private readonly _authService: OAuthService
  ) {
    
    this._authService.user$.subscribe(user => this._userEmail.next(user ? user.email ?? '' : ''))
  }

  login(): void {
    this._authService.loginWithRedirect()
  }

  logout(): void {
    this._authService.logout()
  }
}