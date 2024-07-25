import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SERVICES } from '../../../constants/services';

@Component({
  selector: 'app-kom-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = SERVICES;
}
