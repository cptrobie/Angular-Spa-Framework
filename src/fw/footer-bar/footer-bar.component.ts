import { Component, OnInit } from '@angular/core';

import { ScreenService } from '../services/screen.service';


@Component({
  selector: 'fw-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent implements OnInit {

  constructor(private scrnSvc: ScreenService) { }

  ngOnInit() {
  }

}
