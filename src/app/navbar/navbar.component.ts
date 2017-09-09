import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links = [
    {
      name: 'FEATURE FILMS',
      href: '#',
      target: ''
    },
    {
      name: 'SHORT FILMS',
      href: '#',
      target: ''
    },
    {
      name: 'MUSIC VIDEOS',
      href: '#',
      target: ''
    },
    {
      name: 'BIO',
      href: '#',
      target: ''
    },
    {
      name: 'CONTACT',
      href: '#',
      target: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
