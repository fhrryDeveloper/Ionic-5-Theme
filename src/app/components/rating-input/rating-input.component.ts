import { Component, forwardRef, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingInputComponent), multi: true }
  ],
  encapsulation: ViewEncapsulation.None
})
export class RatingInputComponent implements ControlValueAccessor, OnInit {
  @Input() max = 5;
  @Input() readOnly = false;

  range: Array<number>;
  innerValue: any;
  propagateChange: any = () => {}; // Noop function

  ngOnInit() {
    const states: Array<number> = [];

    for (let i = 0; i < this.max; i++) {
      if (this.innerValue > i && this.innerValue < i + 1) {
        states[i] = 2;
      } else if (this.innerValue > i) {
        states[i] = 1;
      } else {
        states[i] = 0;
      }
    }

    this.range = states;
  }

  get value(): any {
    return this.innerValue;
  }

  set value(val: any) {
    if (val !== this.innerValue) {
      this.innerValue = val;
      this.propagateChange(val);
    }
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  rate(amount: number) {
    if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
      this.value = amount;
    }
  }
}
