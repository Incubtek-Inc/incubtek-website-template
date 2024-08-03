import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedButtonComponent } from '@shared/components/button.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

import { ArticlesComponent } from '@shared/components/sections/articles/articles.component';
import { ProjetsComponent } from '@shared/components/sections/projets/projets.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    RouterLink,
    ArticlesComponent,
    ProjetsComponent,
    FooterComponent,
    SharedButtonComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {}
