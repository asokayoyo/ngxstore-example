import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <h1>NgRx Data Monitor</h1>
      <app-data-chart></app-data-chart>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    h1 {
      text-align: center;
      color: #333;
    }
  `]
})
export class AppComponent {}