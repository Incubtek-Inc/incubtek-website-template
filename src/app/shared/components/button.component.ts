import { NgClass, NgIf } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="group relative flex items-center text-lg rounded-none hover:font-dalekPinpoint transition-all duration-300 p-2 py-2"
      [ngClass]="{
        'bg-kom-orange text-white': variant === 'contained',
        'border border-y-2 border-l-0 border-r-0 border-x-0 border-kom-orange text-kom-orange':
          variant === 'outlined'
      }"
      [routerLink]="link ?? null"
    >
      {{ label }}

      @if(hasIcon){
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-arrow-right hidden group-hover:inline ml-3"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-arrow-up-right group-hover:invisible ml-3"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
      }
    </button>
  `,
})
export class SharedButtonComponent {
  @Input() variant: 'outlined' | 'contained' = 'contained';
  @Input({ required: true }) label = '';
  @Input() link: string | undefined = '';
  @Input({ transform: booleanAttribute }) hasIcon = false;
}
