import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtAuthService } from '../services/auth/jwt-auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private jwtAuth: JwtAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/RMS/auth/login')) {
      return next.handle(req);
    }

    let token = this.jwtAuth.token || this.jwtAuth.getJwtToken();

    if (!token) {
      console.error('❌ No token found in JwtAuthService! Unauthorized request.');
      return next.handle(req); 
    }

    token = token.replace(/"/g, '');

    const clonedRequest = token ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    }): req;

    return next.handle(clonedRequest);
  }
}


// 12/03/25
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(private jwtAuth: JwtAuthService) {}

//   intercept(
//     req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
//     if (req.url.includes('/RMS/auth/login')) {
//       // Skip adding the Authorization header for the login request
//       return next.handle(req);
//     }

//     const token = this.jwtAuth.token || this.jwtAuth.getJwtToken();
//     // const token = this.jwtAuth.getJwtToken();
//     // console.log(token);

//     if (token) {
//       // console.log("Intercepted token: Bearer ", token);  // Log token to verify it
//       const cleanedToken = token.replace(/"/g, '');

//       const clonedRequest = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return next.handle(clonedRequest);
//     } 
    
//     else {
//       console.error('No token found! Unauthorized request.');
//     }
//     return next.handle(req);
//   }
// }
// 12/03./25
// const payload = JSON.parse(atob(token.split('.')[1]));
// console.log('Token Expiry:', new Date(payload.exp * 1000));
// if (Date.now() >= payload.exp * 1000) {
//   console.error('Token expired! Redirecting to login...');
//   this.jwtAuth.logout();
// }
// var token = this.jwtAuth.token || this.jwtAuth.getJwtToken();
// const token = this.authService.getToken();  // Ensure you're getting the correct token

// import { Injectable } from "@angular/core";
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
//   HttpErrorResponse,
// } from "@angular/common/http";
// import { Observable, throwError } from "rxjs";
// import { catchError } from "rxjs/operators";
// import { JwtAuthService } from "../services/auth/jwt-auth.service";

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(private jwtAuth: JwtAuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Skip adding Authorization header for login requests
//     if (req.url.includes("/RMS/auth/login")) {
//       return next.handle(req);
//     }

//     // Get JWT token
//     const token = this.jwtAuth.getJwtToken();
//     console.log("Intercepted Token:", token); // Debugging

//     // Clone request & add Authorization header
//     let clonedRequest = req;
//     if (token) {
//       clonedRequest = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     } else {
//       console.warn("No token found! Request may be unauthorized.");
//     }

//     return next.handle(clonedRequest).pipe(
//       catchError((error) => this.handleError(error))
//     );
//   }

//   private handleError(error: HttpErrorResponse): Observable<never> {
//     if (error.status === 401) {
//       console.error("Unauthorized request. Redirecting to login...");
//       // Handle unauthorized requests (e.g., redirect to login page)
//       // window.location.href = '/login'; // Uncomment if needed
//     }
//     return throwError(() => new Error(error.message));
//   }
// }
