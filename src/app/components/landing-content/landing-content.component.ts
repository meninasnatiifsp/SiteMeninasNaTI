import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent implements OnInit {

  @Input() texto: string | undefined;
  @Input() img: string | undefined;
  @Input() frase: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
