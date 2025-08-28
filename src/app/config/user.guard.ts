import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const role = localStorage.getItem('role');
    console.log('here ');
    if (role !== 'user') {
      Swal.fire({
        title: 'Error!',
        text: "Sorry, you don't have access to this page.",
        icon: 'error',
        confirmButtonColor: 'red',
      });
      this.router.navigate(['/login']);
    }
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const role = localStorage.getItem('role');
    if (role !== 'user') {
      Swal.fire({
        title: 'Error!',
        text: "Sorry, you don't have access to this page.",
        icon: 'error',
        confirmButtonColor: 'red',
      });
      this.router.navigate(['/login']);
    }
    return true;
  }
}
