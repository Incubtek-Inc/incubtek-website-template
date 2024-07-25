import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-kom-projets',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.scss',
})
export class ProjetsComponent {}
