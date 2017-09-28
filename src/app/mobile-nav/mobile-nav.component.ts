import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {
  menuIcon = 'menu';
  links = [
    {
      name: 'FEATURE FILMS',
      href: '#feature-films',
      target: ''
    },
    {
      name: 'SHORT FILMS',
      href: '#short-films',
      target: ''
    },
    {
      name: 'MUSIC VIDEOS',
      href: '#music-videos',
      target: ''
    },
    {
      name: 'BIO',
      href: '#bio',
      target: ''
    },
    {
      name: 'CONTACT',
      href: 'mailto:hellowilliamdugan@icloud.com',
      target: ''
    },
    {
      name: 'TOP',
      href: '#',
      target: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  toggleMenuIcon() {
    return this.menuIcon === 'menu' ? this.menuIcon = 'close' : this.menuIcon = 'menu';
  }
}


