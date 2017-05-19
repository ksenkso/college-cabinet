import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const routeName = route.data.name ? route.data.name : 'anon';

    return this.checkLogin(state.url, routeName)
      .catch(err => {
        console.error(err);
        this.router.navigate(['/auth/login']);
      })

  }

  private checkLogin(redirectUrl: string, routeName: string): Promise<boolean> {

    this.authService.redirtectUrl = redirectUrl;

    return this.authService
      .try(routeName);
  }
}
