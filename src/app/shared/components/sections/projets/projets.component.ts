import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedButtonComponent } from '@shared/components/button.component';

@Component({
  selector: 'app-kom-projets',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, SharedButtonComponent],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.scss',
})
export class ProjetsComponent {}
