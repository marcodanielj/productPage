import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  isDropdownOpened = false;

  dropdownAction() {
    if (this.isDropdownOpened) {
      this.isDropdownOpened = false;
    } else {
      this.isDropdownOpened = true;
    }
  }
}
