import { Component } from '@angular/core';
import { SharedButtonComponent } from '@shared/components/button.component';

import { FooterComponent } from '@shared/components/footer/footer.component';
import { SocialMediaComponent } from '@shared/components/social-media.component';

@Component({
  selector: 'app-kom-contact',
  standalone: true,
  imports: [FooterComponent, SocialMediaComponent, SharedButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
