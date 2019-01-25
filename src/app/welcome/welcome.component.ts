import { Component, OnInit } from '@angular/core';
import { Editor } from '../models/editor.model';
import * as faker from 'faker';
import { EditorService } from '../editor.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [EditorService]
})
export class WelcomeComponent implements OnInit {


  constructor(private editorService: EditorService) { }

  ngOnInit() {

    
  }

}
