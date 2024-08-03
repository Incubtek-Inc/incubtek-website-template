import { Component } from '@angular/core';

import { SharedButtonComponent } from '@shared/components/button.component';

@Component({
  selector: 'app-kom-projets',
  standalone: true,
  imports: [SharedButtonComponent],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.scss',
})
export class ProjetsComponent {}
