import { Injectable } from "@angular/core";
import { LocalStoreService } from "../local-store.service";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { map, catchError, delay } from "rxjs/operators";
import { User } from "../../models/user.model";
import { of, BehaviorSubject, throwError, Observable } from "rxjs";
import { environment } from "environments/environment";

// ================= only for demo purpose ===========
// const DEMO_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjhkNDc4MDc4NmM3MjE3MjBkYzU1NzMiLCJlbWFpbCI6InJhZmkuYm9ncmFAZ21haWwuY29tIiwicm9sZSI6IlNBIiwiYWN0aXZlIjp0cnVlLCJpYXQiOjE1ODc3MTc2NTgsImV4cCI6MTU4ODMyMjQ1OH0.dXw0ySun5ex98dOzTEk0lkmXJvxg3Qgz4ed";

// const DEMO_USER: User = {
//   id: "5b700c45639d2c0c54b354ba",
//   userName: "Watson Joyce",
//   role: "SA",
// };
// ================= you will get those data from server =======

@Injectable({
  providedIn: "root",
})
export class JwtAuthService {
  token;
  isAuthenticated: Boolean =false;
  user: User = {};
  user$ = (new BehaviorSubject<User>(this.user));
  signingIn: Boolean;
  return: string;
  JWT_TOKEN = "JWT_TOKEN";
  // APP_USER = "EGRET_USER";
  LOGED_USER = "LOGED_USER";

  constructor(
    private ls: LocalStoreService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/');
  }

  // private apiUrl = 'http://localhost:3000/login'; // Your API endpoint
  private apiUrl = 'http://localhost:9880/RMS/auth/login'; // Your API endpoint

  signin(userName: string, password: string): Observable<any> {
    //console.log("username password: ",userName,password);
    return this.http.post<any>(this.apiUrl, { userName, password });
  }

   // Check the token's validity
   public checkTokenIsValid(): Observable<User> {
    const token = this.getJwtToken(); // Get the JWT token
    if (!token) {
      return throwError('Token is missing');
    }

    const userFromStorage = this.getUser(); // Get the user from sessionStorage
    if (!userFromStorage) {
      return throwError('User data is missing');
    }

    // Check if the token is expired, validate, or refresh if needed
    // Optionally, send the token to the backend to check if it's still valid
    return of(userFromStorage).pipe(
      map((profile: User) => {
        this.setUserAndToken(token, profile, true);
        this.signingIn = false;
        return profile;
      }),
      catchError((error) => {
        console.error("Token validation failed:", error);
        return throwError(error);
      })
    );
  }

  public signout() {
    this.setUserAndToken(null, null, false);
    this.router.navigateByUrl("sessions/signin");
  }

  isLoggedIn(): Boolean {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    // return this.ls.getItem(this.JWT_TOKEN);
    return localStorage.getItem(this.JWT_TOKEN);
  }
  getUser() {
    // return this.ls.getItem(this.APP_USER);
    // console.log("this.LOGED_USER: ",sessionStorage.getItem(this.LOGED_USER))
    const user = localStorage.getItem(this.LOGED_USER);
    // console.log("user===   "+user)
    return user ? JSON.parse(user) : null;
  }

  storeToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token); // Store token in sessionStorage
  }
  setUserAndToken(token: string, user: User, isAuthenticated: Boolean) {
    this.isAuthenticated = isAuthenticated;
    this.token = token;
    this.user = user;
    this.user$.next(user);

      // Store the JWT token in sessionStorage
      localStorage.setItem(this.JWT_TOKEN, token);
      // Optionally store user information in sessionStorage
      localStorage.setItem(this.LOGED_USER, JSON.stringify(user || {}));
      // console.log("after setting in session token :",sessionStorage.getItem(this.JWT_TOKEN)," user: ",sessionStorage.getItem(this.LOGED_USER))

  }
}
