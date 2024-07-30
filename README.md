# ngx-iselect

A simple and intuitive component for managing selections in lists within Angular. This component is compatible with Bootstrap.

## Installation

` npm i ngx-iselect`. 

## Documentation

Inputs (Properties)

- data (Array<any>) - the data to display
- mode ( ? single | multiple ) - determine if multiple values can be selected. Default mode is multiple
- type (? checkbox | radio ) - determine the type of the form check input. Default type is checkbox
- id ( string ) - id attribut of the objects
- label ( string ) - the label to display
- selected (Array<string|number>) - if it's selected edition. the may have initial selected value. The Default value is false
- isEdit (boolean). when is isEdit is true, selected is required to check initial selection.
- useObject (? boolean ) - determine if the returned selected values are objects or object attribut like id.  The default value is false


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


// This will run when explicitly called (example : on button click)
showSelectedWithViewChild(){
  console.log("Showing select items with viewchild:", this.iselectComponent.selected_objects)
}

// This will run on each event
onSelectedChange(event: any){
  console.log("Showing select with event", event.selected)
}

}

```

NB: there are tow ways to access selected items from parents:

- onSelectedChange

```
<ngx-iselect #iselectComponent [useObject]="true" [isEdit]="true" [data]="listOfObjects" [label]="'name'" [id]="'id'" [selected]="selected_items" class="ngx-container" [type]="'checkbox'" (selectedChange)="onSelectedChange($event)"></ngx-iselect>

```

- ViewChild - used with template reference (example : #iselectComponent)


```
<ngx-iselect #iselectComponent [useObject]="true" [isEdit]="true" [data]="listOfObjects" [label]="'name'" [id]="'id'" [selected]="selected_items" class="ngx-container" [type]="'checkbox'"></ngx-iselect>

<button (click)="showSelectedWithViewChild()">Log selected elements</button>
```

#### Display style(css)
```
ngx-iselect{
  display: flex;
}
```


## Licence
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


