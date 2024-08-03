import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SharedButtonComponent } from '@shared/components/button.component';
import { EQUIPES } from '@shared/constants/equipes';

@Component({
  selector: 'app-kom-equipes',
  templateUrl: './equipes.component.html',
  standalone: true,
  imports: [SharedButtonComponent, NgClass, NgStyle, RouterLink],
})
export class EquipesComponent {
  equipes = EQUIPES;
  strokeColor: string = '#000000';

  private _setStyle: Record<string, any> | null = null;

  @Input()
  set setStyle(value: Record<string, any> | null) {
    this._setStyle = value;
    this.updateStrokeColor();
  }

  get setStyle(): Record<string, any> | null {
    return this._setStyle;
  }

  private updateStrokeColor() {
    this.strokeColor = this._setStyle?.['line']?.color || '#000000';
  }
}
