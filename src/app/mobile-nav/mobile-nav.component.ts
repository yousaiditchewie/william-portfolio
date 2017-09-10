import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {
  menuIcon = 'menu';
  constructor() { }

  ngOnInit() {
  }
  toggleMenuIcon() {
    return this.menuIcon === 'menu' ? this.menuIcon = 'close' : this.menuIcon = 'menu';
  }
}


