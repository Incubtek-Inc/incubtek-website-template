import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kom-logo',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <div class="flex items-center">
      <button type="button" routerLink="/home">
        <img
          ngSrc="assets/logo/komnayah_orange.png"
          width="50"
          height="52"
          alt="logo de komnayah"
          priority
        />
      </button>
    </div>
  `,
})
export class LogoComponent {}
