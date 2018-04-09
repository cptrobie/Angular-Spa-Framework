import { Component, OnInit } from '@angular/core';

import { ScreenService } from '../services/screen.service';


@Component({
  selector: 'fw-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(private scrnSvc: ScreenService) { }

  ngOnInit() {
  }

}
