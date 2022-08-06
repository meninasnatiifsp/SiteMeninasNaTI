import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.css']
})
export class SectionContentComponent implements OnInit {

  @Input() text: string | undefined;
  @Input() img: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
