import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" routerLink=''>
          Marks
        </a>
        <a class="navbar-item" routerLink='marks'>Marks</a>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
