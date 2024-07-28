import { Component } from '@angular/core';

import { FooterComponent } from '@shared/components/footer/footer.component';
import { ArticlesComponent } from '@shared/components/sections/articles/articles.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FooterComponent, ArticlesComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {}
