import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

const NAVLINKS: Object[] = [
  { link: '/sers', label: 'SPOs anzeigen' },
  { link: '/courses', label: 'Module anzeigen' },
  { link: '/curricula', label: 'Studienpläne anzeigen' },
  { link: '/glossary', label: 'Glossar anzeigen' }
];

@Component({
  selector: 'app-hsis-shell',
  templateUrl: './hsis-shell.component.html',
  styleUrls: ['./hsis-shell.component.scss']
})
export class HsisShellComponent implements OnInit {

  sideNavOpened: boolean;
  navLinks: Object[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.sideNavOpened = false;
    this.navLinks = NAVLINKS;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
