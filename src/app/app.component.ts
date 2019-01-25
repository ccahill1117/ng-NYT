import { Component } from '@angular/core';
import * as faker from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'ny-times';

  randomName: string = "hey";

  randomOtherName: string = faker.lorem.paragraph();

  makeEditors() {
    let i;
    for(i=1;i<21;i++){
      let editorName = faker.name.findName();
      this.editors.push(editorName);
    }
  }



  console.log(editors);


}
