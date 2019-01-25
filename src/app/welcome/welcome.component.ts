import { Component, OnInit } from '@angular/core';
import { Editor } from '../models/editor.model'
import * as faker from 'faker';
import { EDITORS } from '../mock-editors'


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
