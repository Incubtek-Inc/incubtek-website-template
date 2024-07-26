import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { EQUIPES } from '../../../constants/equipes';

@Component({
  selector: 'app-kom-equipes',
  templateUrl: './equipes.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class EquipesComponent {
  equipes = EQUIPES;

  @Input() setStyle: Record<string, any> | null = null;
}
