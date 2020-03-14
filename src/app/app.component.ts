import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  receipt = '';
  receive(source: string): void {
    this.receipt = `${source}`;
    this.receipt = 'RED';
    console.log(source);
  }
}
