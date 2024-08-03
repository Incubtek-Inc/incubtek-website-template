import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MENUS } from '@shared/constants/nabbar-menu';
import { SharedButtonComponent } from '../button.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-kom-navbar',
  standalone: true,
  imports: [CommonModule, LogoComponent, RouterLink, SharedButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menus = MENUS;
}
