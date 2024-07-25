import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="flex items-center">
      <img
        ngSrc="assets/logo/komnayah_orange.png"
        width="50"
        height="52"
        alt="logo de komnayah"
      />
    </div>
  `,
})
export class LogoComponent {}
