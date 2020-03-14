import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-src1',
  templateUrl: './src1.component.html'
})
export class Src1Component {
  @Output() color: EventEmitter<string>;
  @ViewChild('firstInput') onFirstInput: ElementRef;
  @ViewChild('secondInput') onSecondInput: ElementRef;
  colorName1 = '';
  colorName2 = '';
  constructor() {
    this.color = new EventEmitter<string>();
  }
  onClick(colorNam: string): void {
    this.color.emit(colorNam);
    colorNam === this.colorName1 ? this.onSecondInputFocus() : this.onFirstInputFocus();
    this.colorName1 = '';
    this.colorName2 = '';
  }
  onFirstInputFocus(): void {
    this.onFirstInput.nativeElement.focus();
  }
  onSecondInputFocus(): void {
    this.onSecondInput.nativeElement.focus();
  }
}
