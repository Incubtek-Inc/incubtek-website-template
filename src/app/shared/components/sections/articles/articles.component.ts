import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ARTICLES } from '../../../constants/articles';

@Component({
  selector: 'app-kom-articles',
  templateUrl: './articles.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class ArticlesComponent {
  articles = ARTICLES;
}
