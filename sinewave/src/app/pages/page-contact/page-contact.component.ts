import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init()
  }

}
