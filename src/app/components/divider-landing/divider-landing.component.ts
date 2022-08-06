import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider-landing',
  templateUrl: './divider-landing.component.html',
  styleUrls: ['./divider-landing.component.css']
})
export class DividerLandingComponent implements OnInit {

  @Input() dividerColor: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
