import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [DisplayComponent, ButtonComponent, CommonModule],
  styleUrl: './calculator.component.scss',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent {
  buttons: string[] = [
    '%',
    'CE',
    'C',
    '/',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '+/-',
    '0',
    '.',
    '=',
  ];
  display: number = 0;
}
