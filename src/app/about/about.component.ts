import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



  editors: string[] = [];

  constructor() { }

  ngOnInit() {
   
      let i;
      for(i=1;i<21;i++){
        let editorName = faker.name.findName();
        this.editors.push(editorName);
      }
      console.log(this.editors)

  }

}
