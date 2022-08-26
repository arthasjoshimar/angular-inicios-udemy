
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1>{{ title }}</h1>
  <span>{{ counter }}</span>
  <br />
  <br />
  <button (click)="acumularBase(1)">+{{ base }}</button>
  <button (click)="acumularBase(-1)">-{{ base }}</button>

  <h3>
    La base es: <strong>{{ base }}</strong>
  </h3>
  `
})

export class ContadorComponent {
  title: string = 'Contador App';
  counter: number = 10;
  base: number = 5;

  increment() {
    return this.counter++;
  }
  decrement() {
    return this.counter--;
  }

  acumular(valor: number) {
    this.counter += valor;
  }
  acumularBase(signo: number) {
    this.counter += this.base * signo;
  }
}
