import { Component } from '@angular/core';

import { SocialMediaComponent } from '../social-media.component';

@Component({
  selector: 'app-kom-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [SocialMediaComponent],
})
export class FooterComponent {}
