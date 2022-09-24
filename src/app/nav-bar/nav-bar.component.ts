import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuIsOpened = false;

  menuAction() {

    if (this.menuIsOpened) {
      this.menuIsOpened = false;
    } else {
      this.menuIsOpened = true;
    }
  }

}
