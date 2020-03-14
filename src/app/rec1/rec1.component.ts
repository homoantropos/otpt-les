import { Component } from '@angular/core';

@Component({
  selector: 'app-rec1',
  templateUrl: './rec1.component.html'
})
export class Rec1Component {
background = '';

  constructor() { }
onRec1(color: string) {
    this.background = `${color}`;
}
onClear() {
    this.background = '';
}
}
