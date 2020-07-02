import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private sharedService: SharedService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    UserName: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    Password: new FormControl('', Validators.required),
  });

  public login(): void {
    if(this.profileForm.value.UserName == "example@email.com" && this.profileForm.value.Password == "example#123"){
      // console.log(this.profileForm.value.UserName);
      localStorage.setItem("loggedIn", "true");
      this.sharedService.navigationReloadRequest();
      this.router.navigateByUrl('dashboard');
    }
    if(this.profileForm.value.UserName != "example@email.com" && this.profileForm.value.Password != "example#123"){
      // console.log("error");
      this._snackBar.open('Email or Password Incorrect', 'close', {
        duration: 2000,
      });
    }
  }

}
