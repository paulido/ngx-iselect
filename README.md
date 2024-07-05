# ngx-iselect

Simple component for handle selection using checkbox or radio

## Installation

Run ` npm i ngx-iselect`. 

## Documentation

Inputs (Properties)

- data (Array<any>) - the data to display
- mode ( ? single | multiple ) - determine if multiple values can be selected. Default mode is multiple
- type (? checkbox | radio ) - determine the type of the form check input. Default type is checkbox
- id ( string ) - id attribut of the objects
- label ( string ) - the label to display
- isEdit (? boolean ) - if it's selected edition. the may have initial selected value. The Default value is false
- selected (Array<string|number>). when is isEdit is true, selected is required to check initial selection.
- useObject (? boolean ) - determine if the returned selected values objects or object attribut like id.  The default value is false


Outputs (Properties)

- selectedChange : selection change event handler


### Usage 

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxIselectModule } from 'ngx-iselect'; // add this

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIselectModule  // add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


```
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIselectComponent } from 'ngx-iselect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spring';
  @ViewChild('iselectComponent') iselectComponent!: NgxIselectComponent;
  selected_items: Array<any> = [];

  listOfObjects = [
    {
        id: 1,
        name: "Alice",
        age: 30,
        occupation: "Engineer"
    },
    {
        id: 2,
        name: "Bob",
        age: 25,
        occupation: "Designer"
    },
    {
        id: 3,
        name: "Charlie",
        age: 35,
        occupation: "Teacher"
    },
    {
        id: 4,
        name: "David",
        age: 28,
        occupation: "Developer"
    },
    {
        id: 5,
        name: "Eve",
        age: 22,
        occupation: "Student"
    }
];

constructor(){
  this.selected_items = [1,2]
}


showSelected(){
  console.log("showing select items with viewchild:", this.iselectComponent.selected_objects)
}


onSelectedChange(event: any){
  console.log("onSelectedChange", event.selected)
}

}

```

NB: there are tow to access selected items from parents:

. ViewChild - used with template reference (example : #iselectComponent)
. onSelectedChange


```
<ngx-iselect #iselectComponent [useObject]="true" [isEdit]="true" [data]="listOfObjects" [label]="'name'" [id]="'id'" [selected]="selected_items" class="ngx-container" [type]="'radio'" (selectedChange)="onSelectedChange($event)"></ngx-iselect>

```


## Licence
The MIT License

## Keywords

Angular, Data selection, checkbox, radio, list
