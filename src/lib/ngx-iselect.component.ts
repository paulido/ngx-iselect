


import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-iselect',
  template: `

    <ng-container *ngTemplateOutlet="isEdit ? edit : add"></ng-container>

    <ng-template #add>
      <div *ngFor="let item of data; let i = index" class="form-check">
        <div>
        <div>
        <input 
          (change)="onItemChange($event, item)" 
          class="form-check-input ngx-iselect-form-check-input" 
          id="item{{i}}"
          type="{{type}}"
          class="form-check-input ngx-iselect-input"
          >
          </div>
          </div>
        <label class="form-check-label ngx-iselect-form-check-label" for="item{{i}}">
          {{ item[label] }}
        </label>
      </div>
    </ng-template>

    <ng-template #edit>
      <div *ngFor="let item of data; let i = index" class="form-check">
        <input 
          (change)="onItemChange($event, item)" 
          [checked]="selected.includes(item[id] || 0)"
          class="form-check-input ngx-iselect-form-check-input"
          id="item{{i}}"
          type="{{type}}"
          class="form-check-input ngx-iselect-input"
          >
        <label class="form-check-label ngx-iselect-form-check-label" for="item{{i}}">
          {{ item[label] }}
        </label>
      </div>
    </ng-template>
  `,
  styles: []
})

export class NgxIselectComponent implements OnInit {
  @Input() selected: Array<any> = [];
  selected_objects: Array<any> = [];
  @Output() selectedChange = new EventEmitter<{ selected: Array<any> }>();
  @Input() data: Array<any> = [];
  @Input() type: string = 'checkbox';
  @Input() mode: string = 'multiple'; // or single
  @Input() isEdit: boolean = false;
  @Input() useObject : boolean = false;
  @Input() id: any;
  @Input() label: string = '';


  ngOnInit(): void {
    
    if(this.mode === 'single' && this.selected.length > 1){ 
      this.selected = this.selected.slice(0, 1);
      this.selected_objects = this.selected_objects.slice(0, 1);

    }
    if(this.isEdit){
        for(let s of this.selected){
            this.selected_objects.push(this.data.find((d) => d[this.id] === s))
        }
    }
    
  }

  onItemChange(event: Event, item: any) {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    if(this.mode === 'single'){
      this.selected = [];
      this.selected_objects = []
    }

    if (isChecked) {
      this.selected.push(item[this.id]);
      this.selected_objects.push(item);   
    } else {
      const index = this.selected.indexOf(item[this.id]);
      if (index !== -1) {
        this.selected.splice(index, 1);
        this.selected_objects.splice(index, 1);
      }
    }
    this.selectedChange.emit({selected: this.useObject ? this.selected_objects : this.selected });
    return this.useObject  ? this.selected_objects : this.selected;
  }



}

