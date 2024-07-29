import { booleanAttribute, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARTICLES } from '../../../constants/articles';
import { Articles } from '@shared/interfaces/articles';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kom-articles',
  templateUrl: './articles.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class ArticlesComponent {
  @Input() articles: Articles[] = ARTICLES;
}
