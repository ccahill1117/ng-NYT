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

  randomOtherName: string = faker.name.findName();



}
