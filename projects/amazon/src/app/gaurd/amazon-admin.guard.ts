// import { CanActivateFn } from '@angular/router';

// export const amazonAdminGuard: CanActivateFn = (route, state) => {
  
//   return false;
// };

import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userRole: string = "cutomer"; // This should be dynamically fetched based on the actual user role
}

export const amazonAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  if (userService.userRole !== 'admin') {
    return router.parseUrl('/login') as UrlTree;
  }

  return true;
};


// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// }) 
// export class amazonAdminGuard implements CanActivate {
//   constructor(private router: Router) {}

//   public userRole: string = "customer"; // This should be dynamically fetched based on the actual user role

//   canActivate(): boolean {
//     if (this.userRole !== 'admin') {
//       this.router.navigate(['login']);
//       return false;
//     }
//     return true;
//   }
// }

