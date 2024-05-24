import { Component } from '@angular/core';
import { NgxIselectComponent } from 'ngx-iselect';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spring';

  selected_items = [1, 2]

  listOfObjects = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com'
    }
];

  onSelectedChange(event: any){

  }

  showSelected(){

  }


}
