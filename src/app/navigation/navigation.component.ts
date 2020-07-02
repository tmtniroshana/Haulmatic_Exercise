import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    if(localStorage.getItem("loggedIn")!=undefined){
      localStorage.getItem("loggedIn")=="true"?this.loggedIn = true: this.loggedIn = false;
    }
    else{
      this.loggedIn = false;
    }
    this.sharedService.navigationReloadRespond().subscribe(()=>{
      console.log('test')
      if(localStorage.getItem("loggedIn")!=undefined){
        localStorage.getItem("loggedIn")=="true"?this.loggedIn = true: this.loggedIn = false;
      }
      else{
        this.loggedIn = false;
      }
    })
  }

  logout(){
    localStorage.removeItem("loggedIn");
    this.sharedService.navigationReloadRequest();
    this.router.navigateByUrl('login');
  }

}
