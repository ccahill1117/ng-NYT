import { Component } from '@angular/core';
import * as faker from 'faker';
import { Editor } from './models/editor.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'ny-times';

  randomName: string = "hey";

  randomOtherName: string = faker.lorem.paragraph();

  editors: Editor[] = [

  ];








}
