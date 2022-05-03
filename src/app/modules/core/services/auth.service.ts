import { Injectable } from '@angular/core'
import { AuthService as OAuthService } from '@auth0/auth0-angular'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isAuthenticated$(): Observable<boolean> {
    return this._isAuthenticated.asObservable()
  }
  get userEmail$(): Observable<string> {
    return this._userEmail.asObservable()
  }
  private readonly _userEmail = new BehaviorSubject('')
  private readonly _isAuthenticated = new BehaviorSubject(false)

  constructor(
    private readonly _authService: OAuthService
  ) {
    this._authService.user$.subscribe(user => this._userEmail.next(user ? user.email ?? '' : ''))
    this._authService.isAuthenticated$.subscribe(isAuthenticated => this._isAuthenticated.next(isAuthenticated))
  }

  login(): void {
    this._authService.loginWithRedirect()
  }

  logout(): void {
    this._authService.logout()
  }
}
