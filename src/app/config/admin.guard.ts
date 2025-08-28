import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = localStorage.getItem('role');

    if (role !== 'admin') {
      Swal.fire({
        title: 'Error!',
        text: "Sorry, you don't have permission to open this page",
        icon: 'error',
        confirmButtonColor: 'red'
      })
      this.router.navigate(['/login']);
    }
    
    return true;
  }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = localStorage.getItem('role');

    if (role !== 'admin') {
      Swal.fire({
        title: 'Error!',
        text: "Sorry, you don't have permission to open this page",
        icon: 'error',
        confirmButtonColor: 'red'
      })
      this.router.navigate(['/login']);
    }
    
    return true;
  }
}
