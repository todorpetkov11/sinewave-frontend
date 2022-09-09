import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.css']
})
export class PageAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init()
  }

}
