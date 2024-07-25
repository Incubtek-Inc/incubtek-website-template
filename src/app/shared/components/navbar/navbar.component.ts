import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { LogoComponent } from '../logo/logo.component';
import { MENUS } from '../../constants/nabbar-menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menus = MENUS;
}
