import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'projXRP';
  constructor(private router:Router){}
  ngOnInit() {

  }
  dashboard(){
    // this.router.navigate(['/dashboard']);
    this.router.navigateByUrl('/dashboard');
  }
}
