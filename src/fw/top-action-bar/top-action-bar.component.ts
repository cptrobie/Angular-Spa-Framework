import { Component, OnInit } from '@angular/core';

import { FrameworkConfigService } from '../services/framework-config.service';


@Component({
  selector: 'fw-top-action-bar',
  templateUrl: './top-action-bar.component.html',
  styleUrls: ['./top-action-bar.component.scss']
})
export class TopActionBarComponent implements OnInit {

  constructor(private fwConfigSvc: FrameworkConfigService) { }

  ngOnInit() {
  }

}
