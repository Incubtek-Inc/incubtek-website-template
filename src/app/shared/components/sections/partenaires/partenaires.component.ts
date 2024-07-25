import { Component } from '@angular/core';
import { PARTENAIRES } from '../../../constants/partenaires';

@Component({
  selector: 'app-kom-partenaires',
  standalone: true,
  imports: [],
  templateUrl: './partenaires.component.html',
  styleUrl: './partenaires.component.scss',
})
export class PartenairesComponent {
  partenaires = PARTENAIRES;
}
