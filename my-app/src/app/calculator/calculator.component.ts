import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { evaluate } from 'mathjs';

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
  display: string = '';

  onButtonClick(label: string) {
    switch (label) {
      case 'CE':
        this.display = '';
        break;
      case 'C':
        this.display = this.display.slice(0, -1);
        break;
      case '=':
        this.calculate();
        break;
      case 'x':
        this.display += '*';
        break;
      case '+/-':
        if (this.display) {
          this.display = String(-parseFloat(this.display));
        }
        break;
      default:
        this.display += label;
        break;
    }
  }

  calculate() {
    try {
      this.display = evaluate(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }
}
