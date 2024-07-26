import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="group relative flex items-baseline text-center justify-center text-lg rounded-none bg-kom-orange text-white hover:font-dalekPinpoint px-5 py-1 w-auto group-hover:w-[300px]"
      routerLink="link"
    >
      {{ label }}
      <span class="ml-2 relative top-1">
        <mat-icon
          aria-hidden="false"
          aria-label="adaptive icon menu"
          fontIcon="arrow_outward"
          class="group-hover:invisible"
        ></mat-icon>
        <mat-icon
          aria-hidden="false"
          aria-label="adaptive icon menu"
          fontIcon="arrow_forward"
          class="hidden group-hover:inline -ml-5"
        ></mat-icon>
      </span>
    </button>
  `,
})
export class SharedButtonComponent {
  @Input({ required: true }) label = '';
  @Input() link: string | null = '';
}
