import { Component, Input, OnInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor( public navService: NavService) { }

  ngOnInit(): void {
  }

}
