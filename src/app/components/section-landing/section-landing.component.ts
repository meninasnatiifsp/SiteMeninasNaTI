import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-landing',
  templateUrl: './section-landing.component.html',
  styleUrls: ['./section-landing.component.css']
})
export class SectionLandingComponent implements OnInit {

  @Input() texto: string | undefined;
  @Input() frase: string | undefined;
  @Input() img: string | undefined;
  @Input() dividerColor: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
