import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})
export class HomePage implements OnInit {

  public products: any = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
