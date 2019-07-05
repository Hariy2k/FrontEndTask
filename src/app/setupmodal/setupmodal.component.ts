import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';


export interface Value {
  name: string;
}

export interface AttributeData {
  attributeName: string;
  keyShortCut: string;
  values: any;
}

@Component({
  selector: 'app-setupmodal',
  templateUrl: './setupmodal.component.html',
  styleUrls: ['./setupmodal.component.css']
})

export class SetupmodalComponent implements OnInit {

  selectedIndex: number;
  show: boolean = false;
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  attributeName: string;
  keyShortCut: string;
  values: Value[] = [];
  att: AttributeData[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit() {
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

  addAttribute(attname, attkey, attvalues: any) {
    if (attname != "" && attkey != "" && attvalues.length > 0) {
      this.show = false;
      let _attribute = <AttributeData>{
        attributeName: attname.value,
        keyShortCut: attkey.value,
        values: attvalues,
      }
      this.att.push(_attribute);
      attname.value = ''
      attkey.value = ''
      this.values = []
    } else {
      this.show = true;
    }
  }

  Delete(i: number) {
    this.att.splice(i, 1)
  }

  listClick(i) {
    this.selectedIndex = i;
  }

  //   catchKeystroke(event,target:any) {
  //   var map = []; // You could also use an array
  //   target.onkeydown = target.onkeyup = function (event) {
  //     let ex = event; // to deal with IE
  //     map[ex.keyCode] = ex.type == 'keydown';
  //     /* insert conditional here */
  //   }
  //   var i, l = map.length;
  //   for (i = 0; i < l; i++) {
  //     if (map[i]) {
  //       this.keyShortCut += '+' + i;
  //     }
  //   }
  // }
}
