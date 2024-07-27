import { NgIf } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
// import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [RouterLink, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="group relative flex items-center text-lg rounded-none bg-kom-orange text-white hover:font-dalekPinpoint px-5 py-1 group-hover:w-[300px]"
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
  @Input({ required: true }) label = '';
  @Input() link: string | undefined = '';
  @Input({ transform: booleanAttribute }) hasIcon = false;
}
