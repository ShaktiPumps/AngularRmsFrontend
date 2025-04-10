import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButton as MatButton } from '@angular/material/button';
import { MatProgressBar as MatProgressBar } from '@angular/material/progress-bar';
import { Validators, UntypedFormGroup, UntypedFormControl, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { JwtAuthService } from '../../../shared/services/auth/jwt-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm: FormGroup;
  errorMsg = '';
  // return: string;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private jwtAuth: JwtAuthService,
    private egretLoader: AppLoaderService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      // username: new UntypedFormControl('Watson', Validators.required),
      // password: new UntypedFormControl('12345678', Validators.required),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      //rememberMe: new FormControl(true)
    });

    // this.route.queryParams
    //   .pipe(takeUntil(this._unsubscribeAll))
    //   .subscribe(params => this.return = params['return'] || '/');
  }

  ngAfterViewInit() {
    //this.autoSignIn();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(1);
    this._unsubscribeAll.complete();
  }

  signin() {

  const signinData = this.signinForm.value;

  // Disable the button and show the progress bar
  this.submitButton.disabled = true;
  this.progressBar.mode = 'indeterminate';

  // Call the authentication API
  console.log("signinData username password: ",signinData.userName,signinData.password);
  this.jwtAuth.signin(signinData.userName, signinData.password)
    .subscribe(response => {
      // Check if the response is successful
      if (response.status) {
        const { jwtToken, user } = response.response;
        console.log("before setting token:",jwtToken)
        this.jwtAuth.setUserAndToken(jwtToken,  user, true);
        this.router.navigateByUrl(this.jwtAuth.return);
      } else {
        this.errorMsg = response.message;
      }

      this.submitButton.disabled = false;
      this.progressBar.mode = 'determinate';
    }, err => {
      this.submitButton.disabled = false;
      this.progressBar.mode = 'determinate';
      this.errorMsg = 'An error occurred while logging in. Please try again.';
      console.error(err);
    });


    // const signinData = this.signinForm.value

    // this.submitButton.disabled = true;
    // this.progressBar.mode = 'indeterminate';
    
    // this.jwtAuth.signin(signinData.username, signinData.password)
    // .subscribe(response => {
    //   this.router.navigateByUrl(this.jwtAuth.return);
    // }, err => {
    //   this.submitButton.disabled = false;
    //   this.progressBar.mode = 'determinate';
    //   this.errorMsg = err.message;
    //   // console.log(err);
    // })
  }

  // autoSignIn() {    
  //   if(this.jwtAuth.return === '/') {
  //     return
  //   }
  //   this.egretLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0, 20)}...`, {width: '320px'});
  //   setTimeout(() => {
  //     this.signin();
  //     console.log(`autoSignIn: ${this.jwtAuth.return.substring(0, 20)}`);
  //     this.egretLoader.close()
  //   }, 1000);
  // }

}
