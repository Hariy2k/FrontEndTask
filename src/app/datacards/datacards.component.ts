import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface Value {
  name: string;
}

export interface HasElementRef {
  _elementRef: ElementRef;
}

@Component({
  selector: 'app-datacards',
  templateUrl: './datacards.component.html',
  styleUrls: ['./datacards.component.css']
})

export class DatacardsComponent implements OnInit {

  @Input('attributeName') attributeName: string;
  @Input('keyShortCut') keyShortCut: string;
  @Input('values') values: any;

  @Output() destroy = new EventEmitter()

  @ViewChild("btnSave",{static:false}) btnSave: HasElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  cardStyle = {
    'width': '30%',
    'border': 'none',
    'cursor': 'pointer',
    'font-size': '15px',
    'padding-block': '5px',
    'background-color': '#ffffff'
  }

  chipStyle = {
    'cursor': 'pointer'
  }

  obj:any
  public inputPlaceholder = "";
  public readonly: boolean = true;
  public show_Icons: boolean = false
  public selectable: boolean = false;
  public removable: boolean = false;
  public addOnBlur: boolean = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  Toggle() {
    if (this.show_Icons == false || this.btnSave._elementRef.nativeElement.id== 'saveBtn') {
      this.show_Icons = !this.show_Icons;
      this.selectable = !this.selectable;
      this.removable = !this.removable;
      this.addOnBlur = !this.addOnBlur;
      this.inputPlaceholder = this.inputPlaceholder == "" ? "Start typing attribute values" : "";
    }
  }

  Save() {
    this.show_Icons = false;
    this.selectable = false;
    this.removable = false;
    this.addOnBlur = false;
    this.inputPlaceholder = "";
  }

  Delete() {
    this.destroy.emit('Destroy')
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.values.push({ name: value.trim() });
    }
    if (input) {
      input.value = '';
    }
  }

  remove(value: Value): void {
    const index = this.values.indexOf(value);
    if (index >= 0) {
      this.values.splice(index, 1);
    }
  }
}
